import React, { Suspense, useRef, useMemo, useEffect, useState, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaImage, FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import LightboxModal from "../../../../components/common/LightboxModal/LightboxModal";

class GalleryErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn("3D Gallery Canvas Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="empty-gallery-state">
          <FaImage size={60} color="#f37021" />
          <h2>Gallery Syncing...</h2>
          <p>Please refresh the page to reload updated photos.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

function ParticleSphere({ images, onSelectImage, isPaused, isFreshersDay }) {
  const PARTICLE_COUNT = 1500;
  const PARTICLE_SIZE_MIN = 0.005;
  const PARTICLE_SIZE_MAX = 0.010;
  const SPHERE_RADIUS = 9;
  const POSITION_RANDOMNESS = 4;
  const ROTATION_SPEED_X = 0.0;
  const ROTATION_SPEED_Y = 0.0005;
  const PARTICLE_OPACITY = 1;

  const groupRef = useRef(null);
  const [textures, setTextures] = useState([]);

  // Robust texture loader with error fallback for locked/broken image files
  useEffect(() => {
    const loader = new THREE.TextureLoader();
    let isMounted = true;

    const loadAllTextures = async () => {
      const loadedList = await Promise.all(
        images.map(
          (url) =>
            new Promise((resolve) => {
              loader.load(
                url,
                (tex) => {
                  tex.wrapS = THREE.ClampToEdgeWrapping;
                  tex.wrapT = THREE.ClampToEdgeWrapping;
                  tex.flipY = true;
                  tex.colorSpace = THREE.SRGBColorSpace;
                  resolve(tex);
                },
                undefined,
                () => {
                  resolve(null); // Skip unreadable file without crashing
                }
              );
            })
        )
      );

      if (isMounted) {
        setTextures(loadedList.filter(Boolean));
      }
    };

    if (images && images.length > 0) {
      loadAllTextures();
    }

    return () => {
      isMounted = false;
    };
  }, [images]);

  const textureCount = textures.length;

  // Small circle radius specifically for Fresher's Day / small photo count
  const isSmallEvent = isFreshersDay || textureCount <= 8;
  const CIRCLE_RADIUS = isSmallEvent ? 6.5 : 13.0;
  const IMAGE_SIZE = isSmallEvent ? 2.8 : 3.2;

  const particles = useMemo(() => {
    const particlesArr = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const phi = Math.acos(-1 + (2 * i) / PARTICLE_COUNT);
      const theta = Math.sqrt(PARTICLE_COUNT * Math.PI) * phi;
      const radiusVariation = SPHERE_RADIUS + (Math.random() - 0.5) * POSITION_RANDOMNESS;
      const x = radiusVariation * Math.cos(theta) * Math.sin(phi);
      const y = radiusVariation * Math.cos(phi);
      const z = radiusVariation * Math.sin(theta) * Math.sin(phi);

      particlesArr.push({
        position: [x, y, z],
        scale: Math.random() * (PARTICLE_SIZE_MAX - PARTICLE_SIZE_MIN) + PARTICLE_SIZE_MIN,
        color: new THREE.Color().setHSL(
          Math.random() * 0.1 + 0.05,
          0.8,
          0.6 + Math.random() * 0.3
        ),
        rotationSpeed: (Math.random() - 0.5) * 0.01,
      });
    }
    return particlesArr;
  }, [PARTICLE_COUNT, SPHERE_RADIUS, POSITION_RANDOMNESS, PARTICLE_SIZE_MIN, PARTICLE_SIZE_MAX]);

  // Circle Ring Calculation (Compact for Fresher's Day, Expanded for large events)
  const orbitingImages = useMemo(() => {
    const calculatedImages = [];
    if (textureCount === 0) return calculatedImages;

    for (let i = 0; i < textureCount; i++) {
      const angle = (i / textureCount) * Math.PI * 2;
      const x = CIRCLE_RADIUS * Math.sin(angle);
      const y = 0;
      const z = CIRCLE_RADIUS * Math.cos(angle);

      const euler = new THREE.Euler(0, angle, 0);

      calculatedImages.push({
        position: [x, y, z],
        rotation: [euler.x, euler.y, euler.z],
        textureIndex: i,
      });
    }
    return calculatedImages;
  }, [textureCount, CIRCLE_RADIUS]);

  const targetRotation = useRef(0);
  const currentRotation = useRef(0);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!isPaused) {
        targetRotation.current += e.deltaY * 0.002;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [isPaused]);

  useFrame(() => {
    if (groupRef.current) {
      if (!isPaused) {
        targetRotation.current += ROTATION_SPEED_Y;
      }
      currentRotation.current += (targetRotation.current - currentRotation.current) * 0.05;
      groupRef.current.rotation.y = currentRotation.current;
      groupRef.current.rotation.x += ROTATION_SPEED_X;
    }
  });

  return (
    <group ref={groupRef}>
      {particles.map((particle, index) => (
        <mesh key={`particle-${index}`} position={particle.position} scale={particle.scale}>
          <sphereGeometry args={[1, 8, 6]} />
          <meshBasicMaterial color={particle.color} transparent opacity={PARTICLE_OPACITY} />
        </mesh>
      ))}

      {orbitingImages.map((image, index) => (
        <mesh 
          key={`image-${index}`} 
          position={image.position} 
          rotation={image.rotation}
          onClick={(e) => {
            e.stopPropagation();
            onSelectImage(index);
          }}
          onPointerOver={(e) => {
            e.stopPropagation();
            document.body.style.cursor = 'pointer';
          }}
          onPointerOut={() => {
            document.body.style.cursor = 'auto';
          }}
        >
          <planeGeometry args={[IMAGE_SIZE * 1.5, IMAGE_SIZE]} />
          <meshBasicMaterial
            map={textures[image.textureIndex]}
            opacity={1}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

export function Event3DGallery({ event, images }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const isFreshersDay = (event?.slug || "").includes("fresher");
  const isSmallEvent = isFreshersDay || (images && images.length <= 8);
  const cameraZ = isSmallEvent ? 10.5 : 16.0;

  const handleNext = useCallback(() => {
    if (selectedIndex === null || !images || images.length === 0) return;
    setSelectedIndex((prev) => (prev + 1) % images.length);
  }, [selectedIndex, images]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null || !images || images.length === 0) return;
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [selectedIndex, images]);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.cursor = 'auto';
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev, handleClose]);

  // Handle empty state explicitly before initializing 3D Canvas
  if (!images || images.length === 0) {
    return (
      <div className="event-3d-page">
        <div className="event-3d-header">
          <Link to="/gallery/events" className="back-to-events-btn">
            <FaArrowLeft /> Back to Events
          </Link>
          <h1>{event?.title || 'Event Gallery'}</h1>
          <p>No photos have been added to this event yet.</p>
        </div>
        <div className="empty-gallery-state">
          <FaImage size={60} color="#f37021" />
          <h2>Photos Coming Soon</h2>
          <p>We are currently gathering memories for this event.</p>
        </div>
      </div>
    );
  }

  const isModalOpen = selectedIndex !== null;

  return (
    <div className="event-3d-page">
      <div className="event-3d-header">
        <Link to="/gallery/events" className="back-to-events-btn">
          <FaArrowLeft /> Back to Events
        </Link>
        <h1>{event?.title || 'Event Gallery'}</h1>
        <p>Explore moments from {event?.title}</p>
        <span className="gallery-instruction-tip">
          💡 Click any photo to expand & freeze view
        </span>
      </div>

      <div className="event-3d-canvas-container">
        <GalleryErrorBoundary>
          <Canvas
            camera={{
              position: [0, 0, cameraZ],
              fov: 65,
            }}
          >
            <ambientLight intensity={0.5} />
            <Suspense fallback={null}>
              <ParticleSphere 
                images={images} 
                onSelectImage={(idx) => setSelectedIndex(idx)} 
                isPaused={isModalOpen}
                isFreshersDay={isFreshersDay}
              />
            </Suspense>
            <OrbitControls
              enablePan={false}
              enableZoom={!isModalOpen}
              enableRotate={!isModalOpen}
              minDistance={7}
              maxDistance={35}
              autoRotate={false}
            />
          </Canvas>
        </GalleryErrorBoundary>
      </div>

      {/* Reusable Shared Lightbox Modal */}
      <LightboxModal
        isOpen={isModalOpen}
        images={images}
        selectedIndex={selectedIndex}
        onClose={handleClose}
        onPrev={handlePrev}
        onNext={handleNext}
        title={event?.title || 'Event Gallery'}
      />
    </div>
  );
}

export default Event3DGallery;

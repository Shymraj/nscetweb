import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaImage } from "react-icons/fa";

function ParticleSphere({ images }) {
  const PARTICLE_COUNT = 1500;
  const PARTICLE_SIZE_MIN = 0.005;
  const PARTICLE_SIZE_MAX = 0.010;
  const SPHERE_RADIUS = 9;
  const POSITION_RANDOMNESS = 4;
  const ROTATION_SPEED_X = 0.0;
  const ROTATION_SPEED_Y = 0.0005;
  const PARTICLE_OPACITY = 1;
  const IMAGE_COUNT = images.length;
  const IMAGE_SIZE = 3.5; // Increased size so photos are clearly visible
  const ORBIT_RADIUS_X = 12; // Elliptical X radius
  const ORBIT_RADIUS_Z = 8;  // Elliptical Z radius (depth)

  const groupRef = useRef(null);

  // Load textures dynamically
  const textures = useTexture(images);

  useMemo(() => {
    textures.forEach((texture) => {
      if (texture) {
        texture.wrapS = THREE.ClampToEdgeWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        texture.flipY = false;
        // Optionally set colorSpace to SRGBColorSpace for accurate colors in newer three.js versions
        texture.colorSpace = THREE.SRGBColorSpace;
      }
    });
  }, [textures]);

  const particles = useMemo(() => {
    const particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const phi = Math.acos(-1 + (2 * i) / PARTICLE_COUNT);
      const theta = Math.sqrt(PARTICLE_COUNT * Math.PI) * phi;
      const radiusVariation = SPHERE_RADIUS + (Math.random() - 0.5) * POSITION_RANDOMNESS;
      const x = radiusVariation * Math.cos(theta) * Math.sin(phi);
      const y = radiusVariation * Math.cos(phi);
      const z = radiusVariation * Math.sin(theta) * Math.sin(phi);
      
      particles.push({
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
    return particles;
  }, [PARTICLE_COUNT, SPHERE_RADIUS, POSITION_RANDOMNESS, PARTICLE_SIZE_MIN, PARTICLE_SIZE_MAX]);

  const orbitingImages = useMemo(() => {
    const calculatedImages = [];
    if (IMAGE_COUNT === 0) return calculatedImages;

    for (let i = 0; i < IMAGE_COUNT; i++) {
      const angle = (i / IMAGE_COUNT) * Math.PI * 2;
      const x = ORBIT_RADIUS_X * Math.cos(angle);
      const y = 0;
      const z = ORBIT_RADIUS_Z * Math.sin(angle);
      
      const position = new THREE.Vector3(x, y, z);
      const center = new THREE.Vector3(0, 0, 0);
      const outwardDirection = position.clone().sub(center).normalize();
      
      const euler = new THREE.Euler();
      const matrix = new THREE.Matrix4();
      matrix.lookAt(position, position.clone().add(outwardDirection), new THREE.Vector3(0, 1, 0));
      euler.setFromRotationMatrix(matrix);
      euler.z += Math.PI; // Flip image upright if needed based on original implementation
      
      calculatedImages.push({
        position: [x, y, z],
        rotation: [euler.x, euler.y, euler.z],
        textureIndex: i, // We have a 1:1 mapping now
        color: new THREE.Color().setHSL(Math.random(), 0.7, 0.6),
      });
    }
    return calculatedImages;
  }, [IMAGE_COUNT, SPHERE_RADIUS]);

  const targetRotation = useRef(0);
  const currentRotation = useRef(0);

  useEffect(() => {
    const handleWheel = (e) => {
      // Small multiplier to make scroll feel natural
      targetRotation.current += e.deltaY * 0.002;
    };
    
    // Add non-passive event listener so it behaves consistently
    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      // Continuously add the auto-rotation speed to the target
      targetRotation.current += ROTATION_SPEED_Y;
      
      // Lerp (smoothly interpolate) current rotation towards target rotation
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
        <mesh key={`image-${index}`} position={image.position} rotation={image.rotation}>
          <planeGeometry args={[IMAGE_SIZE * 1.5, IMAGE_SIZE]} /> {/* Made it slightly wide like a landscape photo */}
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

  return (
    <div className="event-3d-page">
      <div className="event-3d-header">
        <Link to="/gallery/events" className="back-to-events-btn">
          <FaArrowLeft /> Back to Events
        </Link>
        <h1>{event?.title || 'Event Gallery'}</h1>
        <p>Explore moments from {event?.title}</p>
      </div>

      <div className="event-3d-canvas-container">
        <Canvas
          camera={{
            position: [0, 0, 14], // Moved camera closer for immersive full-screen feel
            fov: 65,
          }}
        >
          <ambientLight intensity={0.5} />
          <ParticleSphere images={images} />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableRotate={true}
            minDistance={10}
            maxDistance={30}
            autoRotate={false}
          />
        </Canvas>
      </div>
    </div>
  );
}

export default Event3DGallery;

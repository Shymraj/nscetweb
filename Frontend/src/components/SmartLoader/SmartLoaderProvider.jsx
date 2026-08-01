import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import nscetVideo from '../../page loading/NSCET.webm';
import nscetLogo from '../../assets/Img/nscet-logo.png';
import './SmartLoader.css';

const SmartLoaderContext = createContext({
  startLoading: () => {},
  stopLoading: () => {}
});

export const useSmartLoader = () => useContext(SmartLoaderContext);

export const SmartLoaderProvider = ({ children }) => {
  const [activeRequests, setActiveRequests] = useState(0);
  const [showLoader, setShowLoader] = useState(false);
  
  const showTimer = useRef(null);
  const minDurationTimer = useRef(null);
  const loaderShownAt = useRef(0);

  const startLoading = () => setActiveRequests(prev => prev + 1);
  const stopLoading = () => setActiveRequests(prev => Math.max(0, prev - 1));

  useEffect(() => {
    if (activeRequests > 0) {
      if (!showLoader) {
        showTimer.current = setTimeout(() => {
          setShowLoader(true);
          loaderShownAt.current = Date.now();
        }, 600); // Smart Delay: Wait 600ms before showing
      }
    } else {
      clearTimeout(showTimer.current);
      if (showLoader) {
        const timeShown = Date.now() - loaderShownAt.current;
        const minDuration = 500; // Minimum display time if shown
        const remainingTime = Math.max(0, minDuration - timeShown);
        
        minDurationTimer.current = setTimeout(() => {
          setShowLoader(false);
        }, remainingTime);
      }
    }

    return () => clearTimeout(showTimer.current);
  }, [activeRequests, showLoader]);

  useEffect(() => {
    // If we start loading again while waiting for min duration to expire, cancel hiding
    if (activeRequests > 0 && minDurationTimer.current) {
       clearTimeout(minDurationTimer.current);
       minDurationTimer.current = null;
    }
  }, [activeRequests]);

  return (
    <SmartLoaderContext.Provider value={{ startLoading, stopLoading }}>
      {children}
      
      {/* Invisible Preload */}
      <video preload="auto" style={{ display: 'none' }} src={nscetVideo}></video>
      <img src={nscetLogo} style={{ display: 'none' }} alt="preload" />

      {/* Loader UI */}
      <AnimatePresence>
        {showLoader && (
          <motion.div
            className="smart-loader-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <motion.div 
              className="smart-loader-content"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <div className="smart-loader-media-wrapper" style={{ width: '250px', height: '250px' }}>
                <video 
                  className="smart-loader-video"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  src={nscetVideo}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
                <img 
                  className="smart-loader-static" 
                  src={nscetLogo} 
                  alt="Loading..." 
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SmartLoaderContext.Provider>
  );
};

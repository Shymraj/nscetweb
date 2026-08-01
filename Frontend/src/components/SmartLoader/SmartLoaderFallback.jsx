import { useEffect } from 'react';
import { useSmartLoader } from './SmartLoaderProvider';

const SmartLoaderFallback = () => {
  const { startLoading, stopLoading } = useSmartLoader();

  useEffect(() => {
    startLoading();
    return () => stopLoading();
  }, [startLoading, stopLoading]);

  return null;
};

export default SmartLoaderFallback;

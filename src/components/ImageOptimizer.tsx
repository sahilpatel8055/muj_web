import { useState, useCallback } from 'react';
import LazyImage from './LazyImage';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
}

const ImageOptimizer = ({
  src,
  alt,
  width,
  height,
  className,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  priority = false,
  quality = 75
}: OptimizedImageProps) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = useCallback(() => {
    setImageError(true);
  }, []);

  // Generate responsive image URLs (for future CDN integration)
  const generateResponsiveUrls = useCallback((baseSrc: string) => {
    const breakpoints = [320, 640, 768, 1024, 1280, 1536];
    return breakpoints.map(bp => ({
      breakpoint: bp,
      url: `${baseSrc}?w=${bp}&q=${quality}`
    }));
  }, [quality]);

  if (imageError) {
    return (
      <div className={`flex items-center justify-center bg-muted text-muted-foreground ${className}`}>
        <span className="text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <LazyImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      onError={handleImageError}
    />
  );
};

export default ImageOptimizer;
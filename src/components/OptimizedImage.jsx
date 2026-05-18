import React from "react";
import { OPTIMIZED_IMAGES } from "../data/optimizedImages";

const DEFAULT_SIZES = "(min-width: 1024px) 50vw, 100vw";

const OptimizedImage = ({
  src,
  alt,
  priority = false,
  sizes = DEFAULT_SIZES,
  className = "",
  ...props
}) => {
  const variants = OPTIMIZED_IMAGES[src];
  const webpSrcSet = variants?.webp
    ?.map((variant) => `${variant.src} ${variant.width}w`)
    .join(", ");
  const fallbackSrcSet = variants?.fallback
    ?.map((variant) => `${variant.src} ${variant.width}w`)
    .join(", ");

  return (
    <picture style={{ display: "contents" }}>
      {webpSrcSet && <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />}
      <img
        src={src}
        srcSet={fallbackSrcSet}
        sizes={webpSrcSet || fallbackSrcSet ? sizes : undefined}
        alt={alt}
        className={className}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;

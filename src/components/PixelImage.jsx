import React, { useState, useEffect } from 'react';

const PIXEL_RESOLUTION = 24; // Pixels wide for the pixel art look

const PixelImage = ({ src, alt, className = '' }) => {
    const [pixelSrc, setPixelSrc] = useState(null);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ratio = img.naturalHeight / img.naturalWidth;
            canvas.width = PIXEL_RESOLUTION;
            canvas.height = Math.round(PIXEL_RESOLUTION * ratio);
            const ctx = canvas.getContext('2d');
            ctx.imageSmoothingEnabled = false;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            setPixelSrc(canvas.toDataURL('image/png'));
        };
        img.src = src;
    }, [src]);

    return (
        <div className={`relative w-full h-full ${className}`}>
            {/* Normal photo — always rendered underneath */}
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
                fetchPriority="high"
                loading="eager"
            />
            {/* Pixel art overlay — covers normal, fades out on group hover */}
            {pixelSrc && (
                <img
                    src={pixelSrc}
                    alt=""
                    aria-hidden="true"
                    className="pixel-overlay absolute inset-0 w-full h-full object-cover"
                    style={{ imageRendering: 'pixelated' }}
                />
            )}
        </div>
    );
};

export default PixelImage;

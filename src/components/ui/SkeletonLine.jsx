import React from 'react';

const SkeletonLine = ({ width = "100%", opacity = 0.15, height = "2px" }) => (
    <div className="bg-current rounded-full" style={{ width, opacity, height }}></div>
);

export default SkeletonLine;

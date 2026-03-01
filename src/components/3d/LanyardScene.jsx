import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import { Html } from '@react-three/drei';
import Lanyard from './Lanyard';
import { LanguageProvider } from '../../context/LanguageContext';

export default function LanyardScene({ children }) {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!isDesktop) {
        // Graceful Degradation: Fallback purely to the standard 2D DOM layout
        return (
            <div className="relative w-full h-full flex items-center justify-center">
                {children}
            </div>
        );
    }

    return (
        <div className="relative w-[100%] max-w-[450px] h-[500px] md:h-[600px] z-50 flex items-center justify-center origin-top overflow-visible -mt-12 group">
            <Canvas
                camera={{ position: [0, 0, 16], fov: 25 }}
                gl={{ alpha: true, antialias: true }}
                style={{ width: '100%', height: '100%', cursor: 'grab' }}
            >
                <ambientLight intensity={Math.PI} />
                <Suspense fallback={null}>
                    <Physics gravity={[0, -35, 0]} timeStep="vary">
                        <Lanyard>
                            {/* `distanceFactor` controls the scaling ratio between 3D space and HTML space */}
                            <Html
                                transform
                                wrapperClass="html-3d-badge"
                                distanceFactor={12}
                                style={{ pointerEvents: 'auto', transformOrigin: 'top center' }}
                                zIndexRange={[100, 0]}
                            >
                                <LanguageProvider>
                                    <div
                                        className="w-[280px] pointer-events-auto"
                                    >
                                        {children}
                                    </div>
                                </LanguageProvider>
                            </Html>
                        </Lanyard>
                    </Physics>
                </Suspense>
            </Canvas>
        </div>
    );
}

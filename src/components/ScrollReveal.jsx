import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ children, className = "", threshold = 0.1, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (entry.target) observer.unobserve(entry.target);
                }
            },
            {
                threshold: threshold,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        if (el) {
            observer.observe(el);
        }

        return () => {
            if (el) {
                observer.unobserve(el);
            }
        };
    }, [threshold]);

    const delayStyle = { transitionDelay: `${delay}ms` };

    return (
        <div
            ref={ref}
            style={delayStyle}
            className={`transition-all duration-1000 ease-out transform ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
                } ${className}`}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;

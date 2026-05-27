import React, { useEffect, useRef, useState } from "react";

const DeferredSection = ({
  children,
  force = false,
  deferUntilScroll = false,
  minHeight = "min-h-[360px]",
  rootMargin = "300px 0px",
  className = "",
}) => {
  const ref = useRef(null);
  const [hasScrollIntent, setHasScrollIntent] = useState(
    () => !deferUntilScroll || force || (typeof window !== "undefined" && window.scrollY > 0),
  );
  const [hasIntersected, setHasIntersected] = useState(
    () => force || typeof window === "undefined" || !("IntersectionObserver" in window),
  );
  const shouldRender = force || hasIntersected;

  useEffect(() => {
    if (!deferUntilScroll || hasScrollIntent || force) return undefined;

    const enableObserver = () => setHasScrollIntent(true);
    const options = { once: true, passive: true };

    window.addEventListener("scroll", enableObserver, options);
    window.addEventListener("wheel", enableObserver, options);
    window.addEventListener("touchmove", enableObserver, options);
    window.addEventListener("keydown", enableObserver, { once: true });

    return () => {
      window.removeEventListener("scroll", enableObserver);
      window.removeEventListener("wheel", enableObserver);
      window.removeEventListener("touchmove", enableObserver);
      window.removeEventListener("keydown", enableObserver);
    };
  }, [deferUntilScroll, force, hasScrollIntent]);

  useEffect(() => {
    if (shouldRender || !hasScrollIntent) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    const node = ref.current;
    if (node) observer.observe(node);

    return () => observer.disconnect();
  }, [hasScrollIntent, rootMargin, shouldRender]);

  return (
    <div
      ref={ref}
      className={`${className} ${shouldRender ? "" : minHeight}`}
      aria-busy={!shouldRender}
    >
      {shouldRender ? children : null}
    </div>
  );
};

export default DeferredSection;

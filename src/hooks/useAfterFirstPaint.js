import { useEffect, useState } from "react";

const requestIdle = (callback) => {
  if (typeof window === "undefined") return undefined;
  if ("requestIdleCallback" in window) {
    return window.requestIdleCallback(callback, { timeout: 1500 });
  }
  return window.setTimeout(callback, 300);
};

const cancelIdle = (id) => {
  if (typeof window === "undefined" || id === undefined) return;
  if ("cancelIdleCallback" in window) {
    window.cancelIdleCallback(id);
    return;
  }
  window.clearTimeout(id);
};

export const useAfterFirstPaint = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let rafId;
    let idleId;
    let cancelled = false;

    rafId = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        idleId = requestIdle(() => {
          if (!cancelled) setReady(true);
        });
      });
    });

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(rafId);
      cancelIdle(idleId);
    };
  }, []);

  return ready;
};

export default useAfterFirstPaint;

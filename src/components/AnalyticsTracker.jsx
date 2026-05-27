import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
let analyticsPromise;

const requestIdle = (callback) => {
  if (typeof window === "undefined") return undefined;
  if ("requestIdleCallback" in window) {
    return window.requestIdleCallback(callback, { timeout: 3000 });
  }
  return window.setTimeout(callback, 1000);
};

const cancelIdle = (id) => {
  if (typeof window === "undefined" || id === undefined) return;
  if ("cancelIdleCallback" in window) {
    window.cancelIdleCallback(id);
    return;
  }
  window.clearTimeout(id);
};

const getAnalytics = () => {
  if (!analyticsPromise) {
    analyticsPromise = import("react-ga4").then((module) => {
      const ReactGA = module.default;
      ReactGA.initialize(MEASUREMENT_ID);
      return ReactGA;
    });
  }
  return analyticsPromise;
};

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (!MEASUREMENT_ID) return;

    let cancelled = false;
    const idleId = requestIdle(() => {
      getAnalytics().then((ReactGA) => {
        if (cancelled) return;
        ReactGA.send({
          hitType: "pageview",
          page: location.pathname + location.search,
        });
      }).catch(() => {});
    });

    return () => {
      cancelled = true;
      cancelIdle(idleId);
    };
  }, [location]);

  return null;
};

export default AnalyticsTracker;

import { SpeedInsights } from "@vercel/speed-insights/react";

const isLocalHost = () => {
  if (typeof window === "undefined") return true;

  return ["localhost", "127.0.0.1", "::1"].includes(window.location.hostname);
};

const SpeedInsightsDeferred = () => {
  if (isLocalHost()) return null;

  return <SpeedInsights />;
};

export default SpeedInsightsDeferred;

import React, { Suspense, useState, useEffect } from "react";
import { lazyWithRetry } from "../utils/lazyWithRetry";
import { useAfterFirstPaint } from "../hooks/useAfterFirstPaint";
import { useProgressiveEnhancement } from "../hooks/useProgressiveEnhancement";

const AnalyticsTracker = lazyWithRetry(() => import("./AnalyticsTracker"));
const SpeedInsightsDeferred = lazyWithRetry(
  () => import("./SpeedInsightsDeferred"),
);
// AssistantLauncher is lazily mounted 3s after first paint to keep it
// completely outside the Core Web Vitals measurement window.
const AssistantLauncher = lazyWithRetry(() => import("./AssistantLauncher"));

const ProgressiveExperience = () => {
  const ready = useAfterFirstPaint();
  const canMountAssistant = useProgressiveEnhancement({ delay: 6000 });
  // Extra 3-second delay before mounting the assistant button + its listeners
  const [telemetryReady, setTelemetryReady] = useState(false);
  const [assistantReady, setAssistantReady] = useState(false);

  useEffect(() => {
    if (!ready) return;
    const id = window.setTimeout(() => setTelemetryReady(true), 6000);
    return () => window.clearTimeout(id);
  }, [ready]);

  useEffect(() => {
    if (!canMountAssistant) return;
    const id = window.setTimeout(() => setAssistantReady(true), 3000);
    return () => window.clearTimeout(id);
  }, [canMountAssistant]);

  if (!ready) return null;

  return (
    <Suspense fallback={null}>
      {telemetryReady && (
        <>
          <AnalyticsTracker />
          <SpeedInsightsDeferred />
        </>
      )}
      {canMountAssistant && assistantReady && <AssistantLauncher />}
    </Suspense>
  );
};

export default ProgressiveExperience;

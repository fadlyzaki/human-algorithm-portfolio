import React, { Suspense } from "react";
import { lazyWithRetry } from "../utils/lazyWithRetry";
import { useAfterFirstPaint } from "../hooks/useAfterFirstPaint";
import AssistantLauncher from "./AssistantLauncher";

const AnalyticsTracker = lazyWithRetry(() => import("./AnalyticsTracker"));
const SpeedInsightsDeferred = lazyWithRetry(
  () => import("./SpeedInsightsDeferred"),
);

const ProgressiveExperience = () => {
  const ready = useAfterFirstPaint();

  if (!ready) return null;

  return (
    <Suspense fallback={null}>
      <AnalyticsTracker />
      <SpeedInsightsDeferred />
      <AssistantLauncher />
    </Suspense>
  );
};

export default ProgressiveExperience;

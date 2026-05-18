import React, { Suspense } from "react";
import { lazyWithRetry } from "../utils/lazyWithRetry";
import { useAfterFirstPaint } from "../hooks/useAfterFirstPaint";

const AnalyticsTracker = lazyWithRetry(() => import("./AnalyticsTracker"));
const VirtualAssistant = lazyWithRetry(() => import("./VirtualAssistant"));
const CustomCursor = lazyWithRetry(() => import("./CustomCursor"));
const CircadianOverlay = lazyWithRetry(() => import("./CircadianOverlay"));
const VariableTypographyController = lazyWithRetry(
  () => import("./VariableTypographyController"),
);
const SpeedInsightsDeferred = lazyWithRetry(
  () => import("./SpeedInsightsDeferred"),
);

const ProgressiveExperience = () => {
  const ready = useAfterFirstPaint();

  if (!ready) return null;

  return (
    <Suspense fallback={null}>
      <AnalyticsTracker />
      <VirtualAssistant />
      <CustomCursor />
      <CircadianOverlay />
      <VariableTypographyController />
      <SpeedInsightsDeferred />
    </Suspense>
  );
};

export default ProgressiveExperience;

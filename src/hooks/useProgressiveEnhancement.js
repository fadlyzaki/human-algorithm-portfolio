import { useEffect, useState } from "react";
import { useAfterFirstPaint } from "./useAfterFirstPaint";
import {
  canUseProgressiveEnhancement,
  cancelIdleCallback,
  scheduleIdleCallback,
} from "../utils/progressiveEnhancement";

export const useProgressiveEnhancement = ({ delay = 2500 } = {}) => {
  const afterFirstPaint = useAfterFirstPaint();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!afterFirstPaint || !canUseProgressiveEnhancement()) {
      const resetId = window.setTimeout(() => setEnabled(false), 0);
      return () => window.clearTimeout(resetId);
    }

    let timeoutId;
    const idleId = scheduleIdleCallback(() => {
      timeoutId = window.setTimeout(() => setEnabled(true), delay);
    });

    return () => {
      cancelIdleCallback(idleId);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [afterFirstPaint, delay]);

  return enabled;
};

export default useProgressiveEnhancement;

import React, { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { lazyWithRetry } from "../utils/lazyWithRetry";

const VirtualAssistant = lazyWithRetry(() => import("./VirtualAssistant"));

const FULL_ASSISTANT_IMPORT = () => import("./VirtualAssistant");
const DESKTOP_PREFETCH_DELAY = 10000;

const isDesktopPointer = () => {
  if (typeof window === "undefined" || !("matchMedia" in window)) return false;
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
};

const scheduleIdle = (callback, timeout = 2000) => {
  if (typeof window === "undefined") return undefined;
  if ("requestIdleCallback" in window) {
    return window.requestIdleCallback(callback, { timeout });
  }
  return window.setTimeout(callback, timeout);
};

const cancelIdle = (id) => {
  if (typeof window === "undefined" || id === undefined) return;
  if ("cancelIdleCallback" in window) {
    window.cancelIdleCallback(id);
    return;
  }
  window.clearTimeout(id);
};

const LauncherButton = ({ onActivate, onWarm, busy = false, disabled = false }) => (
  <button
    type="button"
    aria-label="Open Echo.Z assistant"
    aria-busy={busy}
    title="Open Echo.Z assistant"
    disabled={disabled}
    onClick={onActivate}
    onFocus={onWarm}
    onPointerEnter={onWarm}
    className="fixed bottom-4 right-4 z-[100] h-12 w-12 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)]/95 text-[var(--text-primary)] shadow-[0_8px_30px_rgba(0,0,0,0.16)] backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)] disabled:cursor-wait disabled:opacity-70"
  >
    <span className="flex h-full w-full items-center justify-center font-mono text-[10px] font-black tracking-[0.2em] text-[var(--accent-blue)]">
      E.Z
    </span>
  </button>
);

const AssistantLauncher = () => {
  const [isActive, setIsActive] = useState(false);
  const [isWarming, setIsWarming] = useState(false);
  const warmStartedRef = useRef(false);
  const idleWarmIdRef = useRef(undefined);

  const warmAssistant = useCallback(() => {
    if (warmStartedRef.current) return;
    warmStartedRef.current = true;
    setIsWarming(true);
    FULL_ASSISTANT_IMPORT()
      .catch(() => {
        warmStartedRef.current = false;
      })
      .finally(() => setIsWarming(false));
  }, []);

  useEffect(() => {
    if (!isDesktopPointer()) return undefined;

    const delayId = window.setTimeout(() => {
      idleWarmIdRef.current = scheduleIdle(warmAssistant, 3000);
    }, DESKTOP_PREFETCH_DELAY);

    return () => {
      window.clearTimeout(delayId);
      cancelIdle(idleWarmIdRef.current);
      idleWarmIdRef.current = undefined;
    };
  }, [warmAssistant]);

  if (isActive) {
    return (
      <Suspense
        fallback={
          <LauncherButton
            onActivate={() => {}}
            onWarm={() => {}}
            busy
            disabled
          />
        }
      >
        <VirtualAssistant initialOpen />
      </Suspense>
    );
  }

  return (
    <LauncherButton
      onActivate={() => {
        warmAssistant();
        setIsActive(true);
      }}
      onWarm={warmAssistant}
      busy={isWarming}
    />
  );
};

export default AssistantLauncher;

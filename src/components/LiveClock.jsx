import React, { useState, useEffect, memo } from "react";
import { Clock } from "lucide-react";

/**
 * Isolated LiveClock component to prevent 1Hz re-renders
 * from propagating to the entire Navbar tree.
 */
const LiveClock = memo(() => {
    const [time, setTime] = useState(new Date());
    const [timeZone] = useState(() => {
        try {
            return new Date()
                .toLocaleTimeString("en-US", { timeZoneName: "short" })
                .split(" ")
                .pop();
        } catch {
            return "LOC";
        }
    });

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
        });
    };

    return (
        <div className="hidden lg:flex items-center gap-2 font-mono text-xs text-[var(--text-secondary)] border-r border-[var(--border-color)] pr-4 mr-1">
            <Clock size={12} className="opacity-70" />
            <span>{formatTime(time)}</span>
            <span className="text-[9px] opacity-50">{timeZone}</span>
        </div>
    );
});

LiveClock.displayName = "LiveClock";

export default LiveClock;

"use client";

import { useEffect, useState } from "react";

/** Live Hong Kong time, a small sign that the studio is local. */
export default function HKClock({ className = "" }: { className?: string }) {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Hong_Kong" });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);
  return (
    <p className={`t-small tabular-nums ${className}`}>
      Hong Kong <span className="inline-block min-w-[40px]">{time ?? "--:--"}</span>
    </p>
  );
}

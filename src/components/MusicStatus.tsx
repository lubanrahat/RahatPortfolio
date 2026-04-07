"use client";

export default function MusicStatus() {
  return (
    <div className="rounded-xl border border-border bg-card px-5 py-4">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
          <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-[#22c55e] animate-ping opacity-30" />
        </div>
        <div>
          <p className="text-sm text-foreground font-medium">Offline</p>
          <p className="text-xs text-muted-foreground">Not currently listening</p>
          <p className="text-xs text-muted-foreground/70">Music activity unavailable</p>
        </div>
      </div>
    </div>
  );
}

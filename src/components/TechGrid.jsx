/**
 * TechGrid — Subtle, asymmetric background decoration.
 *
 * Replaces the old mathematical SVG grid with a handful of soft
 * CSS lines positioned asymmetrically, creating organic depth
 * without visual clutter.
 */
export default function TechGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Vertical accent — left third */}
      <div className="absolute left-[22%] top-0 h-full w-px bg-accent/[0.07]" />

      {/* Vertical accent — golden section */}
      <div className="absolute left-[61.8%] top-0 h-full w-px bg-accent-soft/[0.06]" />

      {/* Horizontal whisper */}
      <div className="absolute left-0 top-[38%] h-px w-full bg-accent/[0.05]" />

      {/* Intersection dot */}
      <div className="absolute left-[22%] top-[38%] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20" />

      {/* Gradient vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />
    </div>
  );
}
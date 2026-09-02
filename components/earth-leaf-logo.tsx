/**
 * IntraGlobe Overseas — Earth + Leaf logomark.
 *
 * A finely balanced mark: a globe with equator, meridian and a hint of
 * landmass; a single leaf sprouts from the north pole on a short stem —
 * signalling a nature-conscious, globally-crafted apparel house.
 *
 * Colours inherit via `currentColor` so the mark can be dropped into any
 * text-color context. Sub-strokes use opacity to build depth without
 * introducing extra palette variables.
 */
export function EarthLeafLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Globe outline */}
      <circle
        cx="20"
        cy="24"
        r="11"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      {/* Meridian (full vertical ellipse) */}
      <ellipse
        cx="20"
        cy="24"
        rx="5"
        ry="11"
        stroke="currentColor"
        strokeWidth="1.15"
        opacity="0.55"
      />

      {/* Equator — slight arc to imply perspective */}
      <path
        d="M9 24 Q 20 25.8 31 24"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        opacity="0.55"
      />

      {/* Landmass silhouette hint */}
      <path
        d="M13.5 20 Q 17 21.2 20.5 19 Q 24 17.5 27 19.6"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        opacity="0.35"
      />

      {/* Stem — connects globe to leaf */}
      <path
        d="M20 13 L 20 9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* Leaf — subtly asymmetric almond form, tip nudged right for
          organic feel */}
      <path
        d="M20 9
           C 13.5 7 16 2.6 21 1.4
           C 26 2.8 26.5 7.6 20 9 Z"
        fill="currentColor"
      />
    </svg>
  )
}

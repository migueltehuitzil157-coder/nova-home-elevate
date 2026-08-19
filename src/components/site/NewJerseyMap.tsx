const NJ_PATH =
  "M 287.8 20 L 254.9 84.3 L 217.3 129.3 L 151.6 174.4 L 170.4 219.4 L 132.8 268.6 L 132.8 338.2 L 170.4 403.7 L 198.6 452.9 L 267.5 485.6 L 245.5 534.8 L 148.4 596.2 L 63.9 637.2 L 45.1 690.4 L 20 755.9 L 29.4 801 L 60.7 829.6 L 142.2 870.6 L 195.4 985.2 L 204.8 1013.9 L 258.1 960.7 L 292.5 911.5 L 374 837.8 L 405.3 788.7 L 474.2 678.1 L 489.9 575.7 L 511.8 485.6 L 514.9 428.3 L 505.5 383.2 L 427.2 383.2 L 433.5 350.5 L 442.9 338.2 L 446 309.5 L 496.1 289.1 L 518.1 248.1 L 536.9 194.9 L 540 166.2 Z";

type City = { name: string; x: number; y: number; anchor?: "start" | "end"; dy?: number };

const CITIES: City[] = [
  { name: "Paterson", x: 452, y: 200.6, anchor: "start" },
  { name: "Morristown", x: 354.9, y: 249.3, anchor: "end" },
  { name: "Newark", x: 451.7, y: 274.7, anchor: "start" },
  { name: "Jersey City", x: 492.1, y: 282.1, anchor: "start", dy: 26 },
  { name: "Elizabeth", x: 439.4, y: 303.8, anchor: "start", dy: 22 },
  { name: "Edison", x: 376.5, y: 363.6, anchor: "end" },
  { name: "New Brunswick", x: 364, y: 376.7, anchor: "end", dy: 24 },
  { name: "Princeton", x: 296.6, y: 429.5, anchor: "end" },
  { name: "Trenton", x: 272.8, y: 486.9, anchor: "end" },
  { name: "Atlantic City", x: 373, y: 836.2, anchor: "end" },
];

export function NewJerseyMap({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 620 1055"
      role="img"
      aria-label="Map of New Jersey with cities Nova serves"
      className={className}
    >
      <defs>
        <linearGradient id="nj-fill" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.14" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.04" />
        </linearGradient>
        <pattern id="nj-grid" width="34" height="34" patternUnits="userSpaceOnUse">
          <path d="M34 0H0v34" fill="none" stroke="currentColor" strokeOpacity="0.13" strokeWidth="0.6" />
        </pattern>
        <clipPath id="nj-clip">
          <path d={NJ_PATH} />
        </clipPath>
      </defs>

      <g>
        <path d={NJ_PATH} fill="url(#nj-fill)" />
        <g clipPath="url(#nj-clip)">
          <rect x="0" y="0" width="620" height="1055" fill="url(#nj-grid)" />
        </g>
        <path
          d={NJ_PATH}
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.55"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </g>

      {CITIES.map((city, i) => (
        <g key={city.name}>
          <circle
            cx={city.x}
            cy={city.y}
            r="5"
            fill="currentColor"
            opacity="0.35"
            className="map-pulse"
            style={{ animationDelay: `${i * 340}ms`, transformBox: "fill-box" }}
          />
          <circle cx={city.x} cy={city.y} r="4.2" fill="currentColor" />
          <text
            x={city.anchor === "end" ? city.x - 14 : city.x + 14}
            y={(city.y ?? 0) + (city.dy ?? 5)}
            textAnchor={city.anchor === "end" ? "end" : "start"}
            fill="currentColor"
            fillOpacity="0.85"
            style={{
              fontSize: "20px",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            {city.name.toUpperCase()}
          </text>
        </g>
      ))}
    </svg>
  );
}

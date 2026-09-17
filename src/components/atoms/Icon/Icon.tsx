import type { SVGProps } from "react";

const paths = {
  github: "M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z",
  linkedin: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z",
  kaggle: "M18.83 23.1c-.02.1-.12.15-.3.15h-3.1c-.19 0-.35-.08-.47-.24l-5.12-6.51-1.43 1.36v5.06c0 .22-.11.33-.33.33H5.67c-.22 0-.33-.11-.33-.33V.9c0-.22.11-.33.33-.33h2.41c.22 0 .33.11.33.33v14.25l6.17-6.24c.14-.14.3-.21.47-.21h3.22c.14 0 .23.06.28.18.04.13.03.23-.03.3l-6.53 6.32 6.81 8.46c.09.1.1.2.03.3Z",
  arrow: "M7 17 17 7M8 7h9v9",
  arrowRight: "M5 12h14m-6-6 6 6-6 6",
  arrowDown: "M12 5v14m-6-6 6 6 6-6",
  download: "M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 20h14",
  mail: "M4 6h16v12H4zM4 7l8 6 8-6",
  sun: "M12 3v2m0 14v2M5.64 5.64l1.41 1.41m9.9 9.9 1.41 1.41M3 12h2m14 0h2M5.64 18.36l1.41-1.41m9.9-9.9 1.41-1.41M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",
  moon: "M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z",
  copy: "M9 9h10v10H9zM5 15V5h10",
  check: "m5 12 5 5 9-10",
  search: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm9 2-4-4",
  lock: "M7 11V8a5 5 0 0 1 10 0v3M5 11h14v10H5z",
  hash: "M9 4 7 20M17 4l-2 16M4 9h16M3 15h16",
  globe: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-9-9h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z",
} as const;

export type IconName = keyof typeof paths;

const filled = new Set<IconName>(["github", "linkedin", "kaggle"]);

export type IconProps = SVGProps<SVGSVGElement> & { name: IconName; size?: number };

export function Icon({ name, size = 18, ...rest }: IconProps) {
  const isFilled = filled.has(name);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill={isFilled ? "currentColor" : "none"}
      stroke={isFilled ? "none" : "currentColor"}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d={paths[name]} />
    </svg>
  );
}

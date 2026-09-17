import type { HTMLAttributes } from "react";
import styles from "./Tag.module.css";

export type TagProps = HTMLAttributes<HTMLSpanElement> & { tone?: "neutral" | "accent" | "live" };

export function Tag({ tone = "neutral", className, ...rest }: TagProps) {
  return <span className={[styles.tag, styles[tone], className].filter(Boolean).join(" ")} {...rest} />;
}

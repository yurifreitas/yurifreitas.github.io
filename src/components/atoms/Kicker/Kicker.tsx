import type { HTMLAttributes } from "react";
import styles from "./Kicker.module.css";

export function Kicker({ className, ...rest }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={[styles.kicker, className].filter(Boolean).join(" ")} {...rest} />;
}

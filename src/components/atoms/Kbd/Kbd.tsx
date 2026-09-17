import type { HTMLAttributes } from "react";
import styles from "./Kbd.module.css";

export function Kbd({ className, ...rest }: HTMLAttributes<HTMLElement>) {
  return <kbd className={[styles.kbd, className].filter(Boolean).join(" ")} {...rest} />;
}

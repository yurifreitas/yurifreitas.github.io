import type { ReactNode } from "react";
import styles from "./Section.module.css";

export type SectionProps = { id: string; labelledBy?: string; tone?: "base" | "deep"; children: ReactNode };

export function Section({ id, labelledBy, tone = "base", children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={styles.section} data-tone={tone}>
      <div className="container">{children}</div>
    </section>
  );
}

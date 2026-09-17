import type { CSSProperties } from "react";
import { Spotlight } from "@/components/molecules/Spotlight";
import styles from "./ServiceCard.module.css";

export type ServiceCardProps = { index: number; title: string; summary: string; deliverables: string[] };

export function ServiceCard({ index, title, summary, deliverables }: ServiceCardProps) {
  return (
    <article className={styles.cell + " reveal"} style={{ "--i": index } as CSSProperties}>
      <Spotlight className={styles.card}>
        <span className={styles.index + " num"}>{String(index + 1).padStart(2, "0")}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.summary}>{summary}</p>
        <ul className={styles.list}>
          {deliverables.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Spotlight>
    </article>
  );
}

import type { CSSProperties } from "react";
import styles from "./TimelineItem.module.css";

export type TimelineItemProps = { index: number; period: string; company: string; client?: string; role: string; highlights: string[]; current?: boolean };

export function TimelineItem({ index, period, company, client, role, highlights, current }: TimelineItemProps) {
  return (
    <li className={styles.item + " reveal"} data-current={current ? "true" : undefined} style={{ "--i": index } as CSSProperties}>
      <p className={styles.period + " num"}>{period}</p>
      <span className={styles.node} aria-hidden="true" />
      <div className={styles.content}>
        <h3 className={styles.company}>
          {company}
          {client && <span className={styles.client}> · {client}</span>}
        </h3>
        <p className={styles.role}>{role}</p>
        <ul className={styles.highlights}>
          {highlights.map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}

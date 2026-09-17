import type { CSSProperties } from "react";
import { Tag } from "@/components/atoms/Tag";
import styles from "./CaseCard.module.css";

export type CaseCardProps = {
  index: number;
  client: string;
  via?: string;
  viaLabel?: string;
  sector: string;
  title: string;
  outcome: string;
  metrics: { value: string; label: string }[];
  stack: string[];
  href?: string;
  hrefLabel?: string;
};

export function CaseCard({ index, client, via, viaLabel, sector, title, outcome, metrics, stack, href, hrefLabel }: CaseCardProps) {
  return (
    <article className={styles.card + " reveal"} style={{ "--i": index } as CSSProperties}>
      <header className={styles.head}>
        <p className={styles.client}>
          {client}
          {via && <span className={styles.via}>{viaLabel} {via}</span>}
        </p>
        <Tag>{sector}</Tag>
      </header>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.outcome}>{outcome}</p>
      <dl className={styles.metrics}>
        {metrics.map((m) => (
          <div key={m.value + m.label} className={styles.metric}>
            <dt className={styles.metricLabel}>{m.label}</dt>
            <dd className={styles.metricValue + " num"}>{m.value}</dd>
          </div>
        ))}
      </dl>
      <p className={styles.stack}>{stack.join(" · ")}</p>
      {href && (
        <a className={styles.more} href={href}>
          {hrefLabel} <span aria-hidden="true">→</span>
        </a>
      )}
    </article>
  );
}

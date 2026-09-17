import type { CSSProperties } from "react";
import { Tag } from "@/components/atoms/Tag";
import styles from "./RankRow.module.css";

export type RankRowProps = {
  index: number;
  place: number | null;
  field?: number;
  placeLabel: string;
  platform: string;
  competition: string;
  host: string;
  metric: string;
  summary: string;
  statusLabel: string;
  live: boolean;
  highlight?: boolean;
  topLabel: string;
  sourceHref?: string;
  sourceLabel?: string;
};

const ordinal = (n: number) => (n <= 3 ? n + "º" : "#" + n);

export function RankRow(props: RankRowProps) {
  const pct = props.place && props.field ? (props.place / props.field) * 100 : null;
  const tier = props.place === 1 ? "gold" : props.place === 2 ? "silver" : props.place === 3 ? "bronze" : "rest";

  return (
    <li
      className={styles.row + " reveal"}
      data-tier={tier}
      data-highlight={props.highlight ? "true" : undefined}
      style={{ "--i": props.index } as CSSProperties}
    >
      <div className={styles.place}>
        <span className={styles.placeValue + " num"}>{props.place ? ordinal(props.place) : "—"}</span>
        <span className={styles.placeLabel}>{props.placeLabel}</span>
      </div>

      <div className={styles.body}>
        <div className={styles.meta}>
          <Tag tone="accent">{props.platform}</Tag>
          <Tag tone={props.live ? "live" : "neutral"}>{props.statusLabel}</Tag>
        </div>
        <h3 className={styles.title}>{props.competition}</h3>
        <p className={styles.host}>{props.host}</p>
        <p className={styles.summary}>{props.summary}</p>
        {props.sourceHref && (
          <a className={styles.source} href={props.sourceHref} target="_blank" rel="noreferrer">
            {props.sourceLabel} ↗
          </a>
        )}
      </div>

      <div className={styles.side}>
        <p className={styles.metric + " num"}>{props.metric}</p>
        {pct !== null && (
          <div className={styles.meter} style={{ "--p": Math.max(pct, 1.2) + "%" } as CSSProperties}>
            <div className={styles.track} role="img" aria-label={props.topLabel + " " + pct.toFixed(1) + "%"}>
              <span className={styles.fill} />
              <span className={styles.marker} />
            </div>
            <p className={styles.meterLabel + " num"}>
              {props.topLabel} <strong>{pct < 10 ? pct.toFixed(1) : Math.round(pct)}%</strong>
            </p>
          </div>
        )}
      </div>
    </li>
  );
}

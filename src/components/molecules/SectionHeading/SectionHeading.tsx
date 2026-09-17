import type { ReactNode } from "react";
import { Kicker } from "@/components/atoms/Kicker";
import styles from "./SectionHeading.module.css";

export type SectionHeadingProps = { id: string; kicker: string; title: string; lead?: string; aside?: ReactNode };

export function SectionHeading({ id, kicker, title, lead, aside }: SectionHeadingProps) {
  return (
    <header className={styles.heading}>
      <div className={styles.text}>
        <Kicker className="reveal">{kicker}</Kicker>
        <h2 id={id} className={styles.title + " reveal"} style={{ "--i": 1 } as React.CSSProperties}>{title}</h2>
        {lead && <p className={styles.lead + " reveal"} style={{ "--i": 2 } as React.CSSProperties}>{lead}</p>}
      </div>
      {aside && <div className={styles.aside + " reveal"} style={{ "--i": 3 } as React.CSSProperties}>{aside}</div>}
    </header>
  );
}

import type { CSSProperties } from "react";
import { CategoryDot } from "@/components/atoms/CategoryDot";
import { Icon } from "@/components/atoms/Icon";
import type { Category } from "@/content/types";
import styles from "./IndexRow.module.css";

export type IndexRowProps = {
  index: number;
  year: number;
  name: string;
  category: Category;
  line: string;
  stack: string[];
  href?: string;
  visibilityLabel: string;
};

export function IndexRow({ index, year, name, category, line, stack, href, visibilityLabel }: IndexRowProps) {
  const content = (
    <>
      <span className={styles.year + " num"}>{year}</span>
      <span className={styles.name}>
        <CategoryDot category={category} />
        <span>{name}</span>
      </span>
      <span className={styles.line}>{line}</span>
      <span className={styles.stack}>{stack.slice(0, 3).join(" · ")}</span>
      <span className={styles.end} data-public={href ? "true" : undefined}>
        {href ? <Icon name="arrow" size={16} /> : <><Icon name="lock" size={13} /> {visibilityLabel}</>}
      </span>
    </>
  );

  return (
    <li className={styles.item} style={{ "--i": Math.min(index, 12) } as CSSProperties}>
      {href ? (
        <a className={styles.row} href={href} target="_blank" rel="noreferrer">{content}</a>
      ) : (
        <div className={styles.row} data-mention="true">{content}</div>
      )}
    </li>
  );
}

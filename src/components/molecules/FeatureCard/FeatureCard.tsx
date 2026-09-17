import type { CSSProperties } from "react";
import { CategoryDot } from "@/components/atoms/CategoryDot";
import { Icon } from "@/components/atoms/Icon";
import { Spotlight } from "@/components/molecules/Spotlight";
import type { Category } from "@/content/types";
import styles from "./FeatureCard.module.css";

export type FeatureCardProps = {
  index: number;
  size: "hero" | "wide" | "regular";
  name: string;
  year: number;
  category: Category;
  categoryLabel: string;
  tagline: string;
  description: string;
  facts: string[];
  stack: string[];
  repo: string;
  live?: string;
  repoLabel: string;
  liveLabel: string;
};

export function FeatureCard(props: FeatureCardProps) {
  return (
    <article className={styles.cell + " reveal"} data-size={props.size} style={{ "--i": props.index } as CSSProperties}>
      <Spotlight className={styles.card}>
        <header className={styles.top}>
          <span className={styles.category}>
            <CategoryDot category={props.category} /> {props.categoryLabel}
          </span>
          <span className={styles.year + " num"}>{props.year}</span>
        </header>

        <div className={styles.main}>
          <h3 className={styles.name}>{props.name}</h3>
          <p className={styles.tagline}>{props.tagline}</p>
          <p className={styles.description}>{props.description}</p>
        </div>

        {props.facts.length > 0 && (
          <ul className={styles.facts}>
            {props.facts.map((fact) => (
              <li key={fact} className="num">{fact}</li>
            ))}
          </ul>
        )}

        <footer className={styles.bottom}>
          <span className={styles.stack}>{props.stack.join(" · ")}</span>
          <span className={styles.links}>
            {props.live && (
              <a className={styles.link} href={props.live} target="_blank" rel="noreferrer">
                {props.liveLabel} <Icon name="arrow" size={15} />
              </a>
            )}
            <a className={styles.link} href={props.repo} target="_blank" rel="noreferrer" aria-label={props.repoLabel + " — " + props.name}>
              <Icon name="github" size={16} />
            </a>
          </span>
        </footer>
      </Spotlight>
    </article>
  );
}

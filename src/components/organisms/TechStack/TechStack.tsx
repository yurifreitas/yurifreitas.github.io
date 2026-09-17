import type { CSSProperties } from "react";
import { techGroups } from "@/content/domains";
import type { T } from "@/content/types";
import { ui } from "@/content/ui";
import { useLocale } from "@/lib/i18n";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { Section } from "@/components/templates/Section";
import styles from "./TechStack.module.css";

export function TechStack() {
  const { t } = useLocale();
  const label = (v: string | T) => (typeof v === "string" ? v : t(v));
  const total = techGroups.reduce((sum, g) => sum + g.items.length, 0);

  return (
    <Section id="stack" labelledBy="stack-title" tone="deep">
      <SectionHeading
        id="stack-title"
        kicker={t(ui.stack.kicker)}
        title={t(ui.stack.title)}
        lead={t(ui.stack.lead)}
        aside={
          <p className={styles.tally + " num"}>
            <span className={styles.tallyValue}>{total}</span>
            <span>{t(ui.stack.count)}<br />{techGroups.length} {t(ui.stack.groups)}</span>
          </p>
        }
      />
      <div className={styles.grid}>
        {techGroups.map((group, i) => (
          <section key={group.id} className={styles.group + " reveal"} style={{ "--i": i } as CSSProperties} aria-label={t(group.title)}>
            <header className={styles.head}>
              <h3 className={styles.title}>{t(group.title)}</h3>
              <span className={styles.count + " num"}>{group.items.length}</span>
            </header>
            <ul className={styles.items}>
              {group.items.map((item) => (
                <li key={label(item.name)} className={styles.item} data-used={item.where ? "true" : undefined}>
                  <span className={styles.name}>{label(item.name)}</span>
                  {item.where && <span className={styles.where}>{item.where}</span>}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <p className={styles.legend + " reveal"}>
        <span className={styles.legendDot} aria-hidden="true" /> {t(ui.stack.legend)}
      </p>
    </Section>
  );
}

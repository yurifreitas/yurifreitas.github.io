import { useId, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { domains, evidenceLabel } from "@/content/domains";
import type { T } from "@/content/types";
import { ui } from "@/content/ui";
import { useLocale } from "@/lib/i18n";
import { Tag } from "@/components/atoms/Tag";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { Section } from "@/components/templates/Section";
import styles from "./Domains.module.css";

export function Domains() {
  const { t } = useLocale();
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const label = (v: string | T) => (typeof v === "string" ? v : t(v));

  const onKeyDown = (event: KeyboardEvent) => {
    const keys: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    let next = active;
    if (event.key in keys) next = (active + keys[event.key] + domains.length) % domains.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = domains.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  const d = domains[active];

  return (
    <Section id="domains" labelledBy="domains-title">
      <SectionHeading id="domains-title" kicker={t(ui.domains.kicker)} title={t(ui.domains.title)} lead={t(ui.domains.lead)} />

      <div className={styles.layout + " reveal"}>
        <div role="tablist" aria-orientation="vertical" aria-label={t(ui.domains.kicker)} className={styles.tabs} onKeyDown={onKeyDown}>
          {domains.map((domain, i) => (
            <button
              key={domain.id}
              ref={(el) => { tabs.current[i] = el; }}
              role="tab"
              type="button"
              id={baseId + "-tab-" + i}
              aria-selected={i === active}
              aria-controls={baseId + "-panel"}
              tabIndex={i === active ? 0 : -1}
              className={styles.tab}
              onClick={() => setActive(i)}
            >
              <span className={styles.tabIndex + " num"}>{String(i + 1).padStart(2, "0")}</span>
              <span className={styles.tabTitle}>{t(domain.title)}</span>
              <span className={styles.tabCount + " num"}>{domain.evidence.length}</span>
            </button>
          ))}
        </div>

        <div
          key={d.id}
          role="tabpanel"
          id={baseId + "-panel"}
          aria-labelledby={baseId + "-tab-" + active}
          className={styles.panel}
        >
          <h3 className={styles.panelTitle}>{t(d.title)}</h3>
          <p className={styles.summary}>{t(d.summary)}</p>

          {d.timeline && (
            <div className={styles.timelineWrap}>
              <p className={styles.label}>{t(ui.domains.timeline)}</p>
              <ol className={styles.timeline}>
                {d.timeline.map((step) => (
                  <li key={step.year} className={styles.step}>
                    <span className={styles.year + " num"}>{step.year}</span>
                    <span className={styles.stepText}>{t(step.text)}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {d.documents && (
            <div className={styles.docs}>
              <p className={styles.label}>{t(ui.domains.documents)}</p>
              <div className={styles.docGroups}>
                {d.documents.map((group) => (
                  <div key={group.group.en} className={styles.docGroup}>
                    <p className={styles.docGroupTitle}>{t(group.group)}</p>
                    <ul className={styles.docList}>
                      {group.items.map((item) => (
                        <li key={item.en}>{t(item)}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          <p className={styles.label}>{t(ui.domains.evidence)}</p>
          <ul className={styles.evidence}>
            {d.evidence.map((e, i) => (
              <li key={e.name} className={styles.item} data-kind={e.kind} style={{ "--i": i } as CSSProperties}>
                <span className={styles.kind}>{t(evidenceLabel[e.kind])}</span>
                <span className={styles.itemName}>{e.name}</span>
                <span className={styles.itemDetail}>{t(e.detail)}</span>
              </li>
            ))}
          </ul>

          <ul className={styles.stack}>
            {d.stack.map((s) => (
              <li key={label(s)}><Tag>{label(s)}</Tag></li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

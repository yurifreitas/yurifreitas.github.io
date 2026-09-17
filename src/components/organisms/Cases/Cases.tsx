import { cases } from "@/content/business";
import { ui } from "@/content/ui";
import { useLocale } from "@/lib/i18n";
import { CaseCard } from "@/components/molecules/CaseCard";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { Section } from "@/components/templates/Section";
import styles from "./Cases.module.css";

export function Cases() {
  const { t } = useLocale();
  return (
    <Section id="cases" labelledBy="cases-title" tone="deep">
      <SectionHeading id="cases-title" kicker={t(ui.cases.kicker)} title={t(ui.cases.title)} />
      <div className={styles.grid}>
        {cases.map((c, i) => (
          <CaseCard
            key={c.id}
            index={i}
            client={c.client}
            via={c.via}
            viaLabel={t(ui.cases.via)}
            sector={t(c.sector)}
            title={t(c.title)}
            outcome={t(c.outcome)}
            metrics={c.metrics.map((m) => ({ value: m.value, label: t(m.label) }))}
            stack={c.stack}
          />
        ))}
      </div>
    </Section>
  );
}

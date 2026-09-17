import { services } from "@/content/business";
import { ui } from "@/content/ui";
import { useLocale } from "@/lib/i18n";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { ServiceCard } from "@/components/molecules/ServiceCard";
import { Section } from "@/components/templates/Section";
import styles from "./Services.module.css";

export function Services() {
  const { t } = useLocale();
  return (
    <Section id="services" labelledBy="services-title" tone="deep">
      <SectionHeading id="services-title" kicker={t(ui.services.kicker)} title={t(ui.services.title)} lead={t(ui.services.lead)} />
      <div className={styles.grid}>
        {services.map((s, i) => (
          <ServiceCard key={s.id} index={i} title={t(s.title)} summary={t(s.summary)} deliverables={s.deliverables.map(t)} />
        ))}
      </div>
    </Section>
  );
}

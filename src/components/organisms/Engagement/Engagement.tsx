import type { CSSProperties } from "react";
import { engagements, process } from "@/content/business";
import { profile } from "@/content/profile";
import { ui } from "@/content/ui";
import { useLocale } from "@/lib/i18n";
import { ButtonLink } from "@/components/atoms/ButtonLink";
import { Icon } from "@/components/atoms/Icon";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { Section } from "@/components/templates/Section";
import styles from "./Engagement.module.css";

export function Engagement() {
  const { t } = useLocale();
  return (
    <Section id="engagement" labelledBy="engagement-title">
      <SectionHeading id="engagement-title" kicker={t(ui.engagement.kicker)} title={t(ui.engagement.title)} lead={t(ui.engagement.lead)} />

      <div className={styles.plans}>
        {engagements.map((e, i) => (
          <article key={e.id} className={styles.plan + " reveal"} data-highlight={e.highlight ? "true" : undefined} style={{ "--i": i } as CSSProperties}>
            {e.highlight && <span className={styles.badge}>{t(ui.engagement.popular)}</span>}
            <h3 className={styles.planName}>{t(e.name)}</h3>
            <p className={styles.fit}>{t(e.fit)}</p>
            <ul className={styles.points}>
              {e.points.map((p) => (
                <li key={p.en}>
                  <Icon name="check" size={15} />
                  {t(p)}
                </li>
              ))}
            </ul>
            <ButtonLink variant={e.highlight ? "primary" : "ghost"} href={profile.links.linkedin} target="_blank" rel="noreferrer" className={styles.planCta}>
              {t(ui.engagement.cta)} <Icon name="arrowRight" size={15} />
            </ButtonLink>
          </article>
        ))}
      </div>

      <h3 className={styles.processTitle + " reveal"}>{t(ui.engagement.process)}</h3>
      <ol className={styles.steps}>
        {process.map((step, i) => (
          <li key={step.title.en} className={styles.step + " reveal"} style={{ "--i": i } as CSSProperties}>
            <span className={styles.stepIndex + " num"}>{i + 1}</span>
            <p className={styles.stepTitle}>{t(step.title)}</p>
            <p className={styles.stepBody}>{t(step.body)}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

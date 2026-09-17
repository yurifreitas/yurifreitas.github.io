import { experience } from "@/content/experience";
import { ui } from "@/content/ui";
import { useLocale } from "@/lib/i18n";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { TimelineItem } from "@/components/molecules/TimelineItem";
import { Section } from "@/components/templates/Section";
import styles from "./Experience.module.css";

export function Experience() {
  const { t } = useLocale();
  return (
    <Section id="experience" labelledBy="experience-title" tone="deep">
      <div className={styles.layout}>
        <div className={styles.aside}>
          <SectionHeading id="experience-title" kicker={t(ui.experience.kicker)} title={t(ui.experience.title)} />
        </div>
        <ol className={styles.timeline}>
          {experience.map((job, i) => (
            <TimelineItem
              key={job.company}
              index={i}
              current={i === 0}
              period={job.period}
              company={job.company}
              client={job.client}
              role={t(job.role)}
              highlights={job.highlights.map(t)}
            />
          ))}
        </ol>
      </div>
    </Section>
  );
}

import { categoryLabel } from "@/content/categories";
import { featured } from "@/content/projects";
import { ui } from "@/content/ui";
import { useLocale } from "@/lib/i18n";
import { FeatureCard } from "@/components/molecules/FeatureCard";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { Section } from "@/components/templates/Section";
import styles from "./Featured.module.css";

const SIZES = ["hero", "regular", "regular", "regular", "regular"] as const;

export function Featured() {
  const { t } = useLocale();
  return (
    <Section id="work" labelledBy="work-title" tone="deep">
      <SectionHeading id="work-title" kicker={t(ui.work.kicker)} title={t(ui.work.title)} />
      <div className={styles.grid}>
        {featured.map((p, i) => (
          <FeatureCard
            key={p.id}
            index={i}
            size={SIZES[i] ?? "regular"}
            name={p.name}
            year={p.year}
            category={p.category}
            categoryLabel={t(categoryLabel[p.category])}
            tagline={t(p.tagline)}
            description={t(p.description)}
            facts={p.facts.map(t)}
            stack={p.stack}
            repo={p.repo}
            live={p.live}
            repoLabel={t(ui.work.repo)}
            liveLabel={t(ui.work.live)}
          />
        ))}
      </div>
    </Section>
  );
}

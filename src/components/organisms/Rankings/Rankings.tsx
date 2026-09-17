import { profile } from "@/content/profile";
import { rankings } from "@/content/rankings";
import { ui } from "@/content/ui";
import { useLocale } from "@/lib/i18n";
import { ButtonLink } from "@/components/atoms/ButtonLink";
import { RankRow } from "@/components/molecules/RankRow";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { Section } from "@/components/templates/Section";
import styles from "./Rankings.module.css";

export function Rankings() {
  const { t } = useLocale();
  return (
    <Section id="rankings" labelledBy="rankings-title">
      <SectionHeading
        id="rankings-title"
        kicker={t(ui.rankings.kicker)}
        title={t(ui.rankings.title)}
        lead={t(ui.rankings.lead)}
        aside={
          <div className={styles.profiles}>
            <ButtonLink variant="ghost" href={profile.links.kaggle} target="_blank" rel="noreferrer">
              Kaggle · yuribzfreitas
            </ButtonLink>
            <ButtonLink variant="ghost" href={profile.links.crunchdao} target="_blank" rel="noreferrer">
              CrunchDAO · {profile.links.crunchdaoUser}
            </ButtonLink>
          </div>
        }
      />
      <ol className={styles.list}>
        {rankings.map((r, i) => (
          <RankRow
            key={r.id}
            index={i}
            place={r.place}
            field={r.field}
            placeLabel={t(r.placeLabel)}
            platform={r.platform}
            competition={r.competition}
            host={r.host}
            metric={t(r.metric)}
            summary={t(r.summary)}
            statusLabel={r.status === "live" ? t(ui.rankings.live) : t(ui.rankings.final) + " · " + r.date}
            live={r.status === "live"}
            highlight={r.highlight}
            topLabel={t(ui.rankings.top)}
            sourceHref={r.id === "obesity" ? profile.links.obesityPost : undefined}
            sourceLabel={t(ui.rankings.source)}
          />
        ))}
      </ol>
    </Section>
  );
}

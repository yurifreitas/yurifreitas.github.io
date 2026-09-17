import type { CSSProperties } from "react";
import { cases } from "@/content/business";
import { profile, stats } from "@/content/profile";
import { ui } from "@/content/ui";
import { useLocale } from "@/lib/i18n";
import { ButtonLink } from "@/components/atoms/ButtonLink";
import { Icon } from "@/components/atoms/Icon";
import { Kicker } from "@/components/atoms/Kicker";
import { ParticleField } from "@/components/organisms/ParticleField";
import styles from "./Hero.module.css";

const d = (i: number) => ({ "--d": i } as CSSProperties);

export function Hero() {
  const { t } = useLocale();

  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.backdrop} aria-hidden="true">
        <ParticleField />
      </div>

      <div className={"container " + styles.inner}>
        <div className={styles.identity} style={d(0)}>
          <img className={styles.avatar} src={profile.avatar} alt="" width={40} height={40} />
          <Kicker>{t(ui.hero.eyebrow)}</Kicker>
        </div>

        <h1 id="hero-title" className={styles.title}>
          <span className={styles.line} style={d(1)}>{t(ui.hero.titleA)}</span>{" "}
          <span className={styles.line} style={d(2)}><em>{t(ui.hero.titleB)}</em></span>
        </h1>

        <div className={styles.lower}>
          <p className={styles.lead} style={d(3)}>{t(ui.hero.lead)}</p>

          <div className={styles.actions} style={d(4)}>
            <ButtonLink size="lg" href={profile.links.linkedin} target="_blank" rel="noreferrer">
              {t(ui.hero.ctaPrimary)} <Icon name="arrowRight" size={16} />
            </ButtonLink>
            <ButtonLink size="lg" variant="ghost" href="#cases">
              {t(ui.hero.ctaSecondary)}
            </ButtonLink>
            <span className={styles.status}>{t(profile.location)}</span>
          </div>
        </div>

        <div className={styles.trusted} style={d(5)}>
          <span className={styles.trustedLabel}>{t(ui.hero.trusted)}</span>
          <ul className={styles.logos}>
            {cases.map((c) => (
              <li key={c.id}>{c.client}</li>
            ))}
            <li>Brasilprev</li>
            <li>Riachuelo</li>
            <li>Intelbras</li>
          </ul>
        </div>

        <dl className={styles.stats} style={d(6)}>
          {stats.map((stat) => (
            <div key={stat.value} className={styles.stat}>
              <dt className={styles.statLabel}>{t(stat.label)}</dt>
              <dd className={styles.statValue + " num"}>{stat.value}</dd>
            </div>
          ))}
          <div className={styles.social}>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" size={18} /></a>
            <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" size={19} /></a>
            <a href={profile.links.kaggle} target="_blank" rel="noreferrer" aria-label="Kaggle"><Icon name="kaggle" size={17} /></a>
          </div>
        </dl>
      </div>
    </section>
  );
}

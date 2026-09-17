import type { CSSProperties } from "react";
import { profile } from "@/content/profile";
import { ui } from "@/content/ui";
import { writing } from "@/content/writing";
import { useLocale } from "@/lib/i18n";
import { ButtonLink } from "@/components/atoms/ButtonLink";
import { Icon } from "@/components/atoms/Icon";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { Section } from "@/components/templates/Section";
import styles from "./Writing.module.css";

export function Writing() {
  const { t } = useLocale();
  const articles = writing.filter((w) => w.kind === "article");
  const posts = writing.filter((w) => w.kind === "post");

  return (
    <Section id="writing" labelledBy="writing-title">
      <SectionHeading
        id="writing-title"
        kicker={t(ui.writing.kicker)}
        title={t(ui.writing.title)}
        aside={
          <ButtonLink variant="ghost" href={profile.links.linkedin + "recent-activity/articles/"} target="_blank" rel="noreferrer">
            <Icon name="linkedin" size={14} /> {t(ui.writing.all)}
          </ButtonLink>
        }
      />
      <div className={styles.layout}>
        <ol className={styles.articles}>
          {articles.map((a, i) => (
            <li key={a.id} className="reveal" style={{ "--i": i } as CSSProperties}>
              <a className={styles.article} href={a.href} target="_blank" rel="noreferrer" lang={a.lang}>
                <span className={styles.meta + " num"}>{t(a.meta)}</span>
                <span className={styles.title}>{a.title}</span>
                <span className={styles.summary} lang={undefined}>{t(a.summary)}</span>
                <Icon name="arrow" size={18} className={styles.arrow} />
              </a>
            </li>
          ))}
        </ol>
        <aside className={styles.posts}>
          <p className={styles.postsTitle}>{t(ui.writing.posts)}</p>
          {posts.map((p, i) => (
            <a key={p.id} className={styles.post + " reveal"} style={{ "--i": i } as CSSProperties} href={p.href} target="_blank" rel="noreferrer">
              <span className={styles.postTitle} lang={p.lang}>{p.title}</span>
              <span className={styles.postSummary}>{t(p.summary)}</span>
            </a>
          ))}
        </aside>
      </div>
    </Section>
  );
}

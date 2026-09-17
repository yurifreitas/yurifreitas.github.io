import { profile } from "@/content/profile";
import { ui } from "@/content/ui";
import { useLocale } from "@/lib/i18n";
import { ButtonLink } from "@/components/atoms/ButtonLink";
import { Icon } from "@/components/atoms/Icon";
import { Kicker } from "@/components/atoms/Kicker";
import { Section } from "@/components/templates/Section";
import styles from "./Contact.module.css";

export function Contact() {
  const { t } = useLocale();

  return (
    <Section id="contact" labelledBy="contact-title">
      <div className={styles.panel + " reveal"}>
        <div className={styles.glow} aria-hidden="true" />
        <Kicker>{t(ui.contact.kicker)}</Kicker>
        <h2 id="contact-title" className={styles.title}>{t(ui.contact.title)}</h2>
        <p className={styles.body}>{t(ui.contact.body)}</p>
        <div className={styles.actions}>
          <ButtonLink size="lg" href={profile.links.linkedin} target="_blank" rel="noreferrer">
            <Icon name="linkedin" size={16} /> {t(ui.contact.cta)}
          </ButtonLink>
          <ButtonLink variant="ghost" size="lg" href={profile.links.github} target="_blank" rel="noreferrer">
            <Icon name="github" size={16} /> GitHub
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}

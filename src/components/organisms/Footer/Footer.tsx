import { profile } from "@/content/profile";
import { ui } from "@/content/ui";
import { useLocale } from "@/lib/i18n";
import styles from "./Footer.module.css";

export function Footer() {
  const { t } = useLocale();
  return (
    <footer className={styles.footer}>
      <div className={"container " + styles.inner}>
        <p>© {new Date().getFullYear()} {profile.fullName}</p>
        <p>{t(ui.footer.built)}</p>
      </div>
    </footer>
  );
}

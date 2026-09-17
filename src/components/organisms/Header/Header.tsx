import { useEffect, useState } from "react";
import { ui } from "@/content/ui";
import { useLocale } from "@/lib/i18n";
import { usePalette } from "@/lib/palette";
import { useActiveSection } from "@/lib/useActiveSection";
import { useTheme } from "@/lib/useTheme";
import { Icon } from "@/components/atoms/Icon";
import { IconButton } from "@/components/atoms/IconButton";
import { Kbd } from "@/components/atoms/Kbd";
import { ScrollProgress } from "@/components/atoms/ScrollProgress";
import { LocaleSwitch } from "@/components/molecules/LocaleSwitch";
import styles from "./Header.module.css";

const NAV = ["cases", "experience", "domains", "stack", "work", "services"] as const;
const isMac = typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.platform);

export function Header() {
  const { locale, setLocale, t } = useLocale();
  const { theme, toggle } = useTheme();
  const { open } = usePalette();
  const active = useActiveSection(NAV);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={styles.header} data-scrolled={scrolled}>
      <ScrollProgress />
      <div className={styles.bar}>
        <a href="#top" className={styles.brand} aria-label="Yuri Freitas">
          <span className={styles.mark}>yf</span>
        </a>

        <nav aria-label="primary" className={styles.nav}>
          {NAV.map((key) => (
            <a key={key} href={"#" + key} className={styles.navLink} aria-current={active === key ? "true" : undefined}>
              {t(ui.nav[key])}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <button type="button" className={styles.search} onClick={open} aria-label={t(ui.palette.open)}>
            <Icon name="search" size={15} />
            <span className={styles.searchLabel}>{t(ui.palette.open)}</span>
            <span className={styles.keys}>
              <Kbd>{isMac ? "⌘" : "Ctrl"}</Kbd>
              <Kbd>K</Kbd>
            </span>
          </button>
          <LocaleSwitch value={locale} onChange={setLocale} label={t(ui.a11y.language)} />
          <IconButton label={t(ui.a11y.theme)} onClick={toggle}>
            <Icon name={theme === "dark" ? "sun" : "moon"} size={17} />
          </IconButton>
        </div>
      </div>
    </header>
  );
}

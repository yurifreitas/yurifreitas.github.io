import type { CSSProperties } from "react";
import { LOCALES, type Locale } from "@/content/types";
import styles from "./LocaleSwitch.module.css";

export type LocaleSwitchProps = { value: Locale; onChange: (locale: Locale) => void; label: string };

export function LocaleSwitch({ value, onChange, label }: LocaleSwitchProps) {
  const index = LOCALES.indexOf(value);
  return (
    <div role="radiogroup" aria-label={label} className={styles.group} style={{ "--index": index } as CSSProperties}>
      <span className={styles.thumb} aria-hidden="true" />
      {LOCALES.map((locale) => (
        <button
          key={locale}
          type="button"
          role="radio"
          aria-checked={locale === value}
          className={styles.option}
          onClick={() => onChange(locale)}
        >
          {locale}
        </button>
      ))}
    </div>
  );
}

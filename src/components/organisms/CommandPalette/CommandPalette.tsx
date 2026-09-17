import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { categoryLabel } from "@/content/categories";
import { profile } from "@/content/profile";
import { allWork } from "@/content/projects";
import { rankings } from "@/content/rankings";
import { LOCALES } from "@/content/types";
import { ui } from "@/content/ui";
import { useLocale } from "@/lib/i18n";
import { usePalette } from "@/lib/palette";
import { useTheme } from "@/lib/useTheme";
import { CategoryDot } from "@/components/atoms/CategoryDot";
import { Icon, type IconName } from "@/components/atoms/Icon";
import { Kbd } from "@/components/atoms/Kbd";
import styles from "./CommandPalette.module.css";

type Item = {
  id: string;
  group: string;
  title: string;
  hint: string;
  icon?: IconName;
  dot?: (typeof allWork)[number]["category"];
  run: () => void;
};

const normalize = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

export function CommandPalette() {
  const { isOpen, close } = usePalette();
  const { t, setLocale, locale } = useLocale();
  const { toggle } = useTheme();
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  const items = useMemo<Item[]>(() => {
    const sections: Item[] = (["services", "cases", "domains", "stack", "rankings", "work", "index", "experience", "engagement", "writing", "contact"] as const).map((key) => ({
      id: "s-" + key,
      group: t(ui.palette.sections),
      title: t(ui.nav[key]),
      hint: "#" + key,
      icon: "hash",
      run: () => goTo(key),
    }));
    const comps: Item[] = rankings.map((r) => ({
      id: "r-" + r.id,
      group: t(ui.palette.competitions),
      title: r.competition,
      hint: (r.place ? "#" + r.place + " · " : "") + r.platform,
      icon: "arrowRight",
      run: () => goTo("rankings"),
    }));
    const work: Item[] = allWork.map((w) => ({
      id: "w-" + w.id,
      group: t(ui.palette.projects),
      title: w.name,
      hint: (w.kind === "public" ? t(w.tagline) : t(w.line)) + " — " + t(categoryLabel[w.category]),
      dot: w.category,
      run: () => (w.kind === "public" ? window.open(w.live ?? w.repo, "_blank", "noopener") : goTo("index")),
    }));
    const actions: Item[] = [
      { id: "a-theme", group: t(ui.palette.actions), title: t(ui.a11y.theme), hint: "", icon: "sun", run: toggle },
      ...LOCALES.filter((l) => l !== locale).map<Item>((l) => ({
        id: "a-" + l,
        group: t(ui.palette.actions),
        title: t(ui.a11y.language) + ": " + l.toUpperCase(),
        hint: "",
        icon: "globe",
        run: () => setLocale(l),
      })),
      { id: "a-linkedin", group: t(ui.palette.actions), title: t(ui.contact.cta), hint: "LinkedIn", icon: "linkedin", run: () => window.open(profile.links.linkedin, "_blank", "noopener") },
      { id: "a-gh", group: t(ui.palette.actions), title: "GitHub", hint: "yurifreitas", icon: "github", run: () => window.open(profile.links.github, "_blank", "noopener") },
    ];
    return [...sections, ...comps, ...work, ...actions];
  }, [t, toggle, setLocale, locale]);

  const results = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return items;
    const terms = q.split(/\s+/);
    return items.filter((item) => {
      const hay = normalize(item.title + " " + item.hint + " " + item.group);
      return terms.every((term) => hay.includes(term));
    });
  }, [items, query]);

  useEffect(() => {
    if (isOpen) {
      returnFocus.current = document.activeElement as HTMLElement;
      setQuery("");
      setCursor(0);
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      returnFocus.current?.focus?.();
    }
  }, [isOpen]);

  useEffect(() => setCursor(0), [query]);

  useEffect(() => {
    listRef.current?.querySelector('[data-active="true"]')?.scrollIntoView({ block: "nearest" });
  }, [cursor]);

  if (!isOpen) return null;

  const execute = (item: Item | undefined) => {
    if (!item) return;
    close();
    requestAnimationFrame(item.run);
  };

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setCursor((c) => (c + 1) % Math.max(results.length, 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setCursor((c) => (c - 1 + results.length) % Math.max(results.length, 1));
    } else if (event.key === "Enter") {
      event.preventDefault();
      execute(results[cursor]);
    } else if (event.key === "Escape") {
      event.preventDefault();
      close();
    } else if (event.key === "Tab") {
      event.preventDefault();
    }
  };

  let lastGroup = "";

  return (
    <div className={styles.overlay} onMouseDown={(e) => e.target === e.currentTarget && close()}>
      <div role="dialog" aria-modal="true" aria-label={t(ui.palette.open)} className={styles.dialog} onKeyDown={onKeyDown}>
        <div className={styles.inputRow}>
          <Icon name="search" size={18} />
          <input
            ref={inputRef}
            autoFocus
            className={styles.input}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t(ui.palette.placeholder)}
            role="combobox"
            aria-expanded="true"
            aria-controls="palette-list"
            aria-activedescendant={results[cursor] ? "palette-" + results[cursor].id : undefined}
            spellCheck={false}
            autoComplete="off"
          />
          <Kbd>esc</Kbd>
        </div>

        <ul ref={listRef} id="palette-list" role="listbox" className={styles.list}>
          {results.length === 0 && <li className={styles.empty}>{t(ui.palette.empty)}</li>}
          {results.map((item, i) => {
            const header = item.group !== lastGroup ? item.group : null;
            lastGroup = item.group;
            return (
              <li key={item.id} role="presentation">
                {header && <p className={styles.group}>{header}</p>}
                <div
                  id={"palette-" + item.id}
                  role="option"
                  aria-selected={i === cursor}
                  data-active={i === cursor}
                  className={styles.option}
                  onMouseMove={() => i !== cursor && setCursor(i)}
                  onClick={() => execute(item)}
                >
                  <span className={styles.optionIcon}>
                    {item.dot ? <CategoryDot category={item.dot} /> : item.icon ? <Icon name={item.icon} size={15} /> : null}
                  </span>
                  <span className={styles.optionTitle}>{item.title}</span>
                  <span className={styles.optionHint}>{item.hint}</span>
                  <Icon name="arrowRight" size={14} className={styles.enter} />
                </div>
              </li>
            );
          })}
        </ul>

        <footer className={styles.footer}>
          <Kbd>↑</Kbd><Kbd>↓</Kbd>
          <span>{t(ui.palette.hint)}</span>
        </footer>
      </div>
    </div>
  );
}

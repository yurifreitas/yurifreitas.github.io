import { useMemo, useState } from "react";
import { categoryLabel } from "@/content/categories";
import { allWork, workCount } from "@/content/projects";
import { CATEGORIES, type Category } from "@/content/types";
import { ui } from "@/content/ui";
import { useLocale } from "@/lib/i18n";
import { FilterBar, type FilterOption } from "@/components/molecules/FilterBar";
import { IndexRow } from "@/components/molecules/IndexRow";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { Section } from "@/components/templates/Section";
import styles from "./WorkIndex.module.css";

type Filter = Category | "all";

function readFilter(): Filter {
  const value = new URLSearchParams(window.location.search).get("cat");
  return CATEGORIES.includes(value as Category) ? (value as Category) : "all";
}

export function WorkIndex() {
  const { t } = useLocale();
  const [filter, setFilter] = useState<Filter>(readFilter);

  const options = useMemo<FilterOption[]>(
    () => [
      { value: "all", label: t(ui.index.all), count: allWork.length },
      ...CATEGORIES.map((c) => ({ value: c, label: t(categoryLabel[c]), count: allWork.filter((w) => w.category === c).length })).filter((o) => o.count > 0),
    ],
    [t],
  );

  const items = filter === "all" ? allWork : allWork.filter((w) => w.category === filter);

  const change = (next: Filter) => {
    setFilter(next);
    const url = new URL(window.location.href);
    if (next === "all") url.searchParams.delete("cat");
    else url.searchParams.set("cat", next);
    window.history.replaceState(null, "", url);
  };

  return (
    <Section id="index" labelledBy="index-title" tone="deep">
      <SectionHeading
        id="index-title"
        kicker={t(ui.index.kicker)}
        title={t(ui.index.title)}
        lead={t(ui.index.lead)}
        aside={
          <p className={styles.tally + " num"}>
            <span className={styles.tallyValue}>{workCount.public + workCount.mention}</span>
            <span>{t(ui.index.count)}<br />{t(ui.index.since)}</span>
          </p>
        }
      />

      <div className={styles.toolbar + " reveal"}>
        <FilterBar label={t(ui.index.kicker)} options={options} value={filter} onChange={change} />
      </div>

      <p className="sr-only" aria-live="polite">{items.length} {t(ui.index.count)}</p>

      {items.length === 0 ? (
        <p className={styles.empty}>{t(ui.index.empty)}</p>
      ) : (
        <ul key={filter} className={styles.list}>
          {items.map((w, i) => (
            <IndexRow
              key={w.id}
              index={i}
              year={w.year}
              name={w.name}
              category={w.category}
              line={w.kind === "public" ? t(w.tagline) : t(w.line)}
              stack={w.stack}
              href={w.kind === "public" ? w.live ?? w.repo : undefined}
              visibilityLabel={t(ui.index.private)}
            />
          ))}
        </ul>
      )}
    </Section>
  );
}

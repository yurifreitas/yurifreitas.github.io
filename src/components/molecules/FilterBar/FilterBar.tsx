import { CategoryDot } from "@/components/atoms/CategoryDot";
import type { Category } from "@/content/types";
import styles from "./FilterBar.module.css";

export type FilterOption = { value: Category | "all"; label: string; count: number };

export type FilterBarProps = {
  label: string;
  options: FilterOption[];
  value: Category | "all";
  onChange: (value: Category | "all") => void;
};

export function FilterBar({ label, options, value, onChange }: FilterBarProps) {
  return (
    <div role="radiogroup" aria-label={label} className={styles.bar}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          role="radio"
          aria-checked={option.value === value}
          className={styles.chip}
          onClick={() => onChange(option.value)}
        >
          {option.value !== "all" && <CategoryDot category={option.value} />}
          {option.label}
          <span className={styles.count + " num"}>{option.count}</span>
        </button>
      ))}
    </div>
  );
}

import type { CSSProperties } from "react";
import { categoryHue } from "@/content/categories";
import type { Category } from "@/content/types";
import styles from "./CategoryDot.module.css";

export type CategoryDotProps = { category: Category };

export function CategoryDot({ category }: CategoryDotProps) {
  return <span aria-hidden="true" className={styles.dot} style={{ "--h": categoryHue[category] } as CSSProperties} />;
}

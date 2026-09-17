import type { ReactNode } from "react";
import styles from "./PageLayout.module.css";

export type PageLayoutProps = { skipLabel: string; header: ReactNode; footer: ReactNode; overlay?: ReactNode; children: ReactNode };

export function PageLayout({ skipLabel, header, footer, overlay, children }: PageLayoutProps) {
  return (
    <div className={styles.page}>
      <a href="#main" className={styles.skip}>{skipLabel}</a>
      {header}
      <main id="main">{children}</main>
      {footer}
      {overlay}
    </div>
  );
}

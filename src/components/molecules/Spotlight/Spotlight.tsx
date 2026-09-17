import type { HTMLAttributes, PointerEvent } from "react";
import styles from "./Spotlight.module.css";

/** Superfície com luz que segue o ponteiro. Atualiza CSS vars direto no nó — zero re-render. */
export function Spotlight({ className, children, ...rest }: HTMLAttributes<HTMLDivElement>) {
  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const node = event.currentTarget;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--x", event.clientX - rect.left + "px");
    node.style.setProperty("--y", event.clientY - rect.top + "px");
  };
  return (
    <div className={[styles.spotlight, className].filter(Boolean).join(" ")} onPointerMove={onPointerMove} {...rest}>
      {children}
    </div>
  );
}

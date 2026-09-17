import { useCallback, useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

const read = (): Theme => (document.documentElement.dataset.theme === "light" ? "light" : "dark");

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, read);

  const toggle = useCallback(() => {
    const next: Theme = read() === "dark" ? "light" : "dark";
    const apply = () => {
      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch {
        /* storage indisponível */
      }
    };
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce && "startViewTransition" in document) {
      document.startViewTransition(apply);
    } else {
      apply();
    }
  }, []);

  return { theme, toggle };
}

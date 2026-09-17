import { forwardRef, type AnchorHTMLAttributes } from "react";
import styles from "./ButtonLink.module.css";

export type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "ghost";
  size?: "md" | "lg";
};

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(function ButtonLink(
  { variant = "primary", size = "md", className, ...rest },
  ref,
) {
  return <a ref={ref} className={[styles.button, styles[variant], styles[size], className].filter(Boolean).join(" ")} {...rest} />;
});

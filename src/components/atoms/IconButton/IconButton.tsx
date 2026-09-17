import { forwardRef, type ButtonHTMLAttributes } from "react";
import styles from "./IconButton.module.css";

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { label: string };

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { label, className, type = "button", ...rest },
  ref,
) {
  return (
    <button ref={ref} type={type} aria-label={label} title={label} className={[styles.button, className].filter(Boolean).join(" ")} {...rest} />
  );
});

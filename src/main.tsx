import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "@/app/App";
import { LocaleProvider } from "@/lib/i18n";
import { PaletteProvider } from "@/lib/palette";
import "@/design/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LocaleProvider>
      <PaletteProvider>
        <App />
      </PaletteProvider>
    </LocaleProvider>
  </StrictMode>,
);

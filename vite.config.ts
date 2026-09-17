import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// base "/" para yurifreitas.github.io; troque para "/<repo>/" se publicar em repo de projeto.
export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
});

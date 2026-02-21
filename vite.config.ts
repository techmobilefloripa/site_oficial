import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  base: process.env.NODE_ENV === "production"
    ? "/site_oficial/"   // nome EXATO do repositório no GitHub
    : "/",

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
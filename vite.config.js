import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"

export default defineConfig ({
    plugins: [react()],
    base: "/todo_react_vite_deploy",
});
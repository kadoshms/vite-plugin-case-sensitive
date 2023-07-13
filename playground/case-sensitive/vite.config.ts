import { defineConfig } from "vite";
import { caseSensitive } from "../../src";
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        react(),
        caseSensitive()
    ]
})

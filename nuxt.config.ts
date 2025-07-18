// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    ssr: true,
    devtools: { enabled: false },
    modules: ["@nuxt/eslint", "@nuxt/icon", "@pinia/nuxt"],
    css: ["~/assets/css/main.css"],
    vite: {
        plugins: [tailwindcss()],
    },
});

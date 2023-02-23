export default defineNuxtConfig({
    css: ['~/assets/css/tailwind.css', '~/assets/css/global.css'],
    modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge'],
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
    },
    routeRules: {
        '/': {ssr: false},
    }
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {//global
            title: 'Nuxt Dojo',
            meta: [
                { name: 'description', content: 'Everything about Nuxt3  js'}
            ],
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
            ]
        }
    },
    runtimeConfig: {
        currencyKey: process.env.CURRENCY_API_KEY,
        public: {
            //incase you want to expose the environment varable to the frontend, put it here
        }
    }
})

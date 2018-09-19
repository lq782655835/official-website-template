module.exports = {
    head: {
        title: 'XXX官网',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Nuxt.js project'
            }
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            }
        ]
    },
    loading: false,
    css: ['swiper/dist/css/swiper.css', { src: '~assets/css/global.scss', lang: 'scss' }],
    build: {
        vendor: ['axios'],
        extend(config, { isDev, isClient }) {
            config.resolve.alias['vue'] = 'vue/dist/vue.common.js'

            const sassResourcesLoader = {
                loader: 'sass-resources-loader',
                options: {
                    resources: ['assets/css/variables.scss']
                }
            }

            config.module.rules.forEach(rule => {
                if (rule.test.toString() === '/\\.vue$/') {
                    rule.options.loaders.sass.push(sassResourcesLoader)
                    rule.options.loaders.scss.push(sassResourcesLoader)
                }
                if (['/\\.sass$/', '/\\.scss$/'].indexOf(rule.test.toString()) !== -1) {
                    rule.use.push(sassResourcesLoader)
                }
            })
        }
    },
    plugins: ['~plugins/vue-global', { src: '~plugins/third', ssr: false }],
    env: {
        BASE_URL: process.env.BASE_URL || 'https://cnodejs.org/api/v1'
    }
}

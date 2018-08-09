import Vue from 'vue'

/**
 * register svg icon component
 */
import * as svgicon from 'vue-svgicon'
import '../assets/icon'
Vue.use(svgicon, { tagName: 'svgicon', width: 100, height: 100 })

/* global component */
const Components = require.context('../components/common', false, /(\.vue)$/)
Components.keys().map(key => {
    let componentName = key.replace(/(.*\/)*([^.]+).*/gi, '$2')
    Vue.component(componentName, Components(key).default)
})

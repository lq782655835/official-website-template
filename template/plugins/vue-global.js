import Vue from 'vue'

/* global component */
const Components = require.context('../components/common', false, /(\.vue)$/)
Components.keys().map(key => {
    let componentName = key.replace(/^\.\/(.*)\.vue$/g, ($1, $2) => $2)
    Vue.component(componentName, Components(key).default)
})

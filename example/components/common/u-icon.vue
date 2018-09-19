<template>
    <a :class="['u-icon', `u-icon-${name}`, {'disclick': disclick}]" 
    :href="href" :disabled="disabled" @click="onClick" v-on="listeners">
        <svgicon v-if="name" :name="name" :scale="scale" v-bind="$attrs" original></svgicon>
        <img v-if="src" :src="imgSrc" v-bind="$attrs"/>
    </a>
</template>

<script>
import ULink from './u-link.vue'

export default {
    mixins: [ULink],
    props: {
        name: { type: String, default: '' },
        src: { type: String, default: '' },
        disclick: { type: Boolean, default: false },
        scale: { type: [String, Number], default: '1' }
    },
    computed: {
        imgSrc() {
            return /^(http|https)/g.test(this.src) ? this.src : require(`~/assets/img/${this.src}`)
        }
    }
}
</script>

<style lang="scss" scoped>
.u-icon {
    display: inline-block;
    line-height: 0;
    overflow: hidden;

    &.disclick {
        cursor: default;
    }

    img {
        max-width: 100%;
        max-height: 100%;
    }
}
</style>

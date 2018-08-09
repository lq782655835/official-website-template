<template>
    <a class="u-button" :href="href" :disabled="disabled" @click="onClick" v-on="listeners">
        <slot></slot>
    </a>
</template>

<script>
import ULink from './u-link.vue'

export default {
    name: 'u-button',
    mixins: [ULink]
}
</script>

<style lang="scss" scoped>
.u-button {
    text-align: center;
    cursor: pointer;
    user-select: none;
    display: inline-block;
    padding: 10px 18px;
    line-height: 1.42em;
    border-radius: 3px;
    color: #000000;
    background-color: #ffffff;

    &[size='m'] {
        padding: 16px 85px;
        font-size: 20px;
    }

    &[size='l'] {
        padding: 16px 115px;
        font-size: 20px;
    }

    &[color='primary'] {
        background-color: #000000;
        color: #ffffff;
    }
}
</style>

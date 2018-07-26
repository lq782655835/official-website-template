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
    border: 1px solid #0092ff;
    color: $blue-btn-link;

    &[size='m'] {
        width: 120px;
    }

    &[color='primary'] {
        background-color: $blue-btn-link;
        color: $white;
    }
}
</style>

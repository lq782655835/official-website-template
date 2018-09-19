<template>
    <div v-show="show">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'u-tab',
    parentName: 'u-tabs',
    props: {
        title: { type: String }
    },
    data() {
        return {
            index: 0
        }
    },
    computed: {
        show() {
            return parseInt(this.index) === parseInt(this.$parent.activeIndex)
        }
    },
    created() {
        if (this.$parent.itemVMs) {
            this.$parent.itemVMs.push(this)
        }
    },
    mounted() {
        this.$nextTick(() => {
            for (var c in this.$parent.$children) {
                if (this.$parent.$children[c].$el === this.$el) {
                    this.index = c
                    break
                }
            }
        })
    }
}
</script>

<style lang="scss">
</style>

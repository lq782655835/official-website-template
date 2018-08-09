<template>
    <div>
        <u-header />
        <nuxt />
        <u-footer />
        <u-modal :visible.sync="visible" title="合作咨询">
            <u-link-form @submitSuccess="visible=false" />
        </u-modal>
    </div>
</template>

<script>
import UHeader from '~/components/u-header'
import UFooter from '~/components/u-footer'
import ULinkForm from '~/components/u-link-form.vue'

export default {
    components: {
        UHeader,
        UFooter,
        ULinkForm
    },
    data() {
        return {
            visible: false
        }
    },
    computed: {
        visibleForm() {
            return this.$store.state.visibleForm
        }
    },
    watch: {
        visibleForm: {
            handler(val) {
                this.visible = val
            },
            immediate: true
        },
        visible(val) {
            this.$store.commit('setVisibleForm', val)
        }
    }
}
</script>

<style lang="scss" scoped>
</style>

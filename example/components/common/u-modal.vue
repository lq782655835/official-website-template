<template>
    <transition name="page">
        <div class="u-modal-wapper" v-if="currentVisible" @click="maskClosable && cancel()" @keydown.esc="cancel()">
            <div class="u-modal" v-bind="$attrs" v-on="$listeners" @click.stop>
                <div class="u-modal-head">
                    <slot name="head">
                        <div v-if="title" class="title">
                            <slot name="title">{{ title }}</slot>
                        </div>
                        <u-icon name="close" @click="cancel()" class="close"></u-icon>
                    </slot>
                </div>
                <div class="u-modal-body">
                    <slot>{{ content }}</slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'u-modal',
    props: {
        visible: { type: Boolean, default: false },
        title: { type: String, default: '提示' },
        content: String,
        maskClosable: { type: Boolean, default: false }
    },
    data() {
        return {
            currentVisible: this.visible
        }
    },
    watch: {
        visible(visible) {
            this.currentVisible = visible
        },
        currentVisible(visible) {
            document.body.style.overflow = visible ? 'hidden' : ''
        }
    },
    mounted() {
        document.body.appendChild(this.$el)
    },
    methods: {
        open() {
            if (!this.$el) this.$mount(document.createElement('div'))

            this.currentVisible = true
            this.$emit('update:visible', true)
            this.$emit('open')
        },
        cancel() {
            this.$emit('cancel')
            this.close(false)
        },
        close(ok) {
            let cancel = false
            this.$emit('before-close', {
                ok,
                preventDefault: () => (cancel = true)
            })
            if (cancel) return

            this.currentVisible = false
            this.$emit('update:visible', false)
            this.$emit('close', {
                ok
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.u-modal-wapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    -webkit-overflow-scrolling: touch;
    touch-action: cross-slide-y pinch-zoom double-tap-zoom;
    text-align: center;
    overflow: hidden;
    overflow-y: auto;
    background: rgba(0, 0, 0, 0.5);
    padding: 30px 0;

    &:before {
        content: '';
        display: inline-block;
        vertical-align: middle;
        height: 100%;
    }

    &:focus {
        outline: none;
    }
}

.u-modal {
    width: 740px;
    display: inline-block;
    vertical-align: middle;
    text-align: left;
    background: #ffffff;
    color: #000000;

    &-head {
        position: relative;
        padding: 60px 0 30px;

        .title {
            text-align: center;
            font-size: 30px;
        }

        .close {
            position: absolute;
            right: 20px;
            top: 20px;
        }
    }

    &-body {
        position: relative;
        // padding: 0 50px 16px;
    }
}
</style>

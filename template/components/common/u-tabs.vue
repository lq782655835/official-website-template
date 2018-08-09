<template>
    <div class="u-tabs">
        <ul class="u-tabs-nav">
            <li v-for="(itemVM, index) in itemVMs" :key="index"
                :class="['u-tab', {'selected': index === activeIndex}]"
                v-on="listeners"
                @click.prevent="handleClick(index, itemVM)">
                {{itemVM.title}}
            </li>
        </ul>
        <div class="u-tabs-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'u-tabs',
    childName: 'u-tab',
    props: {
        value: {
            type: Number,
            default: 0,
            validator: value => Number.isInteger(value) && value >= 0
        }
    },
    data() {
        return {
            itemVMs: [],
            activeIndex: this.value
        }
    },
    computed: {
        listeners() {
            const listeners = Object.assign({}, this.$listeners)
            delete listeners.click
            return listeners
        }
    },
    watch: {
        value(value) {
            this.activeIndex = value
        }
    },
    methods: {
        handleClick(index, itemVM) {
            this.activeIndex = index

            this.$emit('update:value', index)
            this.$emit('input', index)
        }
    }
}
</script>

<style lang="scss">
.u-tabs {
    background-color: #ffffff;
    color: #000000;
    user-select: none;

    &-nav {
        border-bottom: 1px solid #efefef;

        .u-tab {
            display: inline-block;
            padding: 16px 10px;
            margin-right: 20px;
            font-size: 20px;
            color: #333333;
            cursor: pointer;

            &.selected {
                color: $primary-color;
                border-bottom: 2px solid $primary-color;
            }
        }
    }

    &-content {
        padding-top: 30px;
    }
}
</style>

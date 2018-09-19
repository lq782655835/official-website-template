<template>
  <div ref="ai-select" :class="['ai-select']">
    <div @click.stop="clickInput" :class="{ 'disabled': disabled }" class="ai-select-display">
      <span :class="{ 'ai-select-notSelected': !crtSelectedLabel }">{{ crtSelectedLabel }}</span>
      <span :class="ifShowList ? 'right' : 'down'" class="ai-icon-chevron_right arraw"></span>
    </div>
    <div v-if="ifShowList" class="ai-select-container">
      <ai-option v-for="(item, index) in formatList" :key="index" @click.stop="selectItem(item)" :label="item.label" :value="item.value" :isSelected="item.label == crtSelectedLabel" />
      <!-- hide slot to avoid triggering global click event, but we extract its data and put them in list -->
      <div style="display: none;">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import AiOption from './u-select-option'

export default {
    name: 'ai-select',
    components: {
        AiOption
    },
    props: {
        list: { type: Array, default: () => [] },
        labelField: { type: String, default: 'label' },
        valueField: { type: String, default: 'value' },
        value: [String, Number],
        disabled: { type: Boolean, default: false },
        emptyLabel: { type: String, default: '请选择' }
    },
    model: {
        prop: 'value',
        event: 'select_value'
    },
    data() {
        return {
            ifShowList: false,
            crtSelectedLabel: ''
        }
    },
    watch: {
        // update this.crtSelectedLabel if v-model changes
        value: {
            handler(newValue) {
                let itemFound = this.formatList.find(t => {
                    return t.value == newValue
                })
                this.crtSelectedLabel = itemFound ? itemFound.label : this.emptyLabel
            },
            immediate: true
        },
        // update value when list changes
        list: {
            handler(newValue) {
                if (!newValue) return
                let itemFound = newValue.find(t => {
                    return t.value == this.value
                })
                this.crtSelectedLabel = itemFound ? itemFound.label : this.emptyLabel
            },
            immediate: false
        }
    },
    computed: {
        formatList() {
            return this.list.map(item => {
                return { label: item[this.labelField], value: item[this.valueField] }
            })
        }
    },
    created() {
        this._bindGlobalClick()
        this._getSlotsArray().map(t => {
            this.list.push(t)
        })
        this.crtSelectedLabel = this._getInitLabel()
    },
    beforeDestroy() {
        this._unbindGlobalClick()
    },
    methods: {
        selectItem(item) {
            this.$emit('select', item)
            // bind with v-model
            this.$emit('select_value', item.value)
            this.crtSelectedLabel = item.label
            this.ifShowList = false
        },
        clickInput() {
            if (this.disabled) return

            this.ifShowList = !this.ifShowList
        },
        _bindGlobalClick() {
            document.addEventListener('click', this._globalClickEvent, false)
        },
        _unbindGlobalClick() {
            document.removeEventListener('click', this._globalClickEvent, false)
        },
        _globalClickEvent(event) {
            if (!this.ifShowList) return
            let parent = this.$refs['ai-select']
            if (event.target != parent && !this._ifChild(parent, event.target)) {
                this.ifShowList = false
            }
        },
        _ifChild(parent, target) {
            let p = target
            while (p && p != parent) {
                p = p.parentElement
            }
            return p == parent
        },
        _getSlotsArray() {
            let arr = []
            if (this.$slots && this.$slots.default && this.$slots.default.length) {
                arr = this.$slots.default
                    .filter(t => {
                        let co = t.componentOptions
                        if (co && co.propsData) {
                            return !!co.propsData.label && !!co.propsData.value
                        }
                    })
                    .map(t => {
                        let { label, value } = t.componentOptions.propsData
                        return { label, value }
                    })
            }
            return arr
        },
        _getInitLabel() {
            if (!this.value) return this.emptyLabel
            let itemFound = this.formatList.find(t => {
                return t.value == this.value
            })
            if (itemFound) return itemFound.label
            return this.emptyLabel
        }
    }
}
</script>

<style lang="scss">
$input-height: 36px;
$max-height: 220px;

.ai-select {
    position: relative;
    display: inline-block;
    border: 1px solid #cccccc;
    border-radius: 2px;
    height: $input-height;
    line-height: $input-height;
    background: #fff;

    &[size='l'] {
        width: 280px;
    }
    &-size-medium {
        width: 195px;
    }
    &-size-small {
        width: 140px;
    }

    &[size='xxl'] {
        width: 400px;
    }

    .ai-select-display {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 0 16px;
        transition: border-color 0.2s ease-in-out;

        &.disabled {
            cursor: not-allowed;
            color: #888888;
            background: #f1f1f1;
        }

        .ai-select-notSelected {
            color: #888888;
        }

        &.ai-select-display {
            position: relative;
        }

        .ai-icon-chevron_right {
            position: absolute;
            top: 10px;
            right: 12px;
            border-color: #000000;
            // transform: rotate(90deg);
            // &.ifRotate {
            //   transform: rotate(0deg);
            // }
        }
    }

    .ai-select-container {
        position: absolute;
        z-index: 999999;
        margin-top: 1px;
        box-sizing: border-box;
        box-shadow: 0 0 6px 0 rgba(150, 150, 150, 0.5);
        border-radius: 2px;
        width: 100%;
        height: auto;
        max-height: $max-height;
        overflow: auto;
        padding: 0 16px;
        background: #fff;
        &-item.isSelected,
        &-item:hover {
            color: #3d80db;
            cursor: pointer;
        }
    }
}
</style>

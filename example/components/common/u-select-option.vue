<template>
  <div @click="onclick" class="ai-select-container-item" :class="{ 'isSelected': isSelected }" :data-label="label" :data-value="value">
    {{ label }}
  </div>
</template>

<script>
export default {
    name: 'ai-option',
    props: {
        label: { type: String, default: '' },
        value: [String, Number],
        isSelected: { type: Boolean, default: false }
    },
    data() {
        return {}
    },
    computed: {},
    created() {},
    methods: {
        onclick($event) {
            this.$emit('click', $event)
        }
    }
}
</script>

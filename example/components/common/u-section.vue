<template>
    <div class="section" :style="{'backgroundColor': bgColor}">
        <div class="section-tit">{{title}}</div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        title: { type: String, default: '' },
        bgColor: { type: String, default: '#FFFFFF' }
    }
}
</script>

<style lang="scss" scoped>
.section {
    padding: 80px 0;
    color: $black;

    &-tit {
        padding-bottom: 50px;
        font-size: 36px;
        text-align: center;
    }
}
</style>

<template>
    <div class="solution-menu">
        <div v-for="(row, index) in data" :key="index" class="menu-row">
            <u-link v-for="(cell, cellindex) in row"  :key="cellindex"
                @click="gotoPage" :to="cell.url"
                class="cell">\{{cell.name}}</u-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: require('./s-second-menu.json')
        }
    },
    methods: {
        gotoPage() {
            this.$emit('changedNav')
        }
    }
}
</script>

<style lang="scss" scoped>
.solution-menu {
    padding-left: 318px;
    padding-bottom: 30px;

    .menu-row {
        display: table-row;
        text-align: left;
        padding-top: 30px;

        .u-link {
            display: table-cell;
            color: #e6e6e6;
            line-height: 21px;
            padding-top: 30px;
            padding-right: 30px;

            &:hover {
                color: #4bb2ff;
            }
        }
    }
}
</style>

<template>
    <div class="layout">
        <div v-for="group in ai" :key="group.name" :class="['cat-group', {'noNav': !isNavMenu}]">
            <h3 class="cat-tit">
                <u-icon v-if="!isNavMenu" :name="group.icon"></u-icon>
                <span>{{group.name}}</span>
            </h3>
            <ul class="cat-list">
                <li v-for="subject in group.subject" :key="subject.name" class="cat-item">
                    <div class="cat-item-main">
                        <u-link v-if="subject.url" @click="gotoPage" :to="subject.url">{{subject.name}}</u-link>
                        <span v-else>{{subject.name}}</span>
                    </div>
                    <div class="cat-item-sub">
                        <div v-for="(row,index) in subject.rows" :key="index" class="cat-item-row">
                            <u-link v-for="item in row" :key="item.name" @click="gotoPage" :class="{'right': item.right}" :to="item.url">{{item.name}}</u-link>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isNavMenu: { type: Boolean, default: true }
    },
    data() {
        return {
            ai: require('./s-first-menu.json')
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
$border-split: #2e2e2e; // 分割线颜色
$border-split-nonav: #efefef;
$left-pd: 13px;
$link-hover: #4bb2ff; // 链接hover上颜色

.cat-group {
    display: inline-block;
    vertical-align: top;
    text-align: left;
    opacity: 0.9;
    width: 300px;
    min-height: 575px;
    height: 100%;
    margin: 20px 0;
    padding-left: 15px;
    padding-right: 15px;
    border-right: 1px solid $border-split;

    &:last-child {
        border-right: none;
    }

    .cat-tit {
        width: 240px;
        margin-left: $left-pd;
        padding-bottom: 17px;
        font-size: 20px;
        border-bottom: 1px solid $border-split;
    }

    .cat-item {
        padding: 9px $left-pd;

        &:hover {
            background-color: rgba(255, 255, 255, 0.15);
        }

        &-main {
            .u-link:hover {
                color: $link-hover;
            }
        }

        &-sub {
            position: relative;
            margin-top: 3px;
            color: #a1a1a1;

            .cat-item-row {
                position: relative;
                display: table-row;

                .u-link {
                    display: table-cell;
                    padding-right: 36px;
                    line-height: 21px;

                    &:last-child {
                        padding-right: 0;
                    }

                    &:hover {
                        color: $link-hover;
                    }

                    &.right {
                        position: absolute;
                        right: 0;
                    }
                }
            }
        }
    }
}

.cat-group.noNav {
    margin-top: 0;
    padding-top: 20px;
    min-height: 620px;
    border: 1px solid transparent;
    border-right: 1px solid $border-split-nonav;
    color: #333333;

    &:hover {
        background: #ffffff;
        border: 1px solid #efefef;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.05);
    }

    .cat-tit {
        position: relative;
        border-bottom: 1px solid $border-split-nonav;

        .u-icon {
            position: absolute;

            &.u-icon-ai-jsjsj {
                top: -4px;
            }
        }

        span {
            padding-left: 66px;
        }
    }

    .cat-item {
        &:hover {
            background-color: #f8f8f8;
        }
    }

    .cat-item-row {
        .u-link {
            color: #808080;
        }
    }
}
</style>

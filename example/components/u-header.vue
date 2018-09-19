<template>
    <div class="u-header">
        <div class="layout clearfix">
            <u-icon name="logo" to="/" scale="0.15" class="u-header-logo"></u-icon>
            <div class="u-header-nav">
                <ul class="u-header-content">
                    <li v-for="item in navs" :key="item.name" :class="['u-header-content-item',{'disable': item.disable}]">
                        <u-link v-if="item.url" :to="item.url">{{item.name}}</u-link>
                        <p v-else ><span class="hasmenu">{{item.name}}</span><i class="arraw down"></i></p>
                        <div class="cat" v-if="item.name==='菜单1'">
                            <div class="cat-box">
                                <s-first-menu />
                            </div>
                        </div>
                        <div class="cat" v-if="item.name==='菜单2'">
                            <div class="cat-box">
                                <s-second-menu />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import SFirstMenu from '~/components/index/s-first-menu.vue'
import SSecondMenu from '~/components/index/s-next-menu.vue'

export default {
    components: {
        SFirstMenu,
        SSecondMenu
    },
    data() {
        return {
            navs: [
                {
                    name: '菜单1'
                },
                {
                    name: '菜单2'
                },
                {
                    name: '行业方案',
                    url: '/'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.u-header {
    width: 100%;
    font-size: 14px;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    color: #fff;
    z-index: 100;
    transition: background 0.3s ease;

    .layout {
        min-width: $content-width;
        width: auto;
        position: relative;
    }

    &:hover {
        background-color: #282727;
    }

    &-logo {
        float: left;
        position: relative;
        top: 6px;
        display: inline-block;
        margin-left: 30px;
    }

    &-nav {
        float: left;

        .u-header-content-item {
            float: left;
            text-align: center;
            padding: 20px 24px;
            cursor: pointer;

            &.disable {
                color: rgba(255, 255, 255, 0.4);
                cursor: default;

                .u-link {
                    cursor: default;
                }
            }

            &:first-child {
                margin-left: 45px;
            }

            &:hover {
                background-color: $black;

                .cat-box {
                    transform: scaleY(1);
                }

                .arraw {
                    transform: rotate(225deg);
                }
            }

            .hasmenu {
                margin-right: 6px;
            }

            .arraw {
                position: relative;
                top: -3px;
                transition: transform 0.3s ease;
                transform-origin: 50% 75%;
            }
        }
    }

    .cat-box {
        color: #fff;
        box-sizing: border-box;
        padding-left: 20px;
        background-color: $black;
        position: absolute;
        width: 100%;
        top: 59px;
        left: 0;
        text-align: center;
        transition: transform 0.3s ease-out;
        transform: scaleY(0);
        transform-origin: center top;
        cursor: default;
    }
}
</style>

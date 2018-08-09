<template>
  <div>
      <u-banner/>
      <u-section title="文章标题">
          <s-first-menu :isNavMenu="false"/>
      </u-section>
      <u-section title="基础组件展示" class="layout">
        <div>
            <u-link to="/demo">站内链接  </u-link>
            <u-link :href="link" target="_blank">站外链接</u-link>
        </div>
        <div>
            <u-button size='s' color='primary'>Button组件</u-button>
            <u-button size='s' color='primary' :href="link">链接百度</u-button>
            <u-button size='s' color='primary' @click="() => $store.commit('setVisibleForm', true)">打开modal组件</u-button>
        </div>
        <div>
            <u-icon name="close" :href="link"/>
            <u-icon name="close" :original="false" color="#00FF00"/>
            <u-icon src="icon.png"/>
        </div>
        <div>
            <u-tabs>
                <u-tab title="Tab1">1123</u-tab>
                <u-tab title="Tab2">1123</u-tab>
            </u-tabs>
        </div>
      </u-section>
  </div>
</template>

<script>
import SFirstMenu from '~/components/index/s-first-menu.vue'

export default {
    components: {
        SFirstMenu
    },
    data() {
        return {
            link: 'https://www.baidu.com'
        }
    }
}
</script>


<style lang="scss" scoped>
.g-index {
    height: 360px;
    background-image: url('https://p.qpic.cn/zckj/0/3e5401081932e825a927a087c87dab891521104527794/0');
    background-size: contain;
}
</style>

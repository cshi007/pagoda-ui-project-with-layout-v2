<template>
  <pagoda-layout-v2
    :top-menu="topMenu"
    :bottom-menu="bottomMenu"
    :personal-setting-menu="personalSettingMenu"
    :user-head="{tooltip: '小红', src: 'http://uploads.oh100.com/allimg/1709/117-1FZ5102542-52.jpg'}"
    @logo-click="handleLogoClick"
    @select-top-menu="handleSelectTopMenu"
    @select-bottom-menu="handleSelectBottomMenu"
  >
    <router-view></router-view>
  </pagoda-layout-v2>
</template>

<script>
export default {
  data () {
    return {
      topMenu: [{
        icon: 'iconfont icon-erp-jichudingyi',
        label: 'menu1',
        subMenu: {
          data: [{
            icon: 'iconfont icon-erp-xiaoshoumubiao',
            label: 'layout1',
            url: '/layout1'
          }, {
            icon: 'iconfont icon-erp-peisongfeiyongguanli',
            label: 'layout2',
            url: '/layout2'
          }]
        }
      }, {
        icon: 'iconfont icon-erp-yunyingxianjia',
        label: 'menu2',
        url: '/layout3'
      }],
      bottomMenu: [{
        icon: 'iconfont icon-erp-kufangguanli',
        label: 'layout4',
        url: '/layout4'
      }, {
        icon: 'iconfont icon-erp-kuneiguanli',
        label: 'layout5',
        url: '/layout5'
      }],
      personalSettingMenu: [{
        icon: 'iconfont icon-tagso',
        label: '我的标签'
      }, {
        icon: 'iconfont icon-shezhi',
        label: '我的设置'
      }, {
        icon: 'iconfont icon-logout',
        label: '退出登录'
      }]
    }
  },
  methods: {
    handleSelectTopMenu (opt) {
      // 在此可进行路由切换
      this.$router.push(opt.url)
    },
    handleSelectBottomMenu (opt) {
      // 在此可进行路由切换
      this.$router.push(opt.url)
    },
    handleLogoClick () {
      this.$router.push('/')
    }
  }
}
</script>

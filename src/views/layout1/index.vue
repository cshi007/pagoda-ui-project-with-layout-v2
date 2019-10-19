<template>
  <div class="layout1">
    <pagoda-layout-v2-header
      :menu="headerMenu"
      @select-header-menu="handleSelectHeaderMenu"
    >
    </pagoda-layout-v2-header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      headerMenu: [{
        label: '功能1',
        url: '/layout1/page1'
      }, {
        label: '功能2',
        url: '/layout1/page2'
      }]
    }
  },
  methods: {
    handleSelectHeaderMenu (opt) {
      this.$router.push(opt.url)
    }
  }
}
</script>

<style>
  .layout1 {
    height: 100%;
  }
</style>

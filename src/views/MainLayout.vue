<template>
  <!--顶部通栏-->

  <AppTopNav />

  <MyHeader/>

  <div class="main">
    <router-view />
  </div>
    <!--二级路由-->
  <div>底部区域</div>

</template>

<script>
import AppTopNav from '@/components/AppTopNav.vue';
import MyHeader from '@/components/MyHeader.vue';
export default {
  components:{
      AppTopNav,
      MyHeader,
  }
    }
</script>
<style lang="less">

</style>


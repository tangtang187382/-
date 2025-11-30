<template>
  <div class="home w">
    <!--轮播图-->
    <MainHomeBanner/>
    <HomeNew />
    <HomeHot />
    <HomeProduct />
  </div>  
</template>

<script>
import MainHomeBanner from '@/components/MainHomeBanner';
import HomeNew from './HomeNew.vue';
import HomeHot from './HomeHot.vue';
import HomeProduct from './HomeProduct.vue';
export default {
    components:{
      MainHomeBanner,
      HomeNew,
      HomeHot,
      HomeProduct
    }
}
</script>
<style lang="less" scoped>

</style>

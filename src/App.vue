<template>
  <!--一级路由出口-->
  <router-view />
</template>

<style lang="less">
  @import url("./assets/styles/mixins.less");
#box{
  width: 200px;
  height: 300px;
  background: #ff3;
  margin: 20px;
  .hoverShadow();
}
</style>

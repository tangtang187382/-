<template>
    <router-link :to="path" class="more">
        <span>查看全部 ></span>
    </router-link>
</template>

<script>
export default {
    name:"AppMore",
    props:{
        path:{
            type:String,
            default:"/",
        }
    }
};
</script>

<style lang="less" scoped>
.more{
    float: right;
    span{
        font-size: 16px;
        color: #999;
    }
}
</style>
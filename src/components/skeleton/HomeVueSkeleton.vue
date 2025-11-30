<template>
    <div>
        <ul class="goods-list">
            <li class="item" v-for="i in 4" :key="i">
                <AppSkeleton width="265px" height="265px" bg="#999"/>
                <!--name-->
                <AppSkeleton width="100px" height="30px" bg="#cccccc"/>
            </li>
        </ul>
    </div>
</template>

<script>
import AppSkeleton from '../library/AppSkeleton.vue';

export default {
components:{
    AppSkeleton,
}
};
</script>

<style lang="less" scoped>
    .goods-list{
        display: flex;
        justify-content: space-between;
        .item{
            width: 265px;
            height: 365px;
            background-color: #ccc;
        }
    }
</style>
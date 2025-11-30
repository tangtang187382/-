<template>
    <div class="home-new">
        <!--插槽是双标签-->
        <MyPanel title="黑鸟精选" sub-title="黑鸟出品,必属精品">
            <!--SLOT-->
            <template #right>
                <AppMore path="/" />
            </template>
            <!--默认slot-->
            <ul class="goods-list" v-if="goods.length">
                <li class="item" v-for="item in goods" :key="item.id">
                    <router-link to="/">
                        <img :src=item.listPicUrl>
                        <div class="title ellipsis">{{ item.name }}</div>
                        <div class="price">¥{{ item.retailPrice }}<del>{{ item.counterPrice }}</del></div>
                    </router-link>
                </li>
            </ul>
            <!--骨架屏-->
            <HomeVueSkeleton v-else/>
        </MyPanel>
    </div>
</template>
<script>
import HomeVueSkeleton from '@/components/skeleton/HomeVueSkeleton.vue';
import AppMore from '@/components/library/AppMore.vue';
import MyPanel from '@/components/MyPanel.vue';
import {getNew} from '@/api'
import {ref} from 'vue'
export default {
components:{
    MyPanel,
    AppMore,
    HomeVueSkeleton,
},
setup(){
    const goods = ref([]);
    const getNewlist = async()=>{
        try{
            const res = await getNew();
            if(res.code=='200'){
                goods.value = res.data.result.slice(0,4);
            }
        }catch(e){
            return{e}
        }
    }
    getNewlist()
    return {goods}
}
}
</script>

<style lang="less" scoped>
.home-new{
    .goods-list{
        display:flex;
        justify-content: space-between;
        .item{
            width: 265px;
            background-color: #f5f5f5;
            height: 365px;
            img{
                width: 265px;
                height: 265px;
            }
            .title{
                text-align: center;
                padding: 10px 20px;
                font-size:18px;
            }
            .hoverShadow();
            .price{
                text-align: center;
                color:@priceColor;
                font-size: 15px;
                del{
                    color: #666;
                }
            }
        }
    }
}
</style>
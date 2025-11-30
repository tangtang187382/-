<template>
    <div class="home-product">
        <MyPanel :sub-title="item.stitle" v-for="item in products" :key="item.id" :title="item.name">
            <template #right>
                <div class="sub">
                    <router-link to="/" v-for="i in item.sub" :key="i.id">{{ i.name }}</router-link>
                </div>
                <AppMore />
            </template>
            <div class="goods">
                <!--左侧-->
                <router-link  class="left" to="/">
                    <img :src="item.picture" alt="">
                </router-link>
                <div class="right">
                    <ul class="goods-list">
                        <li v-for="g in item.goods" :key="g.id">
                            <MyGoodsitem :good="g"/>
                        </li>
                    </ul>
                </div>
            </div>
        </MyPanel>
    </div>
</template>

<script>
import MyPanel from '@/components/MyPanel.vue';
import AppMore from '@/components/library/AppMore.vue';
import MyGoodsitem from '@/components/MyGoodsitem.vue';
import { getproducts } from '@/api';
import {ref} from 'vue'
export default {
    components:{
        MyPanel,
        AppMore,
        MyGoodsitem,
    },
    setup(){
        const products = ref([]);
        const getproduct = async()=>{
            try{
                const res = await getproducts();
                if(res.msg=='操作成功'){
                    products.value = res.result;
                }
            }catch(e){
                return{e}
            }
        };
        getproduct();
        return{products};
    }
}
</script>

<style lang="less" scoped>
.home-product{
    background: #fff;
    padding-bottom: 40px;
    .sub{
        a{
            padding: 2px 10px;
            border-radius: 4px;
            font-size: 16px;
            margin: 0 7px;
            &:hover{
                background-color: @xtxColor;
                color: #fff;
            }
            &:last-child{
                margin-right: 40px;
            }
        }
    }
    .goods{
        display: flex;
        height: 610px;
        .left{
            width: 240px;
            margin-right: 10px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .right{
            flex: 1;
            .goods-list{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
            }
        }
    }
}
</style>
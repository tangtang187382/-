<template>
    <div class="home-hot">
        <MyPanel title="大家都在看" sub-title="走过路过,不要错过">
            <!--SLOT-->
            <template #right>
                <AppMore path="/" />
            </template>
            <ul class="goods-list">
                <li class="item" v-for="item in goods" :key="item.id">
                    <router-link to="/">
                        <img :src=item.imgUrl>
                        <div class="title ellipsis-2">{{ item.name }}</div>
                    </router-link>
                </li>
            </ul>
        </MyPanel>
    </div>
</template>

<script>
import MyPanel from '@/components/MyPanel.vue';
import {ref} from 'vue';
import { gethot } from '@/api';
import AppMore from '@/components/library/AppMore.vue';
export default {
components:{
    MyPanel,
    AppMore,
},
setup(){
    const goods=ref([]);
    const gethostlist = async()=>{
        try{
            const res= await gethot();
            goods.value = res.result.slice(0,4);
        }catch(e){
            return{e}
        }
    };
    gethostlist();
    return {goods};
}
}
</script>
<style lang="less" scoped>
.home-hot{
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
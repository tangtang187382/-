<template>
    <div class="goods-item">
        <router-link class="images" to="/">
            <img :src="good.picture" alt="">
        </router-link>
        <div class="title ellipsis-2">
            {{ good.name }}
        </div>
        <div class="type">{{ good.subname }}</div>
        <div class="price">{{ good.price }}</div>
        <div class="extra">
            <router-link to="/">
                <span>找相似</span>
                <span>发现更多宝贝 ></span>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
props:{
    good:{
        type:Object,
        required:true,
    }
}
}
</script>

<style lang="less" scoped>
.goods-item{
    position: relative;
    width: 200px;
    height: 300px;
    margin-bottom: 10px;
    overflow: hidden;
    transition: all 0.5s;
    .images{
        width: 160px;
        height: 160px;
        margin: 0 auto;
        img{
            width: 100%;
            height: 180px;
        }
    }
    .title{
        font-size: 16px;
    }
    .type{
        font-size: 14px;
        color: #ccc;
        margin: 10px;
    }
    .price{
        font-size: 16px;
        color:@priceColor;
    }
    .extra{
        position: absolute;
        right: 0;
        left: 0;
        bottom:0;
        background-color: @xtxColor;
        height: 85px;
        transform: translate3d(0,100%,0);
        transition: all 0.5s;
        span{
            display:block;
            margin: 10px 0;
            text-align: center;
            color: #fff;
            font-size: 16px;
        }
        span:last-child{
            font-size: 14px;
        }
    }
    &:hover{
        border: 1px solid @xtxColor;
        .extra{
            transform: none;
        }
    }
}
</style>

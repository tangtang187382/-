<template>
    <div class="my-panel w">
        <!--HEADER-->
        <div class="header">
            <h3>{{ title }}
                <small>{{ subTitle }}</small>
            </h3>
            <slot name="right" />
        </div>
    </div>
    <slot/>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default:'MAIN MENU'
        },
        subTitle:{
            type:String,
            default:"submenu"
        }

    }
}
</script>

<style lang="less" scoped>
.my-panel{
    background-color: #fff;
    .header{
        padding:20px 0;
        display: flex;
        align-items: flex-end;
        h3{
            flex: 1;
            font-size: 32px;
            text-align: left;
            small{
                font-size: 26px;
                color:#999;
                margin-left:1px
            }
        }
    }
}
</style>
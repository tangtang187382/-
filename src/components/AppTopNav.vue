<template>
    <div class="top-nav">
        <div class="w">
            <ul>
                <template v-if="userinfo.token">
                    <li>
                        <a href="">{{ userinfo.username }}</a>
                    </li>
                    <li>
                        <a href="">退出登陆</a>
                    </li>
                </template>
                <li>
                    <img src="@/assets/images/ren.png"/>
                    <a href="">登陆/注册</a>
                </li>
                <li>
                    <img src="@/assets/images/dingdan.png" />
                    <a href="">我的订单</a>
                </li>
                <li>
                    <img src="@/assets/images/huiyuan.png" />
                    <a href="">会员</a>
                </li>
                <li>
                    <img src="@/assets/images/qiyecaigou.png" />
                    <a href="">企业采购</a>
                </li>
                <li>
                    <img src="@/assets/images/fuwu.png" />
                    <a href="">客户服务</a>
                </li>
                <li>
                    <img src="@/assets/images/apps.png" />
                    <a href="">APP</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import {useStore} from 'vuex'
import {computed} from 'vue'
export default {
    setup(){
        const store = useStore();
        var userinfo = computed(()=>{
            return store.state.user.userinfo;
        });
        return {userinfo}
    }
}
</script>

<style lang="less" scoped>
/*
@import url('../assets/styles/variables.less');
*/
.top-nav {
    background-color: #333;
    ul {
        display: flex;
        height: 50px;
        line-height: 50px;
        justify-content: flex-end;
        img{
            height: 20px;            
            vertical-align: middle; 
        }
        li a{
            padding: 0 10px;
            color:#ccc;
            &:hover{
                color: @xtxColor;
            }
        }
    }
}
</style>
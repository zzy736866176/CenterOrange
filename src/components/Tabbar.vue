<template>
    <div>
        <ul>
            <router-link to="/index" tag="li" active-class="active">首页</router-link>
            <router-link to="/film" tag="li" active-class="active">剧院</router-link>
            <router-link to="/eticket" tag="li" active-class="active">票夹</router-link>
            <router-link to="/center" tag="li" active-class="active">我的</router-link>
        </ul>
    </div>
</template>
<style scoped>
    ul{
        position: fixed;
        bottom: 0;
        display: flex;
        width: 100%;
        text-align: center;
        height: .8rem;
        line-height: .8rem;
        background-color: whitesmoke;
    }
    ul li{
        flex:1
    }
    .active{
        color:orange;
    }
</style>

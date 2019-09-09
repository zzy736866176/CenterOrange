<template>
    <div>
        <ul>
            <router-link to="/show/perform" tag="li">演唱会</router-link>
            <router-link to="/show/cinema" tag="li">音乐剧</router-link>
            <router-link to="/show/theatre" tag="li">舞台剧</router-link>
            <router-link to="/show/drama" tag="li">儿童剧</router-link>
            <router-link to="/show/concert" tag="li">音乐会</router-link>
        </ul>
    </div>
</template>

<style scoped>
    ul{
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
</style>

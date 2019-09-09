<template>
  <div id="app">
    <router-view/>
    <Tabbar v-show="isTabbarShow"></Tabbar>
  </div>
</template>
<script>
import Tabbar from '@/components/Tabbar'
import { mapState } from 'vuex'
export default {
  components: {
    Tabbar
  },
  computed: mapState(['isTabbarShow'])
}
</script>
<style>
  *{
    margin: 0;
    padding: 0;
    font-size: .24rem;
  }
  ul{
    list-style: none;
  }
</style>

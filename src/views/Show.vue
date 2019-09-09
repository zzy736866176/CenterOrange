<template>
    <div>
        show
        <router-view></router-view>
    </div>
</template>
<script>
export default {
  mounted () {
    this.$store.commit('hideTabbar')
  },
  beforeDestroy () {
    this.$store.commit('showTabbar')
  }
}
</script>

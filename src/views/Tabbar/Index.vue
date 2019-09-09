<template>
    <div>
        <Swiper v-if="piclist.length" name="banner" :options="{
            loop: true,
            freeMode: false,
            slidesPerView: 1,
            spaceBetween: 0,
            pagination: true
          }">
          <div class="swiper-slide" v-for="pic in piclist" :key="pic.url">
            <img :src="pic.image_url" alt="">
          </div>
        </Swiper>
        <Navbar></Navbar>
        <div>各种卡</div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Swiper from '@/components/Swiper'
import http from '@/http/http.js'
export default {
  mounted () {
    http('https://api.juooo.com/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.0.5&referer=2').then(res => {
      console.log(res.data.data.slide_list)
      this.piclist = res.data.data.slide_list
    })
  },
  components: {
    Navbar,
    Swiper
  },
  data () {
    return {
      piclist: []
    }
  }
}
</script>
<style scoped>
  .swiper-slide{
    width: 100%;
    height: 3.2rem
  }
  img{
    width: 100%;
    height: 100%;
    display: block;
  }
</style>

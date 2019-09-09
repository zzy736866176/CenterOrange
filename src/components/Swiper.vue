<template>
  <div class="swiper-container" :class="name">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

export default {
  mounted () {
    var { loop, freeMode, slidesPerView, spaceBetween, pagination } = this.options
    new Swiper('.' + this.name, {
      loop,
      freeMode,
      slidesPerView: slidesPerView,
      spaceBetween: spaceBetween,
      pagination: pagination ? {
        el: '.swiper-pagination'
      } : {}
    })
  },
  props: ['name', 'options']
}
</script>

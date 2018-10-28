<template>
  <div class="swiper">
    <swiper :options="swiperOption"  v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="(item,key) in list" :key="key"><img :src="item.imgUrl" class="swiper-img"></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
// import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Swiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  },
  props: {
    list: Array
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="scss" scoped>
  @import '~styles/varibles';
  .swiper /deep/ .swiper-pagination-bullet-active{
    background-color: #fff;
  }
  .swiper{
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 30.5%;
    background-color: #eee;
    &-img{
      width: 100%;
    }
  }
</style>

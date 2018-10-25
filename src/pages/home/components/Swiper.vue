<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(item,key) in swiperList" :key="key"><img :src="item.imgUrl" class="swiper-img"></swiper-slide>
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
      },
      swiperList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/vc/d9/dd/ac/b62d938a8de875f0199cc03bd2.jpg'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/vc/a5/e0/64/c6bd8680fb67247db15df6057b.jpg'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/vc/2f/8e/51/cb4d31b360c836f7d1bbe83c13.jpg'
      }, {
        id: '004',
        imgUrl: 'http://img1.qunarzz.com/vc/c4/af/5c/7b5c474b2d55284477bcc775cc.png'
      }]
    }
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

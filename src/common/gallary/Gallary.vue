<template>
    <div class="gallary" @click="handleGallaryClick">
      <div class="wrapper">
        <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide v-for="(item,key) in imgs" :key="key"><img :src="item" class="swiper-img"></swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Gallary',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick (e) {
      e.stopPropagation()
      this.$emit('close')
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~styles/varibles';
  .wrapper /deep/ .swiper-container{
    overflow: visible;
  }
  .gallary{
    overflow: hidden;
    width: $vw_width;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    z-index: $mest;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.7);
    .wrapper{
      width: 100%;
      height: 0;
      padding-bottom: 100%;
      .swiper-img{
        // width: 100%;
        height: $vw_width;
      }
      .swiper-pagination{
        font-size: rem(20);
        color: #fff;
        bottom: rem(-50);
      }
    }
  }
</style>

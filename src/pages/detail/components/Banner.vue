<template>
  <div class="banner" @click="handleBannerClick">
    <div class="banner-inner">
      <img class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe608;</span>{{gallaryImgs.length}}</div>
      </div>
    </div>
    <common-gallary :imgs="gallaryImgs" @close="handleGallaryClose" v-show="showGallary"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'

export default {
  name: 'Banner',
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  }
}
</script>

<style lang="scss" scoped>
  @import '~styles/varibles';
  .banner-inner{
    overflow: hidden;
    height: 0;
    padding-bottom: 50.7%;
    position: relative;
    .banner-img{
      width: 100%;
    }
    .banner-info{
      display: flex;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      font-size: rem(12);
      color: #fff;
      line-height: rem(30);
      background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8));
      .banner-title{
        flex: 1;
        font-size: rem(16);
        padding: 0 rem(10);
      }
      .banner-number{
        height: rem(18);
        padding: 0 rem(20);
        margin-top: rem(6);
        line-height: rem(18);
        border-radius: rem(20);
        background-color: rgba(0,0,0,.4);
        .banner-icon{
          font-size: rem(10);
        }
      }
    }
  }
</style>

<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,key) in pages" :key="key">
        <div class="icon" v-for="(item,key) in page" :key="key">
          <div class="icon-img"><img :src="item.imgUrl" :alt="item.text" class="icon-img-content"></div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Icons',
  data () {
    return {
      swiperOption: {},
      iconsList: [{
        id: '001',
        imgUrl: 'http://s.qunarzz.com/touch_home/imgs/hotel.png',
        desc: '11111111111111111'
      }, {
        id: '002',
        imgUrl: 'http://s.qunarzz.com/touch_home/imgs/hotel.png',
        desc: '2'
      }, {
        id: '003',
        imgUrl: 'http://s.qunarzz.com/touch_home/imgs/hotel.png',
        desc: '3'
      }, {
        id: '004',
        imgUrl: 'http://s.qunarzz.com/touch_home/imgs/hotel.png',
        desc: '4'
      }, {
        id: '005',
        imgUrl: 'http://s.qunarzz.com/touch_home/imgs/hotel.png',
        desc: '5'
      }, {
        id: '006',
        imgUrl: 'http://s.qunarzz.com/touch_home/imgs/hotel.png',
        desc: '6'
      }, {
        id: '007',
        imgUrl: 'http://s.qunarzz.com/touch_home/imgs/hotel.png',
        desc: '7'
      }, {
        id: '008',
        imgUrl: 'http://s.qunarzz.com/touch_home/imgs/hotel.png',
        desc: '8'
      }, {
        id: '009',
        imgUrl: 'http://s.qunarzz.com/touch_home/imgs/hotel.png',
        desc: '9'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
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
  .icons /deep/ .swiper-container{
    height: 0;
    padding-bottom: 50%;
    background-color: #eee;

  }
  .icon{
    width: 25%;
    padding-bottom: 25%;
    height: 0;
    overflow: hidden;
    float: left;
    position: relative;
    &-img{
      position: absolute;
      top: 0;
      bottom: rem(30);
      left: 0;
      right: 0;
      overflow: hidden;
      box-sizing: border-box;
      padding: rem(4);
      &-content{
        display: block;
        height: 100%;
        margin: 0 auto;
      }
    }
    &-desc{
      height: rem(15);
      line-height: rem(15);
      font-size: rem(13);
      text-align: center;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      color: $datkTextColor;
      @include ellipsis;
    }
  }
</style>

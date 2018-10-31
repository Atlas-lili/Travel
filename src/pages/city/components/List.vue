<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"  v-for="item in hot" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) of cities" :key="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'List',
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  props: {
    cities: Object,
    hot: Array
  }
}
</script>

<style lang="scss" scoped>
  @import '~styles/varibles';
  .border-topbottom,.border-bottom{
    &:before,&:after{
      border-color: #ccc;
    }
  }
  .list{
    overflow: hidden;
    position: absolute;
    top: rem(79);
    left: 0;
    right: 0;
    bottom: 0;
    .area{
      .title{
        line-height: rem(27);
        font-size: rem(13);
        padding-left: rem(8);
        background-color: #eee;
        color: #666;
      }
      .button-list{
        padding: rem(5) rem(30) rem(5) rem(5);
        overflow: hidden;
        .border{
          &:before,&:after{
            border-color: #ccc;
          }
        }
        .button-wrapper{
          float: left;
          width: 33.3%;
          .button{
            text-align: center;
            margin: rem(5);
            padding: rem(5) 0;
            font-size: rem(15);
            border: rem(1) solid #ccc;
            border-radius: rem(4);
          }
        }
      }
      .item-list{
        .item{
          line-height: rem(37);
          font-size: rem(16);
          color: #666;
          padding-left: rem(8);
        }
      }
    }
  }
</style>

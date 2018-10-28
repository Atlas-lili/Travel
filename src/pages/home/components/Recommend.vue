<template>
  <div class="recommend">
    <div class="recommend-title">热门推荐</div>
    <ul>
      <li class="item border-bottom" v-for="(item,key) in list" :key="key">
        <img class="item-img" :src="item.imgUrl" :alt="item.title">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button>查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  data () {
    return {}
  },
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
  @import '~styles/varibles';
  *{
    margin: 0;
    padding: 0;
  }
  .recommend{
    margin-top: rem(8);
    .recommend-title{
      line-height: rem(32);
      font-size: rem(12);
      background-color: #eee;
      text-indent: rem(10);
    }
    ul{
      .item{
        overflow: hidden;
        display: flex;
        height: rem(120);
        .item-img{
          height: rem(104);
          padding: rem(8);
        }
        .item-info{
          flex: 1;
          min-width: 0;
          padding-left: rem(4);
          font-size: rem(12);
          .item-title{
            line-height: rem(36);
            font-size: rem(15);
            font-weight: bold;
            @include ellipsis;
          }
          .item-desc{
            line-height: rem(20);
            color: #ccc;
            @include ellipsis;
          }
          button{
            display: block;
            border: none;
            margin-top: rem(16);
            background-color: #ff9300;
            padding: rem(3);
            border-radius: rem(3);
            color: #fff;
          }
        }
      }
    }
  }
</style>

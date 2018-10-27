<template>
  <div class="recommend">
    <div class="recommend-title">热门推荐</div>
    <ul>
      <li class="item border-bottom" v-for="(item,key) in recommendsList" :key="key">
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
    return {
      recommendsList: [{
        id: '001',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1504/59/594e60a1366e1741.water.jpg_256x160_28de21eb.jpg',
        title: '华山',
        desc: '只有天在上，更无山与齐'
      }, {
        id: '002',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1504/59/594e60a1366e1741.water.jpg_256x160_28de21eb.jpg',
        title: '华山',
        desc: '只有天在上，更无山与齐'
      }, {
        id: '003',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1504/59/594e60a1366e1741.water.jpg_256x160_28de21eb.jpg',
        title: '华山',
        desc: '只有天在上，更无山与齐'
      }]
    }
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

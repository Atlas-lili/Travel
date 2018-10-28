<template>
  <div class="weekend">
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="(item,key) in recommendsList" :key="key">
        <div class="item-img-wraper">
          <img class="item-img" :src="item.imgUrl" :alt="item.title">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Weekend',
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
  .weekend{
    margin-top: rem(8);
    .weekend-title{
      line-height: rem(32);
      font-size: rem(12);
      background-color: #eee;
      text-indent: rem(10);
    }
    ul{
      .item{
        .item-img-wraper{
          overflow: hidden;
          height: 0;
          padding-bottom: 62.5%;
          .item-img{
            width: 100%;
          }
        }
        .item-info{
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
        }
      }
    }
  }
</style>

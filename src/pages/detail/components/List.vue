<template>
    <div class="list">
      <div class="item" v-for="(item,key) in list" :key="key">
        <div class="item-title border-bottom">
          <img src="//s.qunarzz.com/piao/image/pc/detail/qunar_recommand.png" class="item-title-icon">
          {{item.title}}
        </div>
        <div class="item-child" v-if="item.children">
          <list :list="item.children"></list>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
  @import '~styles/varibles';
  .item-title{
    line-height: rem(40);
    font-size: rem(16);
    padding: 0 rem(10);
    &-icon{
      position: relative;
      top: rem(5);
      width: rem(28);
      height: rem(28);
      margin-left: rem(3);
    }
  }
  .item-child{
    padding: 0 rem(10);
  }
</style>

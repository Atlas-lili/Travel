<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span><input type="text" placeholder="输入城市/景点/旅游主题">
    </div>
    <div class="header-right">{{city}}<span class="iconfont">&#xe615;</span></div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    city: String
  }
}
</script>

<style lang="scss" scoped>
  @import '~styles/varibles';

  .header{
    height: rem(43);
    line-height: rem(43);
    background: $bg_color;
    color: #fff;
    display: flex;
    &-left{
      width: rem(32);
      font-size: rem(25);
      text-align: center;
      float: left;
    }
    &-input{
      flex: 1;
      height: rem(31);
      line-height: rem(31);
      margin-left: rem(5);
      margin-top: rem(6);
      padding-left: rem(4);
      background-color: #fff;
      border-radius: rem(3);
      font-size: rem(15);
      color: #888;
      .iconfont{
        font-size: rem(20);
      }
      input{
        width: 90%;
        height: rem(24);
        line-height: rem(24);
        margin-left: rem(2);
        outline: none;
        border: none;
      }
    }
    &-right{
      width: rem(62);
      float: right;
      font-size: rem(16);
      text-align: center;
      .iconfont{
        font-size: rem(10);
      }
    }
  }
</style>

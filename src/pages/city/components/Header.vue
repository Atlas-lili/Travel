<template>
  <div class="header">
    城市选择
    <router-link to="/"><div class="iconfont header-back">&#xe624;</div></router-link>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'hjhlkjhlk'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~styles/varibles';
  .header{
    overflow: hidden;
    height: $header_height;
    line-height: $header_height;
    font-size: rem(16);
    text-align: center;
    color: #fff;
    background-color: $bg_color;
    position: relative;
    &-back{
      position: absolute;
      top: 0;
      left: 0;
      width: rem(32);
      color: #fff;
      font-size: rem(25);
      text-align: center;
    }
  }
</style>

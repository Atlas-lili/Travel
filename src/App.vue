<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @charset "utf-8";
  @import '~styles/varibles';
  //mediaQueries定制视口样式
  @media (min-width: 540px) {
    body {
      //差异化配置
    }
    #app{
      margin: 0 auto;
    }
  }
  $vw_design: 750;
  html{
    font-size: ($vw_fontsize / ($vw_design / 2)) * 100vw;
    @media screen and (max-width: 320px) {
      font-size: 64px;
    }
    @media screen and (min-width: 540px) {
      font-size: 108px;
    }
  }
  #app{
    width: $vw_width;
    position: relative;
  }
</style>

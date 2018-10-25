<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @charset "utf-8";
  //mediaQueries定制视口样式
  @media (min-width: 769px) {
    body {
      //差异化配置
    }
  }
  $vw_fontsize: 75;
  @function rem($px) {
    @return ($px / $vw_fontsize) * 1rem;
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
</style>

<template>
    <div class="header">
      <router-link tag="div" to="/" class="header-abs" v-show="showAbs" ref="headerAbs"><span class="iconfont header-abs-back">&#xe624;</span></router-link>
      <div class="header-fix" v-show="!showAbs" :style="opacityStyle">
        景点详情
        <router-link to="/"><div class="iconfont header-fix-back">&#xe624;</div></router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      showAbs: true,
      timer: null,
      showTop: 0,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const top = document.documentElement.scrollTop
        if (top > this.showTop) {
          const opacity = top >= this.showTop * 2 ? 1 : top / (this.showTop * 2)
          this.opacityStyle = {opacity}
          this.showAbs = false
        } else {
          this.showAbs = true
        }
      }, 60)
    }
  },
  mounted () {
    const headerAbs = this.$refs.headerAbs.$el
    this.showTop = headerAbs.offsetTop + headerAbs.offsetHeight
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
  @import '~styles/varibles';
  .header-abs{
    position: absolute;
    top: rem(10);
    left: rem(10);
    width: rem(40);
    height: rem(40);
    line-height: rem(40);
    border-radius: rem(20);
    background-color: rgba(0,0,0,.5);
    text-align: center;
    font-size: rem(25);
    &-back{
      color: #fff;
    }
  }
  .header-fix{
    z-index: $little;
    overflow: hidden;
    height: $header_height;
    line-height: $header_height;
    font-size: rem(16);
    text-align: center;
    color: #fff;
    background-color: $bg_color;
    position: fixed;
    top: 0;
    width: $vw_width;
    .header-fix-back{
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

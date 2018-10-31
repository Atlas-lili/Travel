<template>
    <ul class="alphabet">
      <li class="item"
          v-for="item in letters"
          :key="item"
          :ref="item"
          @click="handleLetterClick"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd">{{item}}</li>
    </ul>
</template>

<script>
export default {
  name: 'Alphabet',
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart (e) {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      e.preventDefault()
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - document.getElementsByClassName('city')[0]
            .getElementsByClassName('header')[0].offsetHeight - document.getElementsByClassName('city')[0]
            .getElementsByClassName('search')[0].offsetHeight
          const index = Math.floor((touchY - this.startY) / this.$refs['A'][0].offsetHeight)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
            console.log(this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  },
  props: {
    cities: Object
  }
}
</script>

<style lang="scss" scoped>
  @import '~styles/varibles';
  .alphabet{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: rem(79);
    right: 0;
    bottom: 0;
    width: rem(20);
    .item{
      text-align: center;
      line-height: rem(20);
      font-size: rem(12);
      color: $bg_color;
    }
  }
</style>

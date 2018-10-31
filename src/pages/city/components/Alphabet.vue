<template>
    <ul class="alphabet">
      <li class="item" v-for="(item,key) of cities" :key="key">{{key}}</li>
    </ul>
</template>

<script>
export default {
  name: 'Alphabet',
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

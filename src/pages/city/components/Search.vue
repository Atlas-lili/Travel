<template>
    <div class="search">
      <input class="search-input" type="text" placeholder="请输入城市名称或拼音">
    </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style lang="scss" scoped>
  @import '~styles/varibles';
  .search {
    overflow: hidden;
    height: rem(36);
    text-align: center;
    padding: 0 rem(3);
    background-color: $bg_color;
    font-size: rem(15);
    &-input{
      box-sizing: border-box;
      outline: none;
      border: none;
      width: 100%;
      height: rem(31);
      border-radius: rem(4);
      padding: 0 rem(8);
      font-size: rem(15);
      text-align: center;
      color: #333;
    }
  }
</style>

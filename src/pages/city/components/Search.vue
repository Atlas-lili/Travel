<template>
  <div class="search">
    <div class="search-body">
      <input class="search-input" type="text" placeholder="请输入城市名称或拼音" v-model="keyword">
    </div>
    <div class="search-list" v-show="keyword" ref="search">
      <ul>
        <li class="search-item border-bottom" v-for="item in list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配信息</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapMutations} from 'vuex'

export default {
  name: 'Search',
  data () {
    return {
      keyword: '',
      list: [],
      timer: null,
      searched: false// 匹配是否完成
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length && this.searched
    }
  },
  mounted () {
    if (this.$refs.search) {
      console.log(1)
    }
    this.scroll = new BScroll(this.$refs.search, {click: true})
  },
  watch: {
    keyword () {
      this.searched = false
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        this.searched = true
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
        this.searched = true
      }, 100)
    }
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.keyword = ''
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  props: {
    cities: Object
  }
}
</script>

<style lang="scss" scoped>
  @import '~styles/varibles';
  .search-body{
    z-index: $mest;
    position: relative;
    overflow: hidden;
    height: rem(36);
    text-align: center;
    padding: 0 rem(3);
    background-color: $bg_color;
    font-size: rem(15);
    .search-input{
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
  .search-list{
    z-index: $mest;
    overflow: hidden;
    position: absolute;
    top: rem(79);
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #eee;
    .search-item{
      line-height: rem(30);
      font-size: rem(16);
      color: #666;
      padding-left: rem(8);
      background-color: #fff;
    }
  }
  @media (min-width: 1000px) {
    .search-list{
      overflow-y: scroll;
    }
  }
</style>

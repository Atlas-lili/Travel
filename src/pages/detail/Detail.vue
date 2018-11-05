<template>
    <div class="detail">
      <detail-banner></detail-banner>
      <detail-header></detail-header>
      <div class="contant">
        <detail-list :list="list"></detail-list>
      </div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'

export default {
  name: 'Detail',
  data () {
    return {
      list: [{
        title: '成人票',
        children: [{
          title: '成人三馆联票',
          children: [{
            title: '成人三馆某一'
          }, {
            title: '成人三馆某一'
          }]
        }, {
          title: '成人五馆联票'
        }, {
          title: '成人八馆联票'
        }]
      }, {
        title: '学生票',
        children: [{
          title: '成人三馆联票'
        }, {
          title: '成人五馆联票'
        }, {
          title: '成人八馆联票'
        }]
      }, {
        title: '儿童票',
        children: [{
          title: '成人三馆联票'
        }, {
          title: '成人五馆联票'
        }, {
          title: '成人八馆联票'
        }]
      }, {
        title: '特惠票',
        children: [{
          title: '成人三馆联票'
        }, {
          title: '成人五馆联票'
        }, {
          title: '成人八馆联票'
        }]
      }]
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  }
}
</script>

<style lang="scss" scoped>
.contant{
  height: 1000px;
}
</style>

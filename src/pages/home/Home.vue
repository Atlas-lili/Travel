<template>
  <div class="home">
    <home-header></home-header>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'shouye'
    }
  },
  components: {
    HomeHeader
  }
}
</script>

<style scoped>

</style>

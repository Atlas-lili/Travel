<template>
    <div class="city">
      <city-header></city-header>
      <city-search></city-search>
      <city-list :cities="cities" :hot="hotCities"></city-list>
      <city-alphabet :cities="cities"></city-alphabet>
    </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'

export default {
  name: 'City',
  data () {
    return {
      cities: {},
      hotCities: []
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const resData = res.data
        this.cities = resData.cities
        this.hotCities = resData.hotCities
        console.log(res)
      }
    }
  },
  mounted () {
    this.getCityInfo()
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  }
}
</script>

<style lang="scss" scoped>
.city{
  width: 100%;
  height: 100vh;
  position: relative;
}
</style>

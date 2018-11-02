let defaultCity = '北京'
try {
  defaultCity = (localStorage.city) ? localStorage.city : defaultCity
} catch (e) {}
export default {
  city: defaultCity
}

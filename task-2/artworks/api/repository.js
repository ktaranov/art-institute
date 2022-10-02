export default $axios => (resource) => ({
  index() {
    return $axios.$get(`${resource}` )
  },
  search(params) {
    return $axios.$get(`${resource}/search?q=${params}`)
  }
})

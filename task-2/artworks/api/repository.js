export default $axios => (resource) => ({
  index() {
    return $axios.$get(`${resource}` )
  },
  search(params) {
    return $axios.$get(`${resource}/search?q=${params}&limit=100`)
  },
  getPicImageId(params) {
    return $axios.$get(`${resource}/${params}?fields=id,title,image_id`)
  }
})

export default ($axios) => (resource) => ({
  search(params) {
    return $axios.$get(
      `${resource}/search?q=${params.searchValue}&fields=id,title,image_id,thumbnail&limit=${params.size}&page=${params.page}`
    )
  },
})

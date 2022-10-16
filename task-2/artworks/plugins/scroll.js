import VirtualList from 'vue-virtual-scroll-list'

export default ({ app }, inject) => {
  inject('constants', VirtualList)
}

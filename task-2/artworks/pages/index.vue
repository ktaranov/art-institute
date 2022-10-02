<template>
  <div class="main">
    <NavBar />
    <BaseSearch
      :value="searchValue"
      @onInput="startSearch"
    />
    <ArtworksList :items="items"/>
  </div>
</template>

<script>
import BaseSearch from '../components/BaseSearch'
import ArtworksList from '../components/ArtworksList'
import NavBar from '../components/NavBar'
export default {
  name: 'IndexPage',
  components: {
    BaseSearch,
    ArtworksList,
    NavBar
  },
  async asyncData(ctx) {
    return {
      items: await ctx.app.$getRepository.index()
    }
  },
  data() {
    return {
      searchValue: ''
    }
  },
  methods: {
    async startSearch(value) {
      console.log(value, this.$getRepository)
      this.searchValue = value
      if (this.searchValue.length > 2) {
          this.items = await this.$getRepository.search(value)
      }
    }
  }
}
</script>
<style lang="scss">
  .main {
    display: flex;
    flex-direction: column;
  }
</style>

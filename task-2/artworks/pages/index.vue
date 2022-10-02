<template>
  <div class="main">
    <NavBar />
    <BaseSearch
      :value="searchValue"
      @onInput="startSearch"
    />
    <ArtworksList :items="items.data"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

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
      asyncItems: await ctx.app.$getRepository.index()
    }
  },
  data() {
    return {
      searchValue: '',
    }
  },
  computed: {
    ...mapGetters(['searchResult']),
    items() {
      return this.searchResult.data ? this.searchResult : this.asyncItems
    }
  },
  methods: {
    ...mapActions(['fetchSearchData']),
    startSearch(value) {
      this.searchValue = value
      if (this.searchValue.length > 2) {
        setTimeout(() => {
          this.fetchSearchData(value)
        },3000)
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

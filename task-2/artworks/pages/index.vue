<template>
  <div class="main">
    <div class="main__upside">
      <NavBar />
      <BaseSearch :value="searchValue" @onInput="debounceSearch" />
    </div>
    <div class="main__downside">
      <ArtworksList
        :items="items"
        :enough="enough"
        @fetchNewPage="continueSearch"
      />
    </div>
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
    NavBar,
  },
  async asyncData({ $axios }) {
    const preloadedResult = await $axios.$get(
      `https://api.artic.edu/api/v1/artworks/search?q=&fields=id,title,image_id,thumbnail&limit=12&page=1`
    )

    return { preloadedResult: preloadedResult.data }
  },
  data() {
    return {
      searchValue: '',
      debounceTimeout: null,
      enough: false,
      page: 1,
      size: 12,
    }
  },
  computed: {
    ...mapGetters(['searchResult']),
    items() {
      return  this.searchResult.length > 1 ? this.searchResult : this.preloadedResult
    },
  },
  methods: {
    ...mapActions(['fetchSearchData', 'fetchNewPage']),
    startSearch() {
      this.page = 1
      const params = {
        searchValue: this.searchValue,
        page: this.page,
        size: this.size,
      }
      if (this.searchValue.length > 2) {
        this.fetchSearchData(params)
      }
    },
    continueSearch() {
      this.page++
      const params = {
        searchValue: this.searchValue,
        page: this.page,
        size: this.size,
      }
      this.fetchNewPage(params)
    },
    debounceSearch(value) {
      this.searchValue = value
      if (this.debounceTimeout) clearTimeout(this.debounceTimeout)
      this.debounceTimeout = setTimeout(() => {
        this.startSearch()
      }, 1000)
    },
  },
}
</script>
<style lang="scss">
.main {
  display: flex;
  flex-direction: column;
  &__upside {
    background-color: white;
    height: 145px;
    width: 100%;
    position: fixed;
    z-index: 1;
    padding: 15px;
  }
  &__downside {
    overflow: hidden;
    position: absolute;
    top: 155px;
    margin: 15px;
  }
}
</style>

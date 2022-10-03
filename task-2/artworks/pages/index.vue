<template>
  <div class="main">
    <div class="main__upside">
      <NavBar />
      <BaseSearch
        :value="searchValue"
        @onInput="startSearch"
      />
    </div>
    <div class="main__downside">
      <ArtworksList :items="items.data"/>
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
      //width: 100%;
      margin: 15px;
    }
  }
</style>

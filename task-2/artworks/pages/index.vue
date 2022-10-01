<template>
  <div class="main">
    <BaseSearch />
    <ArtworksList :items="items"/>
  </div>
</template>

<script>
import BaseSearch from '../components/BaseSearch'
import ArtworksList from '../components/ArtworksList'
export default {
  name: 'IndexPage',
  components: {
    BaseSearch,
    ArtworksList
  },
  async asyncData(ctx) {
    return {
      items: await ctx.app.$getRepository.index()
    }
  },
  data() {
    return {
      items: []
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

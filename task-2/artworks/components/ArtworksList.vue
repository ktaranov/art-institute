<template>
  <div>
    <ul class="artworks-list">
      <li v-for="item in items.data" :key="item.id" class="artworks-list__item" >
        <ArtWorksItem  :item="item"/>
      </li>
    </ul>
  </div>
</template>

<script>
import ArtWorksItem from './ArtWorksItem'
export default {
  name: 'ArtworksList',
  components: {
    ArtWorksItem
  },
  props: {
    items: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
<style lang="scss">
.artworks-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  &__item {
    margin-bottom: 5px;
  }
}

</style>

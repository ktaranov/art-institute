<template>
  <div>
    <ul class="artworks-list">
      <li v-for="item in items" :key="item.id" class="artworks-list__item" :class="{'artworks-list__item--hidden': !item.image_id}" >
        <ArtWorksItem :item="item" />
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
      type: Array,
      default: () => []
    }
  }
}
</script>
<style lang="scss">
.artworks-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  &__item {
    width: 45vw;
    margin-bottom: 12px;
    &--hidden {
      display: none;
    }
  }
}

</style>

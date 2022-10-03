<template>
  <div>
    <ul class="artworks-list">
      <li
        v-for="item in items"
        :key="item.id"
        class="artworks-list__item"
        :class="{ 'artworks-list__item--hidden': !item.image_id }"
      >
        <ArtWorksItem :item="item" />
      </li>
      <client-only>
        <infinite-scroll @load-more="fetchNewPage()"></infinite-scroll>
      </client-only>
    </ul>
  </div>
</template>

<script>

import ArtWorksItem from './ArtWorksItem'
import InfiniteScroll from "@/node_modules/@aligilan/infinitescroll/components/lib/InfiniteScroll";
export default {
  name: 'ArtworksList',
  components: {
    ArtWorksItem,
    InfiniteScroll
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    enough: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    fetchNewPage() {
      this.$emit('fetchNewPage')
    },
  },
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
  .sr-only {
    color: white
  }
</style>

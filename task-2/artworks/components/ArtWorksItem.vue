<template>
  <div>
    <div class="item-image">
      <img
        :src="`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`"
        alt=""
      />
    </div>
    <p class="artworks-list__item-title">
      {{ item.title }},
      {{ item.artist_title }}
    </p>
  </div>
</template>

<script>
export default {
  name: "ArtWorksItem",
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss">
    .item-image {
      margin-bottom: 5px;
    }
</style>

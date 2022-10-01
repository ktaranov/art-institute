<template>
  <div class="item-wrapper">
<!--    TODO: check if lazy-load works -->
    <div class="item-image">
      <img
        v-lazy-load
        :src="`https://www.artic.edu/iiif/2/${item.image_id}/full/200,/0/default.jpg`"
        :alt="`${item.title} ${item.artist_title ? item.artist_title : ''}`"
      />
    </div>
    <p class="item-title">
      {{ item.title }}
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
  .item-wrapper {
    .item-image {
      position: relative;
      width: 44vw;
      height: calc(44vw / 1.33);
      overflow: hidden;
      margin-bottom: 5px;
      img {
        position: absolute;
        left: 50%;
        top: 50%;
        min-height: auto;
        min-width: 100%;
        transform: translate(-50%,-50%);
        color: #FF473A;
      }
    }
    .item-title {
      font-family: Montserrat, Arial, Helvetica, sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      color: #FF473A;
    }
  }
</style>

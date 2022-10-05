<template>
  <div class="item-wrapper">
    <div class="item-image">
<!--     would be good to use a placeholder image here,
it should be loaded as base64 preview image, it will improve UX for users with slow network.
in api documentation you could find it https://api.artic.edu/api/v1/swagger.json

"lqip": {
"description": "Low-quality image placeholder (LQIP). Currently a 5x5-constrained, base64-encoded GIF."
},s-->
      <img
        v-lazy-load
        :src="address"
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
  name: 'ArtWorksItem',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    address() {
      return `${this.$constants.API_PIC_BASE_URL}${this.item.image_id}/full/200,/0/default.jpg`
    },
  },
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
      transform: translate(-50%, -50%);
      color: #ff473a;
    }
  }
  .item-title {
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #ff473a;
  }
}
</style>

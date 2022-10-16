<template>
  <div class="item-wrapper">
    <div class="item-image">
      <img
        :src="src ? src : lqip"
        :data-src="address"
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
  data() {
    return {
      src: null
    }
  },
  computed: {
    address() {
      return `${this.$constants.API_PIC_BASE_URL}${this.item.image_id}/full/200,/0/default.jpg`
    },
    lqip() {
      return this.item.thumbnail ? this.item.thumbnail.lqip : '';
    }
  },
  mounted () {
    window.addEventListener("load", this.setDownloadedPic);
    window.addEventListener("scroll", this.setDownloadedPic);
  },
  destroyed () {
    window.removeEventListener('load', this.setDownloadedPic)
    window.addEventListener("scroll", this.setDownloadedPic);
  },
  methods: {
    setDownloadedPic() {
      this.src = this.address
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

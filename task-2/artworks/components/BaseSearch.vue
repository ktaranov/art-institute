<template>
  <div class="search">
    <input
      type="search"
      placeholder="Search for artworks"
      :value="value"
      @input="startSearch($event)"
    />
    <img
      class="search__icon"
      :class="{ 'search__icon--hidden': !isIcon }"
      src="../static/search.svg"
      alt="Search for artworks"
    />
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isIcon: true,
    }
  },
  watch: {
    value(newValue) {
      if (!newValue.length) {
        this.isIcon = true
        this.clearSearch()
      }
    },
  },
  methods: {
    ...mapMutations(['SET_ITEMS']),
    clearSearch() {
      this.SET_ITEMS([])
    },
    startSearch(e) {
      this.isIcon = false
      this.$emit('onInput', e.target.value)
    },
  },
}
</script>
<style lang="scss">
.search {
  position: relative;
  margin-bottom: 20px;
  &__icon {
    position: absolute;
    right: 15px;
    top: 15px;
    width: 16px;
    height: 24px;
    &--hidden {
      display: none;
    }
  }
  input {
    border: 2px solid #ff473a;
    padding: 14px 10px;
    font-size: 18px;
    line-height: 1;
    color: #ff473a;
    width: 100%;
    &::placeholder {
      font-size: 18px;
      line-height: 1;
      font-weight: 400;
      color: #ff473a;
    }
  }
}
</style>

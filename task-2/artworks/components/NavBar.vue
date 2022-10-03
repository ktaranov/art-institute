<template>
  <div class="nav-bar">
    <div class="nav-bar__logo"></div>
    <h1 class="nav-bar__title">Artworks</h1>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style lang="scss">
.nav-bar {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  background: white;
  z-index: 1;
  &__title {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #ff473a;
    margin-left: auto;
    margin-right: auto;
    padding-right: 40px;
  }
  &__logo {
    background-image: url('../static/logo.svg');
    width: 55px;
    height: 41px;
    background-size: contain;
    background-repeat: no-repeat;
  }
}
</style>

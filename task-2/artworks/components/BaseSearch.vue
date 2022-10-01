<template>
  <div class="search">
    <input type="search" placeholder="Search for artworks"/>
    <img src="../static/search.svg" alt="Search for artworks"/>
  </div>
</template>

<style lang="scss">
 .search {
  position: relative;
  margin-bottom: 20px;
  svg {
    position: absolute;
    right: 15px;
    top: 15px;
  }
  img {
    position: absolute;
    right: 15px;
    top: 15px;
    width: 16px;
    height: 24px;
  }
  input {
    border: 2px solid #FF473A;
    width: 100%;
    padding: 14px 10px;
    font-size: 18px;
    line-height: 1;
    color: #FF473A;
    ::placeholder {
      font-size: 18px;
      line-height: 1;
      color: #FF473A;
    }
  }
}

</style>

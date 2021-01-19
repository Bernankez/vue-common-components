<template>
  <div id="app">
    <div class="app_title">{{this.$route.meta.title}}</div>
    <keep-alive :include="cachedViews">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
  export default {
    computed: {
      cachedViews() {
        return this.$store.state.setting.cachedViews;
      },
    },
  };
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .app_title {
    padding: 20px 0 20px 10px;
    box-sizing: border-box;
    background-color: #f9f9f9;
  }
</style>

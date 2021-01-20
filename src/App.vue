<template>
  <div id="app">
    <div class="app_title">
      {{this.$route.meta.title}}
      <el-button v-if="$route.path !== '/'" @click="onBack">返回</el-button>
    </div>
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
    methods: {
      onBack() {
        this.$router.go(-1);
      },
    },
  };
</script>

<style lang="scss">
  body {
    margin: 0;
    display: block;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .app_title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    color: #333;
    background-color: #f9f9f9;
  }

  @media (prefers-color-scheme: dark) {
    body {
      color: #fff;
      background-color: #232325;
    }

    .app_title {
      color: #fff;
      background-color: #39393d;
    }
  }
</style>

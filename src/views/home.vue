<template>
  <div class="home">
    <div class="home_content">
      <router-link to="/examples/topBar">
        <el-button>topBar</el-button>
      </router-link>
      <router-link to="/examples/switcher">
        <el-button>switcher</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "home",
    components: {},
    data() {
      return {};
    },
    computed: {},
  };
</script>

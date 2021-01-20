<template>
  <div class="home">
    <div class="home_content">
      <router-link to="/examples/topBar">
        <ul>topBar</ul>
      </router-link>
      <router-link to="/examples/switcher">
        <ul>switcher</ul>
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

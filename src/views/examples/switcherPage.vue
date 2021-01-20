<template>
  <div class="page">
    <switcher></switcher>
  </div>
</template>

<script>
  import switcher from "@/components/switcher/switcher";

  export default {
    name: "switcherPage",
    components: { switcher },
  };
</script>

<style lang="scss" scoped>
  .page {
    padding: 20px;
    box-sizing: border-box;
    background-color: #fff;
  }
</style>
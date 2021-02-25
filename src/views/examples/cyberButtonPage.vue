<template>
  <div class="page">
    <cyber-button text="AVAILABLE NOW"></cyber-button>
  </div>
</template>

<script>
  import cyberButton from "@/components/cyber-button/cyber-button";

  export default {
    name: "cyberButtonPage",
    components: { cyberButton },
    data() {
      return {};
    },
  };
</script>

<style lang="scss" scoped>
  .page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
</style>
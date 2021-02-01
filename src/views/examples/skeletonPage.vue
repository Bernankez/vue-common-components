<template>
  <vcc-skeleton></vcc-skeleton>
</template>

<script>
  import skeleton from "@/components/skeleton/skeleton";

  export default {
    name: "skeletonPage",
    components: { "vcc-skeleton": skeleton },
    data() {
      return {};
    },
  };
</script>

<style lang="scss" scoped>
</style>
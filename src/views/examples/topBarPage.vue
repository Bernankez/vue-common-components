<template>
  <div>
    <top-bar title="测试标题" @onLeft="$router.go(-1)"></top-bar>
  </div>
</template>

<script>
  import topBar from "@/components/top-bar/top-bar";

  export default {
    name: "topBarPage",
    components: { topBar },
  };
</script>

<style lang="scss" scoped></style>
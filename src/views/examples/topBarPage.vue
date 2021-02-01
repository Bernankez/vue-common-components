<template>
  <div>
    <vcc-top-bar title="测试标题" :isBarShow="isBarShow" :animation="animation" @onLeft="$router.go(-1)"></vcc-top-bar>
  </div>
</template>

<script>
  import topBar from "@/components/top-bar/top-bar";

  export default {
    name: "topBarPage",
    components: { 'vcc-top-bar': topBar },
    data() {
      return {
        isBarShow: true,
        animation: true,
      };
    },
  };
</script>

<style lang="scss" scoped></style>
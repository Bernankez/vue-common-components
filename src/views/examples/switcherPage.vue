<template>
  <div class="page">
    <vcc-switcher v-model="checked" trueValue="1" falseValue="0" :disabled="false"></vcc-switcher>
  </div>
</template>

<script>
  import switcher from "@/components/switcher/switcher";

  export default {
    name: "switcherPage",
    components: { 'vcc-switcher': switcher },
    data() {
      return {
        checked: "1",
      };
    },
  };
</script>

<style lang="scss" scoped>
  .page {
    padding: 20px;
    box-sizing: border-box;
    background-color: #fff;
  }
</style>
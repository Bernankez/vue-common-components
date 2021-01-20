<template>
  <div class="__vcc-top-bar"
    :style="`--bar-bkg: ${barBackColor}; --bar-height: ${barHeight}; --z-index: ${zIndex}; --color: ${fontColor}; --font-size: ${fontSize};`">
    <span class="__vcc-top-bar-left" @click.stop="onLeft">
      <slot name="bar-left">
        <span v-if="isBackShow" class="__vcc-top-bar-arrow"></span>
      </slot>
    </span>
    <span class="__vcc-top-bar-middle" @click.stop="onMiddle">
      <slot name="bar-middle">{{title}}</slot>
    </span>
    <span class="__vcc-top-bar-right" @click.stop="onRight">
      <slot name="bar-right">
        <img v-if="image" class="__vcc-top-bar-img" :src="image" />
      </slot>
    </span>
  </div>
</template>

<script>
  export default {
    name: "topBar",
    components: {},
    props: {
      title: {
        type: String,
        default: "",
      },
      image: {
        type: Object,
        default: null,
      },
      isBackShow: {
        type: Boolean,
        default: true,
      },
      barBackColor: {
        type: String,
        default: "#fff",
      },
      barHeight: {
        type: String,
        default: "45px",
      },
      zIndex: {
        type: String,
        default: "999",
      },
      fontColor: {
        type: String,
        default: "#333",
      },
      fontSize: {
        type: String,
        default: "21px",
      },
    },
    data() {
      return {};
    },
    methods: {
      onLeft() {
        this.$emit("onLeft");
      },
      onMiddle() {
        this.$emit("onMiddle");
      },
      onRight() {
        this.$emit("onRight");
      },
    },
  };
</script>

<style lang="scss" scoped>
  .__vcc-top-bar {
    --bar-bkg: #fff;
    --bar-height: 45px;
    --z-index: 999;
    --color: #333;
    --font-size: 21px;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: var(--z-index);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: var(--bar-height);
    font-family: PingFangSC, PingFangSC-Regular;
    font-size: var(--font-size);
    color: var(--color);
    background-color: var(--bar-bkg);

    .__vcc-top-bar-left {
      display: flex;
      justify-content: center;
      align-items: center;
      height: var(--bar-height);
      width: var(--bar-height);

      .__vcc-top-bar-arrow {
        display: inline-block;
        width: calc(var(--bar-height) * 0.3);
        height: calc(var(--bar-height) * 0.3);
        border-style: solid;
        border-color: #666;
        border-width: 2px 0 0 2px;
        transform: translateX(calc(calc(var(--bar-height) * 0.3) * 1.414 * 0.25))
          rotate(-45deg);
      }
    }

    .__vcc-top-bar-middle {
      display: flex;
      align-items: center;
      height: var(--bar-height);
    }

    .__vcc-top-bar-right {
      display: flex;
      justify-content: center;
      align-items: center;
      height: var(--bar-height);
      width: var(--bar-height);

      .__vcc-top-bar-img {
        width: calc(var(--bar-height) * 0.47);
        height: calc(var(--bar-height) * 0.47);
      }
    }
  }
</style>
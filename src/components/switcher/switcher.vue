<template>
  <div class="__vcc-switcher" :style="switcherStyle">
    <label>
      <input :class="{'__vcc-switcher-checkbox':true, '__vcc-switcher-checkbox-enable':!disabled}" type="checkbox" v-model="checkedValue"
        :disabled="disabled" :true-value="trueValue" :false-value="falseValue" />
      <span class="__vcc-switcher-bkg"></span>
    </label>
  </div>
</template>

<script>
  export default {
    name: "switcher",
    components: {},
    //改变v-model默认绑定属性、事件类型
    model: {
      prop: "value",
      event: "change",
    },
    props: {
      width: {
        type: String,
        default: "80px",
      },
      height: {
        type: String,
        default: "46px",
      },
      toggleDiameter: {
        type: String,
        default: "40px",
      },
      toggleWider: {
        type: String,
        default: "52px",
      },
      switchColorOff: {
        type: String,
        default: "#e9e9e9",
      },
      switchColorOn: {
        type: String,
        default: "#30d158",
      },
      switchColorOffDark: {
        type: String,
        default: "#39393d",
      },
      trueValue: {
        type: [Boolean, String, Number],
        default: true,
      },
      falseValue: {
        type: [Boolean, String, Number],
        default: false,
      },
      value: {
        type: [Boolean, String, Number],
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        checkedValue: this.value,
        switcherStyle: {
          "--button-width": this.width,
          "--button-height": this.height,
          "--toggle-diameter": this.toggleDiameter,
          "--toggle-wider": this.toggleWider,
          "--color-gray": this.switchColorOff,
          "--color-green": this.switchColorOn,
          "--color-dark-gray": this.switchColorOffDark,
        },
      };
    },
    watch: {
      checkedValue(newVal, oldVal) {
        this.$emit("change", newVal);
      },
      value(newVal, oldVal) {
        this.checkedValue = newVal;
      },
    },
    methods: {},
  };
</script>

<style lang="scss" scoped>
  .__vcc-switcher {
    --button-width: 500px;
    --button-height: 295px;
    --toggle-diameter: 255px;
    --button-toggle-offset: calc(
      (var(--button-height) - var(--toggle-diameter)) / 2
    );
    --toggle-shadow-offset: 10px;
    --toggle-wider: 333px;
    --color-gray: #e9e9e9;
    --color-dark-gray: #39393d;
    --color-green: #30d158;

    .__vcc-switcher-bkg {
      display: inline-block;
      width: var(--button-width);
      height: var(--button-height);
      background-color: var(--color-gray);
      border-radius: calc(var(--button-height) / 2);
      position: relative;
      transition: 0.3s all ease-in-out;
    }

    .__vcc-switcher-bkg::after {
      content: "";
      display: inline-block;
      width: var(--toggle-diameter);
      height: var(--toggle-diameter);
      background-color: #fff;
      border-radius: calc(var(--toggle-diameter) / 2);
      position: absolute;
      top: var(--button-toggle-offset);
      transform: translateX(var(--button-toggle-offset));
      box-shadow: var(--toggle-shadow-offset) 0
        calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);
      transition: 0.3s all ease-in-out;
    }

    .__vcc-switcher-checkbox:checked + span {
      background-color: var(--color-green);
    }

    .__vcc-switcher-checkbox:checked + span::after {
      transform: translateX(
        (
          calc(
            var(--button-width) - var(--toggle-diameter) -
              var(--button-toggle-offset)
          )
        )
      );
      box-shadow: calc(var(--toggle-shadow-offset * -1)) 0
        calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);
    }

    .__vcc-switcher-checkbox {
      display: none;
    }

    .__vcc-switcher-checkbox-enable:active + span::after {
      width: var(--toggle-wider);
    }

    .__vcc-switcher-checkbox-enable:checked:active + span::after {
      transform: translateX(
        calc(
          var(--button-width) - var(--toggle-wider) - var(--button-toggle-offset)
        )
      );
    }
  }

  @media (prefers-color-scheme: dark) {
    .__vcc-switcher .__vcc-switcher-bkg {
      background-color: var(--color-dark-gray);
    }
  }
</style>
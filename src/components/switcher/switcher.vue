<template>
  <div class="__vcc-switcher"
    :style="`--button-width: ${width}; --button-height: ${height}; --toggle-diameter: ${toggleDiameter}; --toggle-wider: ${toggleWider}; --color-gray: ${switchColorOff}; --color-green: ${switchColorOn}; --color-dark-gray: ${switchColorOffDark}`">
    <label>
      <input type="checkbox" />
      <span class="__vcc-switcher-bkg"></span>
    </label>
  </div>
</template>

<script>
  export default {
    name: "switcher",
    components: {},
    props: {
      width: {
        type: String,
        default: "80px",
      },
      height: {
        type: String,
        default: "47px",
      },
      toggleDiameter: {
        type: String,
        default: "41px",
      },
      toggleWider: {
        type: String,
        default: "53px",
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
    },
    data() {
      return {};
    },
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

    input[type="checkbox"]:checked + span {
      background-color: var(--color-green);
    }

    input[type="checkbox"]:checked + span::after {
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

    input[type="checkbox"] {
      display: none;
    }

    input[type="checkbox"]:active + span::after {
      width: var(--toggle-wider);
    }

    input[type="checkbox"]:checked:active + span::after {
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
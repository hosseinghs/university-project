<template>
  <div id="clock">
    <div v-for="i in 12" :key="i">
      <div :class="`num ${'num' + i}`">
        <div>{{ i }}</div>
      </div>
    </div>
    <div id="sec" ref="sec" class="hand">
      <div class="sec"></div>
    </div>
    <div id="min" ref="min" class="hand">
      <div class="min"></div>
    </div>
    <div id="hour" ref="hour" class="hand">
      <div class="hour"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClockComponent',
  mounted() {
    if (this.$refs.sec && this.$refs.min && this.$refs.hour)
      setInterval(() => {
        this.updateClock();
      }, 1000);
  },
  methods: {
    updateClock() {
      const date = new Date();
      const sec = date.getSeconds() / 60;
      const min = date.getMinutes() / 60;
      const hour = date.getHours() / 12;
      const secDiv = this.$refs.sec;
      const minDiv = this.$refs.min;
      const hourDiv = this.$refs.hour;
      secDiv.style.transform = `rotate(${sec * 360}deg)`;
      minDiv.style.transform = `rotate(${min * 360}deg)`;
      hourDiv.style.transform = `rotate(${hour * 360}deg)`;
    },
  },
};
</script>

<style lang="scss">
#clock {
  position: relative;
  overflow: hidden;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  border: 2px solid #111;
  background-color: #fff;
  .num {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    text-align: center;
    font-size: 11px;
    font-weight: 500;
    padding: 1px;
  }
  .num:after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 2px;
    background-color: #000;
  }
  .num1 {
    transform: rotate(30deg);
    div {
      transform: rotate(-30deg);
    }
  }
  .num2 {
    transform: rotate(60deg);
    div {
      transform: rotate(-60deg);
    }
  }
  .num3 {
    transform: rotate(90deg);
    div {
      transform: rotate(-90deg);
    }
  }
  .num4 {
    transform: rotate(120deg);
    div {
      transform: rotate(-120deg);
    }
  }
  .num5 {
    transform: rotate(150deg);
    div {
      transform: rotate(-150deg);
    }
  }
  .num6 {
    transform: rotate(180deg);
    div {
      transform: rotate(-180deg);
    }
  }
  .num7 {
    transform: rotate(210deg);
    div {
      transform: rotate(-210deg);
    }
  }
  .num8 {
    transform: rotate(240deg);
    div {
      transform: rotate(-240deg);
    }
  }
  .num9 {
    transform: rotate(270deg);
    div {
      transform: rotate(-270deg);
    }
  }
  .num10 {
    transform: rotate(300deg);
    div {
      transform: rotate(-300deg);
    }
  }
  .num11 {
    transform: rotate(330deg);
    div {
      transform: rotate(-330deg);
    }
  }
  .num12 {
    transform: rotate(360deg);
    div {
      transform: rotate(-360deg);
    }
  }
  .hand {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    div {
      position: absolute;
      bottom: 50%;
      left: 50%;
      transform: translateX(-50%);
      background-color: #000;
    }
  }
  .sec {
    width: 1px;
    height: 40%;
  }
  .min {
    width: 2px;
    height: 28%;
    border-radius: 2px;
  }
  .hour {
    width: 3px;
    height: 21%;
    border-radius: 4px;
  }
}
#clock:before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  background-color: #000;
  border-radius: 50%;
}
#clock:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(
    285deg,
    rgba(0, 0, 0, 0.175) 50%,
    rgba(0, 0, 0, 0.1) 50%
  );
}
</style>

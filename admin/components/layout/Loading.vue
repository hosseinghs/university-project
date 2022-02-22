<template>
  <v-dialog
    v-model="isLoading"
    persistent
    overlay-opacity="0.9"
    width="300"
    content-class="elevation-0"
  >
    <div class="stage">
      <div class="dot-spin"></div>
    </div>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    color: {
      type: String,
      default: '#fff',
    },
  },
  computed: {
    ...mapGetters(['isLoading']),
    cssVars() {
      return {
        '--color': this.color,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.dot-spin {
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: transparent;
  color: transparent;
  box-shadow: 0 -18px 0 0 #9880ff, 12.72984px -12.72984px 0 0 #9880ff,
    18px 0 0 0 #9880ff, 12.72984px 12.72984px 0 0 rgba(152, 128, 255, 0),
    0 18px 0 0 rgba(152, 128, 255, 0),
    -12.72984px 12.72984px 0 0 rgba(152, 128, 255, 0),
    -18px 0 0 0 rgba(152, 128, 255, 0),
    -12.72984px -12.72984px 0 0 rgba(152, 128, 255, 0);
  animation: dotSpin 1.5s infinite linear;
}
.stage {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 2rem 0;
  margin: 0 -5%;
  overflow: hidden;
}
@keyframes dotSpin {
  0%,
  100% {
    box-shadow: 0 -18px 0 0 #9880ff, 12.72984px -12.72984px 0 0 #9880ff,
      18px 0 0 0 #9880ff, 12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
      0 18px 0 -5px rgba(152, 128, 255, 0),
      -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
      -18px 0 0 -5px rgba(152, 128, 255, 0),
      -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
  }
  12.5% {
    box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
      12.72984px -12.72984px 0 0 #9880ff, 18px 0 0 0 #9880ff,
      12.72984px 12.72984px 0 0 #9880ff, 0 18px 0 -5px rgba(152, 128, 255, 0),
      -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
      -18px 0 0 -5px rgba(152, 128, 255, 0),
      -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
  }
  25% {
    box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
      12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 0 #9880ff,
      12.72984px 12.72984px 0 0 #9880ff, 0 18px 0 0 #9880ff,
      -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
      -18px 0 0 -5px rgba(152, 128, 255, 0),
      -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
  }
  37.5% {
    box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
      12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0),
      18px 0 0 -5px rgba(152, 128, 255, 0), 12.72984px 12.72984px 0 0 #9880ff,
      0 18px 0 0 #9880ff, -12.72984px 12.72984px 0 0 #9880ff,
      -18px 0 0 -5px rgba(152, 128, 255, 0),
      -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
  }
  50% {
    box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
      12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0),
      18px 0 0 -5px rgba(152, 128, 255, 0),
      12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 0 #9880ff,
      -12.72984px 12.72984px 0 0 #9880ff, -18px 0 0 0 #9880ff,
      -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
  }
  62.5% {
    box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
      12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0),
      18px 0 0 -5px rgba(152, 128, 255, 0),
      12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
      0 18px 0 -5px rgba(152, 128, 255, 0), -12.72984px 12.72984px 0 0 #9880ff,
      -18px 0 0 0 #9880ff, -12.72984px -12.72984px 0 0 #9880ff;
  }
  75% {
    box-shadow: 0 -18px 0 0 #9880ff,
      12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0),
      18px 0 0 -5px rgba(152, 128, 255, 0),
      12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
      0 18px 0 -5px rgba(152, 128, 255, 0),
      -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 0 #9880ff,
      -12.72984px -12.72984px 0 0 #9880ff;
  }
  87.5% {
    box-shadow: 0 -18px 0 0 #9880ff, 12.72984px -12.72984px 0 0 #9880ff,
      18px 0 0 -5px rgba(152, 128, 255, 0),
      12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
      0 18px 0 -5px rgba(152, 128, 255, 0),
      -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
      -18px 0 0 -5px rgba(152, 128, 255, 0), -12.72984px -12.72984px 0 0 #9880ff;
  }
}
</style>

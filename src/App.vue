<template>
  <div class="h-screen flex flex-col justify-center items-center space-y-10">
    <Counter />
    <CounterSquared />
    <Buttons />
    <ColorCode />
  </div>
</template>

<script>
import { computed, ref } from "vue";
import Counter from "./components/Counter.vue";
import CounterSquared from "./components/CounterSquared.vue";
import Buttons from "./components/Buttons.vue";
import ColorCode from "./components/ColorCode.vue";

export default {
  setup() {
    // let counter = ref(0)

    // function increaseCounter(){
    //   this.counter++
    // }

    // function decreaseCounter(){
    //   this.counter--
    // }

    // const colorCode = computed(() => {
    //   get(){

    //   },
    //   set(){

    //   }
    // })

    return {
      // counter,
      // increaseCounter,
      // decreaseCounter
    };
  },
  components: {
    Counter,
    CounterSquared,
    Buttons,
    ColorCode,
  },
};
</script>

<style>
</style>
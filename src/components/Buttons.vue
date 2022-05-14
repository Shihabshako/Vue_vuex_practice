<template>
   <div class="flex items-center justify-center space-x-4">
      <button
        @click="$store.commit('decreaseCounter')"
        class="p-1 px-6 font-bold text-white rounded-md bg-red-500 text-lg"
      >
        -
      </button>
      <button
        @click="$store.dispatch('increaseCounter')"
        class="p-1 px-6 font-bold text-white rounded-md bg-green-500 text-lg"
      >
        +
      </button>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
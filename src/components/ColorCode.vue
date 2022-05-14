<template>
  <div>
      <input
        v-model="colorCode"
        class="w-50 p-2 border-solid border-2 border-green-500"
        type="text"
        placeholder="Color Code"
      />
    </div>
</template>

<script>
export default {
computed: {
    colorCode: {
      get() {
        return this.$store.state.colorCode;
      },
      set(newValue) {
        this.$store.dispatch("setColorCode", newValue);
      },
    },
  },
}
</script>

<style>

</style>
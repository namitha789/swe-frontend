<script>
export default {
  methods: {
    goToPollution() {
      this.$router.push('/pollution')
    },
  },
}
</script>

<template>
  <h2>HomeView</h2>
  <button @click="goToPollution">Go to Pollution</button>
</template>
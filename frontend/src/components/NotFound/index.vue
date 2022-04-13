<script>
export default {
  name: 'not-found',
}
</script>

<template lang="pug">
.not-found-wrapper
  .linkedout-logo
    img(src="../../assets/image/new-linkedout-logo.svg", alt="Linkedout Logo")
</template>

<style lang="scss" scoped>
.not-found-wrapper {
  min-height: 100vh;
  max-width: 1140px;
  margin: 0 auto;
  display: grid;
  // grid-template-columns: 1fr;
  // grid-template-rows: 1fr 2.5fr 7fr;

  .linkedout-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
    img {
      max-width: 700px;
      height: auto;
    }
  }
}
</style>

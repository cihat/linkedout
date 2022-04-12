<script>
import Header from './components/Header/index.vue'
export default {
  name: 'app',
  components: {
    Header,
  },
}
</script>

<template lang="pug">
#app
  .layout
    Header
    router-view
</template>

<style lang="scss">
@import '@/assets/theme.scss';
.layout {
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
}
</style>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'app',
  computed: {
    ...mapGetters('account', ['isLoggedIn']),
    selectedKeys() {
      return [this.$route.name]
    },
    layout() {
      return `${this.$route.meta.layout || 'feed'}-layout`
    },
  },
  async created() {
    await this.init()
    !this.isLoggedIn ? this.$router.push({ path: '/login' }) : this.$router.push({ path: '/' })
  },
  methods: {
    ...mapActions('account', ['init']),
  },
}
</script>

<template lang="pug">
#app
  .layout-wrapper
    component(:is='layout' :selectedKeys="selectedKeys")
</template>

<style lang="scss">
@import '@/assets/theme.scss';
</style>

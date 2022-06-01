<script>
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import { mapGetters } from 'vuex'
import Icon from '../components/Icon'

export default {
  name: 'auth-layout',
  components: {
    Login,
    Register,
    Icon,
  },
  computed: {
    ...mapGetters('account', ['isLoggedIn']),
  },
}
</script>

<template lang="pug">
.container
  .grid.col.col-12.col-xs-12.col-md-12.col-lg-12.col-xl-12
    .auth-layout
      .header-wrapper
        .github-link
          a(href="https://github.com/cihat/linkedout" target='_blank')
            icon(icon='github' :size="40" color="#000")
      .linkedout-logo
        img(src="../assets/image/new-linkedout-logo.svg", alt="Linkedout Logo")
      router-view
</template>

<style lang="scss" scoped>
.auth-layout {
  min-height: 100vh;
  // max-width: 1140px;
  margin: 0 auto;
  display: grid;
  // grid-template-columns: 1fr;
  grid-template-rows: 1fr 2.5fr 7fr;

  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-height: 100px;
    width: 100%;
  }

  .linkedout-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
    img {
      max-width: 1000px;
      width: 100%;
      height: auto;
    }
  }
}
</style>

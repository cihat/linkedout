<template lang="pug">
.container
  .grid.grid-center.col.col-12
    .wrapper
      form(@submit='submitLogin')
        .form-item
          input(type="text", placeholder="E-mail address" name="email" value="email" v-model="email")
        .form-item
          input(type="password", placeholder="Password" name="password" value="password" v-model="password")
        .form-item
          p.backend-errors(v-if="backendError") {{backendError?.message}}
        .form-item
          button(type="primary", html-type="submit", block) Login
        p(v-if="loading") Loading...
        .form-item
          p I do not have an account.
            router-link(to="/register") 
              b Register
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'login',
  data() {
    return {
      backendError: null,
      loading: false,
      email: '',
      password: '',
    }
  },
  methods: {
    ...mapActions('account', ['login']),
    async submitLogin(e) {
      e.preventDefault()
      this.backendError = null
      this.loading = true
      try {
        await this.login({
          email: this.email,
          password: this.password,
        })
        this.$router.push('/')
      } catch (e) {
        this.backendError = e.response.data
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 400px;
  margin: 0 auto;
  text-align: center;
  display: flex;

  form {
    width: 100%;

    .form-item {
      margin-bottom: 20px;
    }
    input {
      width: 100%;
      padding: 12px;
      border-radius: 4px;
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    }

    .backend-errors {
      color: red;
      font-size: 14px;
      margin-top: 10px;
      font-weight: bold;
    }

    button {
      background-color: rgba(56, 98, 182);
      padding: 14px 24px;
      border-radius: 10px;
      color: #fff;
      font-size: 18px;
      font-weight: bold;
      border: none;
      cursor: pointer;
      transition: 1s all ease;
    }
  }
}
</style>

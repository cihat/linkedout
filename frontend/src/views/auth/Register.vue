<template lang="pug">
.wrapper
  form(@submit='register')
    .form-item
      input(type="text", placeholder="Full Name" name="name" value="name" v-model="name")
    .form-item
      input(type="text", placeholder="User Name" name="username" value="username" v-model="username")
    .form-item
      input(type="text", placeholder="E-mail address" name="email" value="email" v-model="email")
    .form-item
      input(type="password", placeholder="Password" name="password" value="password" v-model="password")
    .form-item
      input(type="password", placeholder="Password confirmation" name="passwordConfirmation" value="passwordConfirmation" v-model="passwordConfirmation")
    .form-item
      p.backend-errors(v-if="backendError") {{backendError?.message}}
    .form-item
      button(type="primary", html-type="submit", block) Register
    p(v-if="loading") Loading...
    .form-item
      p I have an account
        router-link(to="/login") 
          b Login
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
      name: '',
      username: '',
      passwordConfirmation: '',
    }
  },
  methods: {
    ...mapActions('account', ['registerUser']),
    async submitLogin(e) {
      e.preventDefault()
      this.backendError = null
      this.loading = true
      try {
        await this.registerUser({
          email: this.email,
          password: this.password,
          name: this.name,
          username: this.username,
          passwordConfirmation: this.passwordConfirmation,
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
    }
  }
}
</style>

<template lang="pug">
.wrapper
  form(@submit='register')
    .form-item
      input(type="text", placeholder="Full Name" name="name" v-model="name")
    .form-item
      input(type="text", placeholder="E-mail address" name="email" v-model="email")
    .form-item
      input(type="password", placeholder="Password" name="password" v-model="password")
    .form-item
      input(type="password", placeholder="Password confirmation" name="passwordConfirmation" v-model="passwordConfirmation")
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
      passwordConfirmation: '',
    }
  },
  methods: {
    ...mapActions('account', ['registerUser']),
    async register(e) {
      e.preventDefault()
      this.backendError = null
      this.loading = true
      try {
        await this.registerUser({
          name: this.name,
          email: this.email,
          password: this.password,
          passwordConfirmation: this.passwordConfirmation,
        })
        this.$router.push('/login')
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

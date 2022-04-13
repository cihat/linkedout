<template lang="pug">
.login
  a-row(type="flex" justify="center" align="middle")
    a-col(:span="7")
      a-card
        a-form(:form="form" @submit="submitLogin")
          a-divider Login
          a-form-item(v-if="$route.query.registerSuccess")
            a-alert(type="success" message="You are now registered!" description="Use your credentials to log in below.")
          a-form-item(v-if="$route.query.logoutSuccess")
            a-alert(type="success" message="You have successfully logged out." description="Use your credentials to log in below.")
          a-form-item
            a-input(placeholder="E-mail address" v-decorator='validationRules.email')
          a-form-item
            a-input(type="password" placeholder="Password" v-decorator="validationRules.password")
          a-form-item(v-if="backendError")
            a-alert(class="backend-errors" :message="backendError.message" type="error")
          a-form-item
            a-button(type="primary" html-type="submit" :loading="loading" block) Login
          a-form-item
            center Don't have an account? <router-link to="/register">Create account</router-link>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'login',
  data() {
    return {
      loading: false,
      validationRules: {
        email: [
          'email',
          {
            rules: [
              { type: 'email', message: 'E-mail is not valid.' },
              { required: true, message: 'E-mail is required.' },
            ],
            normalize: value => value.toLowerCase(),
          },
        ],
        password: [
          'password',
          {
            rules: [
              { required: true, message: 'Password is required.' },
              { min: 8, message: 'Password should have a minimum length of 8 characters.\n' },
              {
                pattern: /[a-zA-Z]/,
                message: 'Password should include at least one letter.\n',
              },
              { pattern: /\d/, message: 'Password should include at least one digit.\n' },
              { pattern: /[\W_]/, message: 'Password should include at least one symbol.\n' },
              { pattern: /^\S+$/, message: 'Password should not include spaces.\n' },
              { validator: this.validateToNextPassword },
            ],
          },
        ],
      },
      backendError: null,
    }
  },
  methods: {
    ...mapActions('account', ['login']),
    submitLogin(e) {
      e.preventDefault()
      this.backendError = null
      this.form.validateFieldsAndScroll(async (err, values) => {
        if (err) return

        try {
          await this.login(values)
          this.$router.push('/dashboard')
        } catch (e) {
          this.backendError = e.response.data
        }
      })
    },
    handleConfirmBlur(e) {
      const value = e.target.value
      this.confirmPasswordDirty = this.confirmPasswordDirty || !!value
    },
    onValuesChange() {
      this.backendError = null
    },
  },
  beforeCreate() {
    const component = this
    this.form = this.$form.createForm(this, {
      name: 'login',
      onValuesChange() {
        component.backendError = null
      },
    })
  },
}
</script>

<style lang="scss">
.ant-form-explain {
  white-space: pre-line;
}
</style>

<style lang="scss" scoped>
.login .ant-row-flex {
  min-height: 90vh;
}

.ant-card {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}

.backend-errors {
  white-space: pre-line;
}
</style>

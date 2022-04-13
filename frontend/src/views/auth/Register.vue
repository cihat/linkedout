<template lang="pug">
.register
  a-row(type="flex" justify="center" align="middle")
    a-col(:span="7")
      a-card
        a-form(:form="form" @submit="register")
          a-divider Create an account
          a-form-item
            //v-decorator="validationRules.name"
            a-input(placeholder="Name" name="name" :rules="[{ required: true, message: 'Please input your name!' }]")
          a-form-item
            //v-decorator='validationRules.email'
            a-input(placeholder="E-mail address") 
          a-form-item
            // v-decorator="validationRules.password"
            a-input(type="password" placeholder="Password" )
          a-form-item
            //v-decorator="validationRules.passwordConfirmation" @blur="handleConfirmBlur"
            a-input(type="password" placeholder="Confirm password" )
          a-form-item(v-if="backendError")
            a-alert(class="backend-errors" :message="backendError.message" type="error")
          a-form-item
            a-button(type="primary" html-type="submit" :loading="loading" block) Register
          a-form-item
            center Already have an account? 
              router-link(to="/login") Log in
</template>

//
<script>
import { mapActions } from 'vuex'

export default {
  name: 'register',
  data() {
    return {
      confirmPasswordDirty: false,
      loading: false,
      validationRules: {
        name: [
          'name',
          {
            rules: [{ required: true, message: 'Your name is required.' }],
          },
        ],
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
        passwordConfirmation: [
          'passwordConfirmation',
          {
            rules: [
              { required: true, message: 'Password confirmation is required.' },
              { validator: this.compareToFirstPassword },
            ],
          },
        ],
      },
      backendError: null,
    }
  },
  methods: {
    ...mapActions('account', ['registerUser']),
    register(e) {
      e.preventDefault()
      this.loading = true
      this.backendError = null

      this.form.validateFieldsAndScroll(async (err, values) => {
        if (err) return
        try {
          await this.registerUser(values)
          this.$router.push('/login?registerSuccess=1')
        } catch (e) {
          this.backendError = e.response.data
        } finally {
          this.loading = false
        }
      })
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form
      if (value && this.confirmPasswordDirty) {
        form.validateFields(['confirmPassword'], { force: true })
      }
      callback()
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form
      if (value && value !== form.getFieldValue('password')) {
        callback('The passwords you entered are inconsistent.')
      } else {
        callback()
      }
    },
    handleConfirmBlur(e) {
      const value = e.target.value
      this.confirmPasswordDirty = this.confirmPasswordDirty || !!value
    },
    onValuesChange() {
      this.backendError = null
    },
  },
  // beforeCreate() {
  //   const component = this
  //   this.form = this.$form.createForm(this, {
  //     name: 'register',
  //     onValuesChange() {
  //       component.backendError = null
  //     },
  //   })
  // },
}
</script>

<style lang="scss">
.ant-form-explain {
  white-space: pre-line;
}
</style>

<style lang="scss" scoped>
.register .ant-row-flex {
  min-height: 90vh;
}

.ant-card {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}

.backend-errors {
  white-space: pre-line;
}
</style>

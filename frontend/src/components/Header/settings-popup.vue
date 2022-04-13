<script>
import { mapActions } from 'vuex'
import Icon from '../Icon'
export default {
  name: 'popup',
  props: {
    showPopup: {
      type: Function,
    },
    hidePopup: {
      type: Function,
    },
  },
  components: {
    Icon,
  },
  methods: {
    ...mapActions('account', ['logout']),
  },
}
</script>

<template lang="pug">
.settings-popup-container()
  ul
    li 
      router-link(to="/")
        p Home
    li 
      router-link(to="/settings")
        p Settings
    li 
      router-link(to="/profile")
        p Profile
    li 
      router-link(to="/help")
        p Help
    li
      router-link(to="/login" v-on:click="logout") 
        span Sign Out
        icon( icon='exit' :size="20" color="#5096ec")

  .close-button(v-on:click='hidePopup')
    icon( icon='arrow-up' :size="20" color="#5096ec")


</template>

<style lang="scss" scoped>
.settings-popup-container {
  display: flex;
  align-content: center;
  justify-content: space-between;
  position: absolute;
  top: 56px;
  right: 16px;
  width: 260px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  z-index: 10;

  .settings-popup {
    margin-top: 16px;
  }

  ul {
    width: 100%;
    li {
      &:hover {
        background-color: #f5f5f5;
        text-decoration: underline;
      }

      p {
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>

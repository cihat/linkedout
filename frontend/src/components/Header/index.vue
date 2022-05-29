<script>
import Icon from '../Icon/index.vue'
import SettingsPopup from './settings-popup.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  data() {
    return {
      showPopupState: false,
    }
  },
  components: {
    Icon,
    SettingsPopup,
  },
  computed: {
    ...mapGetters('account', ['user']),
  },
  methods: {
    showPopup() {
      this.showPopupState = true
    },
    hidePopup() {
      this.showPopupState = false
    },
  },
}
</script>

<template lang="pug">
header.header
  .container
    .grid.col.col-12.col-xs-12.col-md-12.col-lg-12.col-xl-12
      .inner_container
        a.logo(href='#')
          router-link(to="/")
            img(src='../../assets/image/new-linkedout-logo.svg' alt='LinkedOut Logo')
        .search
          icon( icon='camera' :size="20" color="#5096ec")
          input(type='text' placeholder='Search...')
        nav.menu
          ul
            li
              router-link(to="/")
                icon( icon='home' :size="19" color="#5096ec")
                span Home
            li
              router-link(to="/users")
                icon( icon='user' :size="19" color="#5096ec")
                span Users
            li
              router-link(to="/jobs")
                icon( icon='briefcase' :size="19" color="#5096ec")
                span Jobs
            li
              router-link(to="/messages")
                icon( icon='pencil' :size="19" color="#5096ec")
                span Messaging
            li
              router-link(to="/notifications")
                icon( icon='box' :size="19" color="#5096ec")
                span Notifications
        .user-menu(v-on:click="showPopup" v-click-outside="hidePopup")
          span.detail
            span.name {{user.name}}
            span.status.online Online
          img(src='../../assets/image/avatar.png' alt='')
          icon(icon="arrow-down" :size='14' color="#5096ec")
        .popup-container(v-if="showPopupState")
          settings-popup(:showPopup="showPopup" :hidePopup='hidePopup')  
</template>

<style lang="scss" scoped>
.header {
  background-color: #fff;
  margin-bottom: 16px;
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;

  .inner_container {
    height: 56px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin: auto;
    position: relative;

    .logo {
      img {
        width: 130px;
      }
    }

    .search {
      margin-left: 18px;
      position: relative;

      svg {
        position: absolute;
        top: 4px;
        left: 8px;
        height: 32px;
        width: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #aaa;
      }

      input {
        height: 32px;
        width: 100%;
        border-radius: 4px;
        background-color: rgba(#dedede, 0.32);
        font-size: 14px;
        padding: 0 15px 0 44px;

        &::placeholder {
          color: #aaaaaa;
        }
      }
    }

    .menu {
      margin: 0 auto;

      ul {
        display: flex;

        li {
          a {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 0 13px;
            color: #aaaaaa;

            span {
              font-size: 14px;
            }

            svg {
              font-size: 20px;
              margin-bottom: 4px;
            }

            &:hover {
              color: var(--color);
            }
          }
        }
      }
    }

    .user-menu {
      display: flex;
      align-items: center;

      .detail {
        display: flex;
        flex-direction: column;
        text-align: right;
        margin-right: 6px;

        .name {
          font-size: 12px;
          color: #17272f;
        }

        .status {
          font-size: 10px;

          &.online {
            color: #31b057;
          }

          &.offline {
            color: #b03131;
          }
        }
      }

      img {
        width: 24px;
        height: 24px;
        min-width: 24px;
        border-radius: 50%;
        object-fit: cover;
      }

      svg {
        color: #a7b4cc;
        font-size: 12px;
        margin-left: 5px;
      }
    }
  }
}
</style>

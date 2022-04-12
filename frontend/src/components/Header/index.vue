<script>
export default {
  name: 'Header',
}
</script>

<template lang="pug">
//- #nav
  //-   router-link(to="/") Home
  //-   span &nbsp;|&nbsp;
  //-   router-link(to="/about") About
header.header
  .container
    a.logo(href='#')
      img(src='../../assets/image/logo.svg' alt='')
    .search
      i.icon-search
      input(type='text' placeholder='Search...')
    nav.menu
      ul
        li.active
          a(href='#')
            i.icon-home
            span Home
        li
          a(href='#')
            i.icon-users
            span Users
        li
          a(href='#')
            i.icon-briefcase
            span Jobs
        li
          a(href='#')
            i.icon-message
            span Messages
        li
          a(href='#')
            i.icon-notification
            span Notifications
        li
          a(href='#')
            i.icon-grid
            span Applications
    .user-menu
      a(href='#')
        span.detail
          span.name Cameron Williamson
          span.status.online Online
        img(src='../../assets/image/avatar.png' alt='')
        i.icon-down-open
  
</template>

<style lang="scss" scoped>
.header {
  background-color: #fff;
  margin-bottom: 16px;
  position: sticky;
  top: 0;
  z-index: 10;

  .container {
    height: 56px;
    display: flex;
    align-items: center;
    max-width: 1140px;
    margin: auto;

    .search {
      margin-left: 18px;
      position: relative;

      i {
        position: absolute;
        top: 0;
        left: 0;
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
            align-items: center;
            justify-content: center;
            margin: 0 13px;
            color: #aaa;

            i {
              font-size: 20px;
            }

            span {
              display: none;
            }

            &:hover {
              color: var(--color);
            }
          }

          &.active {
            a {
              color: var(--color);

              i {
                margin-right: 5px;
              }

              span {
                display: block;
              }
            }
          }
        }
      }
    }

    .user-menu {
      > a {
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

        i {
          color: #a7b4cc;
          font-size: 12px;
          margin-left: 5px;
        }
      }
    }
  }
}
</style>

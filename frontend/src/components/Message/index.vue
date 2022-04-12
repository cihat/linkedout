<script>
import Icon from '../Icon'
export default {
  name: 'message',
  components: {
    Icon,
  },
}
</script>

<template lang="pug">
.message-box
  .message-header
    .img
      img(src='../../assets/image/avatar.png' alt='')
    | &#x9;&#x9;Messaging
    .actions
      a(href='#')
        icon(icon='write' :size="14" color="#fff")
      a(href='#')
        icon(icon='equalizer2' :size="14" color="#fff")
      a(href='#')
        icon(icon='arrow-up' :size="14" color="#fff")

</template>

<style lang="scss" scoped>
.message-box {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 10;
  .message-header {
    width: 288px;
    height: 46px;
    box-shadow: black 0px 4px 4px black;
    display: flex;
    align-items: center;
    background: linear-gradient(289.57deg, #006699 20.9%, #009099 111.3%);
    border-radius: 6px 6px 0 0;
    padding: 0 10px;
    font-size: 14px;
    color: #fff;
    font-weight: bold;
    .img {
      position: relative;
      &::before {
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: green;
        position: absolute;
        bottom: -2px;
        left: 72%;
        margin-left: -8px;
        border: 1px solid #fff;
      }
      &.online::before {
        background: #31b057;
      }
      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: block;
        border: 1px solid #fff;
        margin-right: 7px;
      }
    }
    .actions {
      display: flex;
      margin-left: auto;
      a {
        width: 34px;
        height: 34px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 15px;
        margin-left: 5px;
        border-radius: 50%;
        &:hover {
          background: rgba(#fff, 0.1);
        }
      }
    }
  }
}
</style>

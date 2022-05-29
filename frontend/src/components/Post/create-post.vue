<script>
import Icon from '../Icon'

export default {
  name: 'create-post',
  components: {
    Icon,
  },
}
</script>

<template lang="pug">
.create-post
    textarea(name='' placeholder='Create post..' id='' cols='30' rows='10')
    ul.actions
      li
        label
          input(type='file' accept='image/*')
          icon(icon='image1' :size="20" color="#5096ec")
          | Photo
      li
        label
          input(type='file')
          icon(icon='file-video' :size="20" color="#5096ec")-video
          | Video
      li
        a(href='#')
          icon(icon='browser' :size="20" color="#5096ec")-calendar
          | Event
      li
        a(href='#')
          icon(icon='pen' :size="20" color="#5096ec")-edit
          | Write Articles
</template>

<style scoped lang="scss">
.create-post {
  background-color: #fff;
  padding: 16px 16px 10px;
  border-radius: 6px;
  margin-bottom: 20px;
  textarea {
    width: 100%;
    resize: none;
    height: 60px;
    font-size: 14px;
    &::placeholder {
      color: #aaa;
    }
  }
  .actions {
    border-top: 1px solid #edf0f5;
    display: flex;
    padding-top: 8px;
    li {
      flex: auto;
      label {
        cursor: pointer;
        input {
          display: none;
        }
      }
      label,
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #17272f;
        font-size: 14px;
        padding: 7px 0;
        border-radius: 4px;
        &:hover {
          background: #f7f7f7;
        }
        svg {
          margin-right: 8px;
          font-size: 16px;
          &.icon-camera {
            color: #31b057;
          }
          &.icon-video {
            color: #388bf2;
            font-size: 13px;
            margin-right: 12px;
          }
          &.icon-calendar {
            color: #fc8338;
          }
          &.icon-edit {
            color: #e52a34;
          }
        }
      }
    }
  }
}
</style>

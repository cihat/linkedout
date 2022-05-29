<script>
import Icon from '../Icon'

export default {
  name: 'post',
  components: {
    Icon,
  },
}
</script>

<template lang="pug">
.post
    .post-header
      a.post-author(href='#')
        img(src='../../assets/image/avatar.png' alt='')
        .detail
          .name Brooklyn Simmons
          .job-title UI/UX Designer at Freelance
          .date 7 hour ago
      a.more(href='#')
        icon(icon='equalizer2' :size="20" color="#5096ec")-dot-3
    .post-content
      p
        | He said, Design is not just what it looks and feels like. Design is how it work
      p
        a(href='#') #stevejobs
        a(href='#') #design
        a(href='#') #apple
      p
        img(src='../../assets/image/stevejobs.png' alt='')
    .post-alt-detail
      .likes
        icon(icon='heart' :size="20" color="#5096ec")-heart
        icon(icon='point-right' :size="20" color="#5096ec")-thumbs-up
        | 172
      .comments
        | 10 Comment
    .post-actions
      a(href='#')
        icon(icon='heart' :size="20" color="#5096ec")-thumbs-up
        |  Like
      a(href='#')
        icon(icon='quotes-left' :size="20" color="#5096ec")-message
        |  Comment
      a(href='#')
        icon(icon='share' :size="20" color="#5096ec")-share
        |  Share
      a(href='#')
        icon(icon='forward' :size="20" color="#5096ec")-send
        |  Send
    .post-comment-form
      img(src='../../assets/image/avatar.png' alt='')
      .textarea
        textarea(name='' placeholder='Write comment' id='' cols='30' rows='10')
        label
          input(type='file' accept='image/*')
          icon(icon='camera' :size="20" color="#5096ec")-camera
</template>

<style lang="scss" scoped>
.post {
  background-color: #fff;
  border-radius: 6px;
  padding: 13px 16px 20px;
  margin-bottom: 20px;
  .post-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 9px;
    border-bottom: 1px solid #edf0f5;
    .post-author {
      display: flex;
      align-items: center;
      img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        margin-right: 12px;
      }
      .name {
        font-size: 14px;
        font-weight: 500;
        color: #17272f;
      }
      .date,
      .job-title {
        font-size: 10px;
        color: #aaa;
      }
      .job-title {
        padding: 2px 0;
      }
    }
    .more {
      color: #aaa;
      font-size: 18px;
      &:hover {
        color: var(--color);
      }
    }
  }
  .post-content {
    padding: 20px 0;
    p {
      font-size: 14px;
      margin-bottom: 12px;
      img {
        width: 100%;
      }
      &:last-child {
        margin-bottom: 0;
      }
      a {
        font-weight: 500;
        color: var(--color);
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .post-actions {
    display: flex;
    padding-bottom: 20px;
    a {
      font-size: 16px;
      color: #aaa;
      margin-right: 15px;
      display: flex;
      align-items: center;
      svg {
        font-size: 20px;
        margin-right: 5px;
      }
      &:hover {
        color: var(--color);
      }
    }
  }
  .post-alt-detail {
    display: flex;
    font-size: 10px;
    color: #17272f;
    align-items: center;
    padding-bottom: 14px;
    border-bottom: 1px solid #edf0f5;
    margin-bottom: 14px;
    .likes {
      display: flex;
      margin-right: 10px;
      padding-right: 10px;
      align-items: center;
      position: relative;
      &::before {
        content: '';
        width: 2px;
        height: 2px;
        border-radius: 50%;
        background: #17272f;
        position: absolute;
        top: 50%;
        right: -1px;
        margin-top: -1px;
      }
    }
    svg {
      font-size: 14px;
      margin-right: 10px;
      position: relative;
      z-index: 1;
      &::after {
        content: '';
        width: 11px;
        height: 11px;
        border-radius: 50%;
        position: absolute;
        top: 2px;
        left: 2px;
        z-index: -1;
      }
      &.icon-heart {
        color: #e52a34;
        &::after {
          background: rgba(#e52a34, 0.32);
        }
      }
      &.icon-thumbs-up {
        color: #388bf2;
        &::after {
          background: rgba(#388bf2, 0.32);
        }
      }
    }
  }
  .post-comment-form {
    display: flex;
    align-items: center;
    img {
      min-width: 32px;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin-right: 12px;
    }
    .textarea {
      flex: 1;
      border: 1px solid #edf0f5;
      border-radius: 6px;
      display: flex;
      align-items: center;
      padding: 8px;
      textarea {
        background: transparent;
        width: 100%;
        flex: 1;
        padding: 8px;
        resize: none;
        height: 36px;
        font-size: 14px;
        &::placeholder {
          color: #dedede;
        }
      }
      label {
        cursor: pointer;
        border-left: 1px solid #edf0f5;
        padding-left: 16px;
        font-size: 18px;
        color: #a7b4cc;
        padding-right: 5px;
        &:hover {
          color: var(--color);
        }
        input {
          display: none;
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: 'feed',
}
</script>

<template lang="pug">
.content
  .create-post
    textarea(name='' placeholder='Create post..' id='' cols='30' rows='10')
    ul.actions
      li
        label
          input(type='file' accept='image/*')
          i.icon-camera
          | &#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;Photo
      li
        label
          input(type='file')
          i.icon-video
          | &#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;Video
      li
        a(href='#')
          i.icon-calendar
          | &#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;Event
      li
        a(href='#')
          i.icon-edit
          | &#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;Write Articles
  .filter-box
    h6 Filter post by :
    label.selectbox
      select(name='' id='')
        option(value='') Popular
        option(value='') Popular
        option(value='') Popular
      i.icon-down-open
  .post
    .post-header
      a.post-author(href='#')
        img(src='../../assets/image/avatar.png' alt='')
        .detail
          .name Brooklyn Simmons
          .job-title UI/UX Designer at Freelance
          .date 7 hour ago
      a.more(href='#')
        i.icon-dot-3
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
        i.icon-heart
        i.icon-thumbs-up
        | &#x9;&#x9;&#x9;&#x9;&#x9;&#x9;172
      .comments
        | 10 Comment
    .post-actions
      a(href='#')
        i.icon-thumbs-up
        |  Like
      a(href='#')
        i.icon-message
        |  Comment
      a(href='#')
        i.icon-share
        |  Share
      a(href='#')
        i.icon-send
        |  Send
    .post-comment-form
      img(src='../../assets/image/avatar.png' alt='')
      .textarea
        textarea(name='' placeholder='Write comment' id='' cols='30' rows='10')
        label
          input(type='file' accept='image/*')
          i.icon-camera
  .post
    .post-header
      a.post-author(href='#')
        img(src='../../assets/image/avatar.png' alt='')
        .detail
          .name Brooklyn Simmons
          .job-title UI/UX Designer at Freelance
          .date 7 hour ago
      a.more(href='#')
        i.icon-dot-3
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
        i.icon-heart
        i.icon-thumbs-up
        | &#x9;&#x9;&#x9;&#x9;&#x9;&#x9;172
      .comments
        | 10 Comment
    .post-actions
      a(href='#')
        i.icon-thumbs-up
        |  Like
      a(href='#')
        i.icon-message
        |  Comment
      a(href='#')
        i.icon-share
        |  Share
      a(href='#')
        i.icon-send
        |  Send
    .post-comment-form
      img(src='../../assets/image/avatar.png' alt='')
      .textarea
        textarea(name='' placeholder='Write comment' id='' cols='30' rows='10')
        label
          input(type='file' accept='image/*')
          i.icon-camera
  .post
    .post-header
      a.post-author(href='#')
        img(src='../../assets/image/avatar.png' alt='')
        .detail
          .name Brooklyn Simmons
          .job-title UI/UX Designer at Freelance
          .date 7 hour ago
      a.more(href='#')
        i.icon-dot-3
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
        i.icon-heart
        i.icon-thumbs-up
        | &#x9;&#x9;&#x9;&#x9;&#x9;&#x9;172
      .comments
        | 10 Comment
    .post-actions
      a(href='#')
        i.icon-thumbs-up
        |  Like
      a(href='#')
        i.icon-message
        |  Comment
      a(href='#')
        i.icon-share
        |  Share
      a(href='#')
        i.icon-send
        |  Send
    .post-comment-form
      img(src='../../assets/image/avatar.png' alt='')
      .textarea
        textarea(name='' placeholder='Write comment' id='' cols='30' rows='10')
        label
          input(type='file' accept='image/*')
          i.icon-camera
  .post
    .post-header
      a.post-author(href='#')
        img(src='../../assets/image/avatar.png' alt='')
        .detail
          .name Brooklyn Simmons
          .job-title UI/UX Designer at Freelance
          .date 7 hour ago
      a.more(href='#')
        i.icon-dot-3
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
        i.icon-heart
        i.icon-thumbs-up
        | &#x9;&#x9;&#x9;&#x9;&#x9;&#x9;172
      .comments
        | 10 Comment
    .post-actions
      a(href='#')
        i.icon-thumbs-up
        |  Like
      a(href='#')
        i.icon-message
        |  Comment
      a(href='#')
        i.icon-share
        |  Share
      a(href='#')
        i.icon-send
        |  Send
    .post-comment-form
      img(src='../../assets/image/avatar.png' alt='')
      .textarea
        textarea(name='' placeholder='Write comment' id='' cols='30' rows='10')
        label
          input(type='file' accept='image/*')
          i.icon-camera
</template>

<style lang="scss" scoped>
.content {
  flex: 1;
  margin: 0 30px;

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
          i {
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

  .filter-box {
    margin-bottom: 14px;
    height: 42px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(#dedede, 0.8);
    border-radius: 6px;
    padding: 0 20px;
    color: #17272f;
    h6 {
      font-size: 14px;
      font-weight: normal;
    }
    .selectbox {
      position: relative;
      select {
        appearance: none;
        background: transparent;
        font-size: 14px;
        font-weight: 500;
        color: #17272f;
        padding-right: 30px;
        position: relative;
        top: -2px;
      }
      i {
        position: absolute;
        right: 0;
        font-size: 12px;
        color: #aaa;
        pointer-events: none;
      }
    }
  }

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
          max-width: 100%;
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
        i {
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
      i {
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
}
</style>

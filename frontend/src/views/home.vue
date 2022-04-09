<script>
import { mapActions } from 'vuex'

import HelloWorld from '@/components/hello-world.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    ...mapActions(['fetchUsers']),
  },
}
</script>

<template lang="pug">
header.header
  .container
    a.logo(href='#')
      img(src='../assets/image/logo.svg' alt='')
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
        img(src='../assets/image/avatar.png' alt='')
        i.icon-down-open
main
  .container
    .sidebar
      .widget.widget-stats
        .stat-user
          .cover
          .avatar
            img(src='../assets/image/avatar.png' alt='')
          .name Cameron Williamson
          .job-title Business Analyst
        ul
          li
            span.key Who viewed your profile
            span.value 90
          li
            span.key Views of your post
            span.value 627
      .widget.widget-newest
        h6 NEWEST
        ul
          li
            a(href='#')
              i.icon-hash
              | &#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;money
          li
            a(href='#')
              i.icon-hash
              | &#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;economy
          li
            a(href='#')
              i.icon-hash
              | &#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;markets
          li
            a(href='#')
              i.icon-hash
              | &#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;futurism
        h6
          | GROUP
          .dropdown
            a(href='#')
              | Active 
              i.icon-down-open
        ul
          li
            a(href='#')
              i.icon-users
              | &#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;Android Developers Group
          li
            a(href='#')
              i.icon-users
              | &#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;User Interface
          li
            a(href='#')
              i.icon-users
              | &#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;Prototurk Group
          li
            a(href='#')
              i.icon-users
              | &#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;Design Thinking
      a.widget.widget-btn(href='#')
        | Add Event
        i.icon-plus
      a.widget.widget-btn.more(href='#')
        | Find More
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
            img(src='../assets/image/avatar.png' alt='')
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
            img(src='../assets/image/stevejobs.png' alt='')
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
          img(src='../assets/image/avatar.png' alt='')
          .textarea
            textarea(name='' placeholder='Write comment' id='' cols='30' rows='10')
            label
              input(type='file' accept='image/*')
              i.icon-camera
      .post
        .post-header
          a.post-author(href='#')
            img(src='../assets/image/avatar.png' alt='')
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
            img(src='../assets/image/stevejobs.png' alt='')
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
          img(src='../assets/image/avatar.png' alt='')
          .textarea
            textarea(name='' placeholder='Write comment' id='' cols='30' rows='10')
            label
              input(type='file' accept='image/*')
              i.icon-camera
      .post
        .post-header
          a.post-author(href='#')
            img(src='../assets/image/avatar.png' alt='')
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
            img(src='../assets/image/stevejobs.png' alt='')
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
          img(src='../assets/image/avatar.png' alt='')
          .textarea
            textarea(name='' placeholder='Write comment' id='' cols='30' rows='10')
            label
              input(type='file' accept='image/*')
              i.icon-camera
      .post
        .post-header
          a.post-author(href='#')
            img(src='../assets/image/avatar.png' alt='')
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
            img(src='../assets/image/stevejobs.png' alt='')
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
          img(src='../assets/image/avatar.png' alt='')
          .textarea
            textarea(name='' placeholder='Write comment' id='' cols='30' rows='10')
            label
              input(type='file' accept='image/*')
              i.icon-camera
    .sidebar
      .widget.widget-recommendation
        h6 Add to Your Feeds
        ul
          li
            a(href='#')
              span.image
                img(src='../assets/image/brand1.png' alt='')
              span.detail
                span.name Techin Asia Indonesia
                span.alt-name Corporate - Online Media
            a(href='#')
              i.icon-plus
          li
            a(href='#')
              span.image
                img(src='../assets/image/brand2.png' alt='')
              span.detail
                span.name Techin Asia Indonesia
                span.alt-name Corporate - Online Media
            a(href='#')
              i.icon-plus
          li
            a(href='#')
              span.image
                img(src='../assets/image/brand3.png' alt='')
              span.detail
                span.name Techin Asia Indonesia
                span.alt-name Corporate - Online Media
            a(href='#')
              i.icon-plus
        a.widget-button(href='#')
          | See All Recomendation
      .widget.widget-marketing
        h6
          div
            | Advertisement
            span.description
              | Get the latest news and job vacancies
          a.more-btn(href='#')
            i.icon-dot-3
        .get-updates
          .avatars
            a(href='#')
              img(src='../assets/image/avatar.png' alt='')
            a(href='#')
              img(src='../assets/image/brand4.png' alt='')
          p
            | Cameron, Get update from 
            span Interaction Design Foundations
        a.widget-button(href='#')
          | Visit Now
      footer.footer
        nav
          a(href='#')
            | About
          a(href='#')
            | Help Center
          a(href='#')
            | Accessibility
          a(href='#')
            | Privacy &amp; Terms
          a(href='#')
            | Ad Choices
          a(href='#')
            | Advertising
          a(href='#')
            | Business Services
          a(href='#')
            | Get the LinkedIn app
          a(href='#')
            | More
        .copyright
          p
            | LinkedIn Corporation &copy; 2020
          a(href='#')
            img(src='../assets/image/logo.svg' alt='')
.message-box
  .message-header
    .img
      img(src='../assets/image/avatar.png' alt='')
    | &#x9;&#x9;Messaging
    .actions
      a(href='#')
        i.icon-edit
      a(href='#')
        i.icon-dot-3
      a(href='#')
        i.icon-up-open

</template>

<style lang="scss" scoped>
:root {
  --color: #006699;
}

* {
  padding: 0;
  margin: 0;
  list-style: none;
  border: none;
  text-decoration: none;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;

  &:focus {
    outline: 0;
  }
}

body {
  background-color: #f5f6f8;
}

.container {
  width: 1140px;
  margin: 0 auto;
}

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

main {
  .container {
    display: flex;

    .sidebar {
      min-width: 270px;
      width: 270px;

      .widget {
        margin-bottom: 16px;
        background-color: #fff;
        border-radius: 6px;
        padding: 15px;

        .widget-button {
          display: flex;
          height: 40px;
          align-items: center;
          justify-content: center;
          text-align: center;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          color: var(--color);
          transition: 300ms background-color, 300ms color;
          &:hover {
            background: var(--color);
            color: #fff;
          }
        }

        h6 {
          font-size: 14px;
          font-weight: 500;
          color: #17272f;
          padding-bottom: 8px;
          border-bottom: 1px solid #edf0f5;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          justify-content: space-between;

          .description {
            display: block;
            font-size: 10px;
            color: #aaa;
            font-weight: normal;
            margin-top: 4px;
          }

          .more-btn {
            color: #aaa;
            font-size: 16px;
            align-self: flex-start;
            &:hover {
              color: var(--color);
            }
          }

          .dropdown {
            a {
              display: flex;
              align-items: center;
              font-size: 14px;
              color: #31b057;
              font-weight: normal;

              i {
                font-size: 10px;
                color: #aaa;
                margin-left: 5px;
              }
            }
          }
        }
      }

      .widget-stats {
        padding: 8px;

        .stat-user {
          text-align: center;
          padding-bottom: 16px;
          margin-bottom: 16px;
          border-bottom: 1px solid #edf0f5;

          .cover {
            height: 43px;
            background: url(../assets/image/cover-bg.png) no-repeat center center;
            background-size: cover;
            border-radius: 4px;
          }

          .avatar {
            text-align: center;
            margin-top: -26px;
            margin-bottom: 10px;

            img {
              width: 52px;
              height: 52px;
              border-radius: 50%;
              display: block;
              margin: 0 auto;
              border: 2px solid #fff;
            }
          }

          .name {
            font-size: 16px;
            font-weight: 500;
            color: #17272f;
          }

          .job-title {
            font-size: 14px;
            color: #aaa;
            margin-top: 4px;
          }
        }

        ul {
          padding: 0 7px 11px;

          li {
            display: flex;
            justify-content: space-between;
            font-size: 14px;

            .key {
              color: #17272f;
            }

            .value {
              color: var(--color);
              font-weight: 500;
            }

            &:not(:last-child) {
              margin-bottom: 16px;
            }
          }
        }
      }

      .widget-newest {
        ul {
          padding-bottom: 30px;

          &:last-child {
            padding-bottom: 0;
          }

          li {
            a {
              display: flex;
              align-items: center;
              font-size: 12px;
              color: var(--color);
              padding: 4px 0;

              &:hover {
                color: #222;
              }

              i {
                width: 21px;
                font-size: 11px;

                &.icon-hash {
                  font-size: 12px;
                }
              }
            }
          }
        }
      }

      .widget-btn {
        height: 50px;
        padding: 0 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #17272f;
        font-size: i {
          color: var(--color);
        }

        &.more {
          height: 56px;
          justify-content: center;
          font-weight: 500;
          font-size: 14px;
          color: var(--color);
          transition: 300ms background-color, 300ms color;

          &:hover {
            background: var(--color);
            color: #ffffff;
          }
        }
      }

      .widget-recommendation {
        ul {
          li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;

            a:first-child {
              display: flex;
              align-items: center;

              .image {
                min-width: 24px;
                margin-right: 8px;
                display: flex;
                align-items: center;
                justify-content: center;

                img {
                  max-width: 100%;
                }
              }
              .detail {
                display: flex;
                flex-direction: column;
                .name {
                  font-size: 14px;
                  color: #17272f;
                  font-weight: 500;
                }
                .alt-name {
                  font-size: 12px;
                  color: #aaaaaa;
                  padding-top: 3px;
                }
              }
            }
            a:last-child {
              min-width: 24px;
              width: 24px;
              height: 24px;
              border: 1px solid var(--color);
              color: var(--color);
              border-radius: 4px;
              font-size: 13px;
              display: grid;
              place-items: center;
              transition: 300ms background-color, 300ms color;
              &:hover {
                background: var(--color);
                color: #fff;
              }
            }
          }
        }
      }

      .widget-marketing {
        padding: 20px 16px 10px;
        .get-updates {
          .avatars {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 14px 30px 0;
            a {
              img {
                border-radius: 50%;
                width: 72px;
                height: 72px;
              }
            }
          }
          p {
            margin-top: 18px;
            font-size: 14px;
            color: #17272f;
            line-height: 20px;
            margin-bottom: 10px;
            span {
              font-weight: 500;
            }
          }
        }
      }

      .footer {
        padding-top: 38px;
        position: sticky;
        top: 50px;
        nav {
          display: flex;
          flex-wrap: wrap;
          border-bottom: 1px solid #dedede;
          margin-bottom: 12px;
          a {
            font-size: 10px;
            color: #aaa;
            margin-right: 15px;
            margin-bottom: 16px;
          }
        }
        .copyright {
          display: flex;
          align-items: center;
          font-size: 10px;
          color: #aaa;
          justify-content: space-between;
          img {
            height: 12px;
          }
        }
      }
    }

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
        background: rgba(#dedede, 0.24);
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
  }
}

.message-box {
  position: fixed;
  bottom: 0;
  right: 50px;
  z-index: 10;
  .message-header {
    width: 270px;
    height: 56px;
    display: flex;
    align-items: center;
    background: linear-gradient(289.57deg, #006699 20.9%, #009099 111.3%);
    border-radius: 6px 6px 0 0;
    padding: 0 10px;
    font-size: 14px;
    color: #fff;
    .img {
      position: relative;
      &::before {
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: red;
        position: absolute;
        bottom: -6px;
        left: 50%;
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

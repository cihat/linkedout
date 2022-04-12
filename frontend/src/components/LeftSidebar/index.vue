<script>
export default {}
</script>

<template lang="pug">
.sidebar
  .widget.widget-stats
    .stat-user
      .cover
      .avatar
        img(src='../../assets/image/avatar.png' alt='')
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
</template>

<style lang="scss" scoped>
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
        background: url(../../assets/image/cover-bg.png) no-repeat center center;
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
}
</style>

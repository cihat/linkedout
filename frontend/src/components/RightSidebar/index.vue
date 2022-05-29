<script>
import Icon from '../Icon'
export default {
  name: 'RightSidebar',
  components: {
    Icon,
  },
}
</script>

<template lang="pug">
.sidebar
  .widget.widget-recommendation
    h6 Add to Your Feeds
    ul
      li
        a(href='#')
          span.image
            img(src='../../assets/image/brand1.png' alt='')
          span.detail
            span.name Techin Asia Indonesia
            span.alt-name Corporate - Online Media
        a(href='#')
          icon(icon='plus' :size="14" color="#5096ec")
      li
        a(href='#')
          span.image
            img(src='../../assets/image/brand2.png' alt='')
          span.detail
            span.name Techin Asia Indonesia
            span.alt-name Corporate - Online Media
        a(href='#')
          icon(icon='plus' :size="14" color="#5096ec")
      li
        a(href='#')
          span.image
            img(src='../../assets/image/brand3.png' alt='')
          span.detail
            span.name Techin Asia Indonesia
            span.alt-name Corporate - Online Media
        a(href='#')
          icon(icon='plus' :size="14" color="#5096ec")
    a.widget-button(href='#')
      | See All Recomendation
  .widget.widget-marketing
    h6
      div
        | Advertisement
        span.description
          | Get the latest news and job vacancies
      a.more-btn(href='#')
        icon(icon='equalizer2' :size="20" color="#5096ec")
    .get-updates
      .avatars
        a(href='#')
          img(src='../../assets/image/avatar.png' alt='')
        a(href='#')
          img(src='../../assets/image/brand4.png' alt='')
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
        | Get the LinkedOut app
      a(href='#')
        | More
    .copyright
      p
        | LinkedOut Corporation &copy; 2020
      a(href='#')
        img(src='../../assets/image/new-linkedout-logo.svg' alt='')
</template>

<style lang="scss" scoped>
.sidebar {
  // min-width: 270px;
  // width: 270px;

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
              // max-width: 100%;
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
</style>

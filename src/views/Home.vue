<template>
  <div>
    <div class="container">

      <div class="main-header padding border-separator">
        <div class="main-header__wrapper">
          <h1>Lorem ipsum dolor sit amet, consectetur</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam asperiores eligendi et hic, illum labore laudantium mollitia nemo nihil pariatur placeat possimus quam quas quidem rerum sapiente. Odio, reiciendis?</p>
          <a href="#" class="primary-link">
            Get started now
          </a>
        </div>
      </div>

      <div
        class="partners border-separator"
      >
        <div
          data-aos="flip-left"
          v-for="item in 5"
          :key="item"
        >
          Twitter
        </div>
      </div>

      <div
        class="default-container padding border-separator"
      >
        <div
          data-aos="fade-up"
          class="head"
        >
          <h2>Built exclusively for you</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint — occaecat cupidatat non proident, sunt in culpa qui.
          </p>
        </div>
        <div
          data-aos="fade-up"
          class="video-placeholder"
        >
        </div>
      </div>

      <div
        class="default-container scrollfix-anchor padding border-separator"
      >
        <div
          id="head"
          data-aos="fade-up"
          data-aos-anchor=".scrollfix-anchor"
          class="head"
        >
          <h2>Built exclusively for you</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus commodi consequuntur corporis cupiditate dolorem dolorum eius illo ipsum laboriosam laudantium maiores mollitia neque nobis quae quos, vel veniam voluptatum!
          </p>
        </div>

        <div class="grid-template">
          <div
            :data-aos="(item % 2 === 0) ? 'fade-left' : 'fade-right'"
            v-for="item in 6"
            :key="item"
            class="grid-template__item"
          >
            <div
              class="grid-template__grid-item"
            >
              <div class="grid-item__icon-container">
                <div class="icon-wrapper">
                  <img
                    width="72"
                    height="72"
                    src="../assets/icon.svg"
                    alt=""
                  >
                </div>
              </div>
              <div class="grid-item__content">
                <h4>Generate Leads</h4>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="default-container padding border-separator">
        <div
          data-aos="fade-up"
          class="head"
        >
          <h2>Don't take our word for it</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint — occaecat cupidatat non proident, sunt in culpa qui.
          </p>
        </div>

        <div class="reviews">
          <div
            data-aos="zoom-in"
            class="reviews__item"
            v-for="item in 3"
            :key="item"
          >
            <div class="item__review">
              <div class="review__message">
                - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores commodi corporis explicabo illo ipsa ipsam libero nisi non, obcaecati, officia possimus quae quaerat quo sit soluta velit veritatis voluptas!
              </div>

              <div class="review__author">
                <span class="author__name">Diana Rynzhuk</span>
                <span class="author__separator">/</span>
                <span class="author__app-name">
                  <a href="#">AppName</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer">
        <div class="f-row">
          <div class="footer__logo">
            <img
              src="../assets/logo.svg"
              alt="logo"
            >
          </div>

          <div class="footer__links">
            <a class="links__item">
              <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"></path></svg>
            </a>

            <a class="links__item">
              <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"></path></svg>
            </a>

            <a class="links__item">
              <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><g><circle cx="12.145" cy="3.892" r="1"></circle><path d="M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"></path><path d="M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z"></path></g></svg>
            </a>
          </div>
        </div>

        <div class="s-row">
          <span class="copyright">
            © {{ dateNow }} Denis pisos, all rights reserved
          </span>

          <div class="footer__links">
            <a class="links__item">
              <span>Contact</span>
            </a>
            <a class="links__item">
              <span>About us</span>
            </a>

            <a class="links__item">
              <span>FAQ's</span>
            </a>

            <a class="links__item">
              <span>Support</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  computed: {
    dateNow () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped lang="scss">
  .main-header {
    .main-header__wrapper {
      padding-top: 24px;
      padding-bottom: 24px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-align: left;

      @media (min-width: 821px) {
        width: 488px;
      }

      &>h1 {
        font-size: 44px;
        line-height: 54px;
        margin-bottom: 16px;
        font-family: "Fira Sans", sans-serif;
        font-weight: 600;
        clear: both;
        color: #F9FAFF;
        word-wrap: break-word;
        overflow-wrap: break-word;
      }

      &>p {
        margin-bottom: 32px;
        color: #959CB1;
        line-height: 32px;
        font-size: 20px;
        letter-spacing: -0.1px;
      }
    }
  }

  .partners {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-top: 24px;
    padding-bottom: 24px;

    &>div {
      flex-basis: 150px;
      max-width: 150px;
      padding: 12px 28px;
      font-size: 22px;
      font-weight: bold;
    }
  }

  .grid-template {
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
    align-items: center;
    justify-items: center;

    @media (max-width: 821px) {
      grid-template-columns: 1fr;
    }

    .grid-template__item {
      .grid-template__grid-item {
        padding: 32px;
        max-width: 360px;

        .grid-item__icon-container {
          margin-bottom: 16px;

          .icon-wrapper {
            display: inline-flex;
            border-radius: 50%;
            background: radial-gradient(circle at bottom, #376DF9 0%, #ff79af 50%, #FF8D74 100%);
          }
        }

        .grid-item__content {
          h4 {
            margin-bottom: 8px;
            margin-top: 0;
            font-size: 24px;
            line-height: 34px;
            letter-spacing: -0.1px;
          }

          p {
            color: #959CB1;
            margin: 0;
            font-size: 18px;
            line-height: 30px;
            letter-spacing: -0.1px;
          }
        }
      }
    }
  }

  .default-container {
    .head {
      padding-bottom: 80px;
      max-width: 620px;
      margin: 0 auto;

      h2 {
        margin-bottom: 16px;
        margin-top: 0;
        font-size: 38px;
        line-height: 48px;
        font-family: "Fira Sans", sans-serif;
        font-weight: 600;
        clear: both;
        color: #F9FAFF;
        word-wrap: break-word;
        overflow-wrap: break-word;
      }

      p {
        margin: 0;
        color: #959CB1;
        line-height: 32px;
        font-size: 20px;
        letter-spacing: -0.1px;
        text-align: center;
      }
    }
  }

  .padding {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  .border-separator {
    border-bottom: 1px solid #292B32;
  }

  .video-placeholder {
    width: 100%;
    height: 400px;
    background: url("../assets/video-placeholder.svg") center no-repeat;
  }

  .reviews {
    display: flex;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    justify-content: center;

    .reviews__item {
      flex-basis: 344px;
      max-width: 344px;
      box-sizing: content-box;
      padding: 12px;

      .item__review {
        background-color: #292B32;
        display: -webkit-box;
        display: flex;
        flex-wrap: wrap;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        height: 100%;
        box-sizing: border-box;
        padding: 20px 24px;

        .review__message {
          font-size: 18px;
          line-height: 30px;
          text-align: left;
          color: #959CB1;

          &:before {
            content: '';
            display: block;
            width: 24px;
            height: 18px;
            margin-top: 4px;
            margin-bottom: 16px;
            background-image: url('../assets/quotes.svg');
            background-repeat: no-repeat;
          }
        }

        .review__author {
          margin-top: 32px;
          font-family: "Fira Sans", sans-serif;
          font-weight: 600;
          padding-top: 20px;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: -0.1px;
          position: relative;
          text-align: left;

          .author__name {
            color: #F9FAFF;
            font-weight: 600;
          }

          .author__separator {
            color: #6A6F82;
            padding: 0 4px;
          }

          .author__app-name {
            a {
              color: #376DF9;
              text-decoration: none;
            }
          }

          &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            display: block;
            height: 1px;
            background: rgba(106,111,130,0.32);
          }
        }
      }
    }
  }

  .footer {
    padding: 52px 0;

    .f-row {
      display: flex;

      .footer__logo {
        display: flex;
        flex: 1 1 auto;
      }

      .footer__links {
        display: flex;
        align-items: center;

        .links__item {
          padding: 0 12px;
          cursor: pointer;

          &:hover {
            svg {
              fill: #6991FA;
            }
          }

          svg {
            fill: #376DF9;
            transition: fill .15s ease;
          }
        }
      }
    }

    .s-row {
      display: flex;
      padding-top: 22px;

      .copyright {
        display: flex;
        flex: 1 1 auto;
      }

      .footer__links {
        display: flex;

        .links__item {
          cursor: pointer;
          padding: 0 8px;
          transition: all .3s ease;

          &:hover {
            color: #F9FAFF;
          }
        }
      }
    }
  }
</style>

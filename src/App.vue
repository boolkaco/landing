<template>
  <div id="app">
    <div class="bg-illustration">
      <img
        src="./assets/illustration-section-01.png"
        alt="illustration"
      >
    </div>

    <ul class="nav container">
      <li class="nav__logo-wrp">
        <img
          class="nav__logo"
          src="./assets/logo.svg"
          alt="logo"
        >
      </li>
      <li class="nav__item">
        <a
          href="https://google.com"
          class="flat-link"
        >
          Secondary page
        </a>
      </li>
      <li class="nav__item">
        <a
          href="https://google.com"
          class="primary-link"
        >
          Sign up
        </a>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<style lang="scss">
  body {
    box-sizing: border-box;
    margin: 0;
    background-color: #16171B;
    color: #2c3e50;
  }

  html, body {
    overflow-x: hidden;
  }

  .nav {
    height: 80px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;

    .nav__logo-wrp {
      display: flex;
      flex: 1 1 auto;
    }

    .nav__item {
      flex: 0 1 auto;
    }
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  .bg-illustration {
    top: 0;
    position: absolute;
    z-index: -1;

    @media (max-width: 821px) {
      left: 50%;
    }

    @media (min-width: 821px) {
      left: 60%;
    }
  }
</style>

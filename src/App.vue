<template>
  <div id="app">
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-half">
            <nav
              id="navigation"
              class="navbar"
              role="navigation"
              aria-label="main navigation"
            >
              <div class="navbar-brand">
                <a class="title navbar-item" href="/">hash-hush</a>
              </div>
              <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                  <a class="navbar-item" href="/">Home</a>
                  <a
                    class="navbar-item"
                    href="https://github.com/ninoseki/hash-hush"
                    >GitHub repo</a
                  >
                </div>
              </div>
            </nav>
            <router-view></router-view>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

Vue.use(Buefy);

export default class App extends Vue {}
</script>

<style scoped>
#navigation {
  margin-bottom: 30px;
}
</style>

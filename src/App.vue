<template>
  <div id="app">
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-half">
            <h1 class="title">hash-hush</h1>
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

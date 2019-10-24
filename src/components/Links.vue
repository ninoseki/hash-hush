<template>
  <div class="links"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Service } from "../lib/types";
import { Services } from "../lib/services";

@Component
export default class Links extends Vue {
  private services = Services;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

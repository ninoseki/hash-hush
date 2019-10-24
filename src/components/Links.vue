<template>
  <div class="links">
    <div v-for="service in services" v-bind:key="service.name">
      <Link v-bind:hash="hash" v-bind:service="service" />
      <hr />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { Service } from "@/lib/types";
import { Services } from "@/lib/services";

import Link from "@/components/Link.vue";

@Component({
  components: {
    Link
  }
})
export default class Links extends Vue {
  private services = Services;
  public hash!: string;

  created() {
    this.hash = this.$route.params.hash;
  }
}
</script>

<style scoped>
.links hr {
  margin: 1rem 0;
}
</style>

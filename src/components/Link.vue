<template>
  <div class="link"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { Service } from "@/lib/types";

@Component({
  props: {
    hash: String,
    service: Object as () => Service
  }
})
export default class Link extends Vue {
  public hash!: string;
  public service!: Service;

  mounted() {
    this.greet();
  }

  // method
  greet() {
    alert(this.service.baseURL);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

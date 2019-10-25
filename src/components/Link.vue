<template>
  <div class="link media">
    <figure class="media-left">
      <p class="image is-16x16">
        <img v-bind:src="service.faviconURL" alt="favicon" />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{ service.name }}</strong>
        </p>
        <a v-bind:href="service.link(hash)" target="_blank">{{ hash }}</a>
      </div>
    </div>
  </div>
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
}
</script>

<style scoped>
.link img {
  margin-top: 5px;
}
</style>

<template>
  <div class="link media">
    <figure class="media-left">
      <p class="image is-16x16">
        <img v-bind:src="service.faviconURL" alt="favicon" />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <a v-bind:href="service.link(hash)" target="_blank">{{ hash }}</a>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <button v-if="validLink" class="button is-small is-success level-item">Found</button>
          <button v-else class="button is-small is-danger level-item">Not found</button>
        </div>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import axios from "axios";

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
  public validLink: boolean = true;

  async created() {
    const link = this.service.link(this.hash);
    this.validLink = await this.linkCheck(link);
  }

  async linkCheck(link: string): Promise<boolean> {
    try {
      const response = await axios.get("/check", { params: { link: link } });
      const data = response.data;
      if ("valid" in data) {
        return data.valid;
      } else {
        return false;
      }
    } catch (error) {
      const data = error.response.data;
      console.error(data);
      return false;
    }
  }
}
</script>

<style scoped>
.link {
  margin-top: 10px;
}

.link img {
  margin-top: 5px;
}
</style>

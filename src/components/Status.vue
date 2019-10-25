<template>
  <div>
    <div v-if="type() === 'Found'">
      <button class="button is-small is-success level-item">Found</button>
    </div>
    <div v-else-if="type() === 'Not Found'">
      <button class="button is-small is-danger level-item">Not found</button>
    </div>
    <div v-else>
      <button class="button is-small is-warning level-item">Unknown</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { StatusType } from "@/lib/types";

@Component({
  props: {
    checkable: Boolean,
    validLink: Boolean
  }
})
export default class Link extends Vue {
  public checkable!: boolean;
  public validLink!: boolean;

  type(): StatusType {
    if (!this.checkable) {
      return "Unknown";
    }

    return this.validLink ? "Found" : "Not found";
  }
}
</script>

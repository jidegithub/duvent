<template>
  <div class="container-main" :style="cssVars">
    <slot/>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Flex',
  props: {
    justifyContent: String,
    alignItems: String,
    flexDirection: {
      type: String,
      default: 'row',
    },
    flexGrow: {
      type: Number,
      default: 0,
    },
    flexWrap: String,
  },
  computed: {
    cssVars() {
      return {
        '--flex-direction': this.flexDirection,
        '--align-items': this.alignItems,
        '--justify-content': this.justifyContent,
        '--flex-grow': this.flexGrow,
        '--flex-wrap': this.flexWrap,
      };
    },
  },
});
</script>

<style lang="scss">
  .container-main {
    display: flex;
    flex-direction: var(--flex-direction);
    align-items: var(--align-items);
    justify-content: var(--justify-content);
    flex-grow: var(--flex-grow);
    flex-wrap: var(--flex-wrap);
    letter-spacing: -0.03em;
  }
</style>

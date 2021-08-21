<template>
  <button type="submit" title="book">
    {{name}}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    name: String,
  },
};
</script>

<style lang="sass">

</style>

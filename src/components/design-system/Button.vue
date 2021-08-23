<template>
  <button class="default" type="submit" :title="name">
    <slot>Book Event</slot>
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

<style lang="scss">
  .default{
    background-color: white;
    color: #f77d24;
    font-weight: 600;
    padding-top: 0.5rem/* 8px */ 1rem/* 16px */;
    border-radius: 0.25rem/* 4px */;
    border: 1px solid #f77d24;
    padding: .5rem 0;
    :hover{
      border-color: transparent;
    }
  }
</style>

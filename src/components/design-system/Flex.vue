<template>
  <div class="container-main">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'Flex',
};
</script>

<style lang="scss">
  .container-main {
    display: flex;
    align-items: center;
    letter-spacing: -0.03em;
      @media only screen and (max-width: 56.25em) {
        // display: none
      }
      // @media only screen and (max-width: 37.5em) {
      //   font-size: 3.5rem;
      // }
    // span {
    //   margin-right: 1rem;
    //   background-image: linear-gradient(to right, #b0f3f1, #ffcfdf);
    //   background-clip: text;
    //   -webkit-background-clip: text;
    //   -webkit-text-fill-color: transparent;
    //   display: inline-block;
    // }
    // &__sub {
    //   span {}
    // }
  }
</style>

<template>
  <flex justifyContent="flex-start" alignItems="center" class="searchbar-outer">
    <flex class="searchbar-inner">
      <input v-model="searchEvent" type="text" class="searchbar-input" placeholder="Search By Event Title...">
      <button class="searchbar-button">
        <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
      </button>
    </flex>
  </flex>
</template>

<script>
import Flex from '@/components/design-system/Flex.vue';

export default {
  name: 'searchbar',
  components: {
    Flex,
  },
  computed: {
    searchEvent: {
      get() {
        return this.$store.state.searchEvent;
      },
      set(value) {
        this.$store.dispatch('FILTERED_EVENTS', value);
      },
    },
  },
};
</script>

<style lang="scss">
  .searchbar{
    &-outer{
      color: rgb(0, 0, 0);
      background: #d8dbde;
      padding: 1.6rem 1.2rem;
        @media only screen and (max-width: 48em) {
          justify-content: center;
        }
    }
    &-inner{
      border-width: 1px;
      border-radius: 1px;
      overflow: hidden;
      position: relative;
      flex-grow: 0.3;
        @media only screen and (max-width: 48em) {
          width: 100%;
        }
    }
    &-input{
      padding: 0.5rem 1rem/* 8px */;
      width: 100%;
    }
    &-button{
      position: absolute;
      // right: 0;
      right: 7px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      border: none;
      background: #fff;
      & svg{
        height: 1rem;
        width: 1rem;
        fill: #f77d24;
      }
    }
  }
</style>

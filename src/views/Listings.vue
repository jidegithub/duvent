<template>
  <div>
    <SearchBar/>
    <Flex class="listing-heading">
      <h1>EVENTS ({{filteredEventsCount}})</h1>
    </Flex>
    <div class="listing-container">
      <Flex flexDirection="row" flexWrap="wrap" justifyContent="center">
        <Card v-for="event in filteredEvents" :key="event.id" :event="event"/>
      </Flex>
      <!-- <Flex v-else justifyContent="center">
        <h2>No Result Found!</h2>
      </Flex> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Flex from '@/components/design-system/Flex.vue';
import Card from '@/components/card/Card.vue';
import SearchBar from '@/components/searchbar/SearchBar.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Card,
    Flex,
    SearchBar,
  },
  computed: {
    filteredEvents() {
      try {
        const result = (this.$store.getters.getFilteredEvents || this.$store.getters.getEventData);
        return result;
      } catch (error) {
        return error;
      }
    },
    filteredEventsCount() {
      return (this.$store.getters.getFilteredEventCount || this.$store.getters.getEventCount);
      // if (this.$store.getters.getFilteredEventCount && this.$store.getters.getEventCount) {
      //   return (this.$store.getters.getFilteredEventCount || this.$store.getters.getEventCount);
      // }
      // return 0;
    },
    // noResult() {

    // }
  },
});
</script>

<style lang="scss" scoped>
  .listing {
    &-heading{
      margin-top: 1.6rem;
      padding: 0 3.8rem;
      @media only screen and (max-width: 48em) {
      }
      @media only screen and (max-width: 25.565em) {
        padding: 0 .3rem;
      }
    }
    &-container{
    padding: 0 1rem 1rem;
    margin: 0 1rem 1rem;
      @media screen and (max-width: 48em) {
        padding: .2rem;
        margin: .2rem;
      }
    }
  }
</style>

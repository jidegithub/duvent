<template>
  <div class="listing-container">
    <Flex>
      <h1>EVENTS ({{filteredEventsCount}})</h1>
    </Flex>
    <Flex flexDirection="row" flexWrap="wrap" justifyContent="center">
      <Card v-for="event in filteredEvents" :key="event.id" :event="event"/>
    </Flex>
    <!-- <Flex v-else justifyContent="center">
      <h2>No Result Found!</h2>
    </Flex> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Flex from '@/components/design-system/Flex.vue';
import Card from '@/components/card/Card.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Card,
    Flex,
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
  .listing-container {
    padding: 20px 20px;
  }
</style>

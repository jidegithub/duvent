<template>
  <div class="listing-container">
    <Flex>
      <h3>EVENTS (8)</h3>
    </Flex>
    <Flex flexDirection="row" flexWrap="wrap" justifyContent="space-between">
      <div class="card" v-for="event in listings" :key="event.id">
        <Card :event="event"/>
      </div>
    </Flex>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Flex from '@/components/design-system/Flex.vue';
import Card from '@/components/card/Card.vue';
import listings from '../listings.json';

export default Vue.extend({
  name: 'Home',
  components: {
    Card,
    Flex,
  },
  data() {
    return {
      listings: listings.data,
    };
  },
});
</script>

<style lang="scss" scoped>
  .listing-container {
    padding: 20px 25px;
  }
  .card{
    margin: 0 0 1rem;
    // width: 33%;
    max-width: 295px;
    width: 295px;
  }
</style>

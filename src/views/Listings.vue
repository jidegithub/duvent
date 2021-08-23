<template>
  <div class="listing-container">
    <Flex>
      <h1>EVENTS (8)</h1>
    </Flex>
    <Flex flexDirection="row" flexWrap="wrap" justifyContent="center">
      <Card v-for="event in listings" :key="event.id" :event="event"/>
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
    padding: 20px 20px;
  }
</style>

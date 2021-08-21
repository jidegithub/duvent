<template>
  <Flex>
    <div class="relative pb-5/6">
      <img class="absolute h-full w-full object-cover rounded-lg shadow-md" :src="event.imageUrl" :alt="event.imageAlt">
    </div>
    <div class="relative px-4 -mt-16">
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <div class="flex items-baseline">
          <span class="inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">New</span>
          <div class="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
            {{ event.beds }} beds &bull; {{ event.baths }} baths
          </div>
        </div>
        <h4 class="mt-1 font-semibold text-lg leading-tight truncate">{{ event.title }}</h4>
        <div class="mt-1">
          {{ event.formattedPrice }}
          <span class="text-gray-600 text-sm"> / wk</span>
        </div>
      </div>
    </div>
    <Button :name="ticketAvailable(event.ticketAvailable)"/>
  </Flex>
</template>

<script lang="ts">
import Flex from '@/components/design-system/Flex.vue';
import Button from '@/components/design-system/Button.vue';

interface EventInterface {
  id: number
  title: string
  date: string
  imageUrl: string
  ticketAvailable: number
}

export default {
  name: 'card',
  props: {
    event: {
      type: Object as () => EventInterface,
    },
  },
  components: {
    Flex,
    Button,
  },
  methods: {
    ticketAvailable(value:number): string {
      return value === 0 ? 'SOLD OUT' : 'Book Event';
    },
  },
};
</script>

<style lang="scss">
  .card-container {

    &-image{

    }
    &-details{
      &--title{
        width: 250px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      &--date{

      }
      &--ticket{

      }
    }
    &-button{

    }
  }
</style>

<template>
  <Flex flexDirection="column">
    <div class="card-container">
      <img class="card-container--image" :src="event.imageUrl" :alt="event.imageAlt">
    </div>
    <div class="card-container-details-outer">
      <div class="card-container-details-inner">
        <h5 class="card-container-details--title">{{ event.title }}</h5>
        <Flex justifyContent="space-between" class="">
          <div class="card-container-details--date">
            {{ event.date }}
          </div>

          <div class="card-container-details--ticket">
            Tickets Available:
            <span class="">{{ event.ticketAvailable }}</span>
          </div>
        </Flex>
      </div>
      <Button class="card-button" :name="ticketAvailable(event.ticketAvailable)">
        <Flex justifyContent="center" alignItems="end">
          <IconCalendar />
          <span>{{ticketAvailable(event.ticketAvailable)}}</span>
        </Flex>
      </Button>
    </div>
  </Flex>
</template>

<script lang="ts">
import Flex from '@/components/design-system/Flex.vue';
import Button from '@/components/design-system/Button.vue';
import IconCalendar from '@/components/icons/IconCalendar.vue';

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
    IconCalendar,
  },
  methods: {
    ticketAvailable(value:number): string {
      return value === 0 ? 'SOLD OUT' : 'Book Event';
    },
  },
};
</script>

<style lang="scss" scoped>
  .card {
    &-container{
      width: 100%;
      position: relative;
      // padding-bottom: 1rem;
      &--image{
        width: 100%;
        & img{
          position: absolute;
          height: 100%;
          width: 100%;
          object-fit: cover;
          border-radius: 0.5rem/* 8px */;
          box-shadow:  0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
      }
    }
    &-container {
      &-details-outer{
        position: relative;
        padding: 0 1rem/* 16px */;
        border: 1px solid rgba(0, 0, 0, 0.1);
        margin-top: -5px;
        --bg-opacity: 1;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      }
      &-details-inner{
        background-color: rgba(255, 255, 255, var(--bg-opacity));
        // padding: 1rem/* 24px */;
        border-radius: 0.5rem/* 8px */;
      }
      &-details{
        &--title{
          width: 260px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          overflow-wrap: break-word;
          word-wrap: break-word;
          // margin-top: 0.25rem/* 4px */;
          font-weight: 600;
          font-size: 1rem/* 18px */;
          line-height: 1.25;
          hyphens: auto;
        }
        &--date{
          --text-opacity: 1;
          color: rgba(75, 85, 99, var(--text-opacity));
          font-weight: 600;
          letter-spacing: 0.025em;
          font-size: .8rem/* 18px */;
        }
        &--ticket{
          color: rgba(75, 85, 99, var(--text-opacity));
          font-weight: 600;
          letter-spacing: 0.025em;
          font-size: .8rem/* 18px */;
        }
      }
    }
    &-button{
      margin: .9rem 0 .9rem;
      width: 100%;
      color: #f77d24;
      & span{
        margin-left: .3rem;
      }
    }
  }
</style>

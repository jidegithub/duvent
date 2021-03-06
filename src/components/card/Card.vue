<template>
  <Flex class="card" flexDirection="column">
    <div class="card-container">
      <img class="card-container--image" :src="event.imageUrl" :alt="event.imageAlt">
    </div>
    <div class="card-container-details-outer">
      <div class="card-container-details-inner">
        <h5 class="card-container-details--title">{{ event.title }}</h5>
        <Flex justifyContent="space-between" class="card-container-details-info">
          <div class="card-container-details-info--date">
            {{ event.date }}
          </div>

          <div class="card-container-details-info--ticket">
            Tickets Available:
            <span v-if="event.ticketAvailable" class="card-container-details-info--ticket-value">{{ ticketFilters(event.ticketAvailable, 'digit') }}</span>
            <span v-else>N/A</span>
          </div>
        </Flex>
      </div>
      <router-link :to='`/booking/${event.id}`' :event="ticketFilters(event.ticketAvailable, 'button') === 'SOLD OUT' ? '' : 'click'">
        <Button class="card-button" :disabled="ticketFilters(event.ticketAvailable, 'button') === 'SOLD OUT'" :name="ticketFilters(event.ticketAvailable, 'button')">
          <Flex justifyContent="center" alignItems="end">
            <IconCalendar class="card-button--icon" :iconColor="ticketFilters(event.ticketAvailable, 'icon')"/>
            <span class="card-button--text">{{ticketFilters(event.ticketAvailable, 'button')}}</span>
          </Flex>
        </Button>
        <IconCalendar class="card-button--icon--mobile" :iconColor="ticketFilters(event.ticketAvailable, 'icon')"/>
      </router-link>
    </div>
  </Flex>
</template>

<script>
import Flex from '@/components/design-system/Flex.vue';
import Button from '@/components/design-system/Button.vue';
import IconCalendar from '@/components/icons/IconCalendar.vue';

export default {
  name: 'card',
  props: {
    event: {
      id: Number,
      title: String,
      date: String,
      imageUrl: String,
      ticketAvailable: Number,
    },
  },
  components: {
    Flex,
    Button,
    IconCalendar,
  },
  methods: {
    ticketFilters(value, type) {
      let property = '';
      switch (type) {
        case 'button':
          property = value === 0 ? 'SOLD OUT' : 'Book Event';
          break;
        case 'icon':
          property = value === 0 ? '#707475' : '#f77d24';
          break;
        case 'digit':
          property = value === 0 ? 'N/A' : value.toString();
          break;
        default:
          break;
      }
      return property;
    },
  },
};
</script>

<style lang="scss" scoped>
  .card {
    margin: .3rem;
      // &-grand-container {
        @media only screen and (max-width: 48em) {
          flex-direction: row;
        }
      // }
    &-container{
      width: 100%;
      position: relative;
        @media only screen and (max-width: 48em) {
          width: auto;
        }
      &--image{
        width: 100%;
          @media only screen and (max-width: 40em) {
            display: none;
          }
          @media only screen and (max-width: 26.5625em) {
            display: none;
          }
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
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

          @media only screen and (max-width: 48em) {
            display: flex;
            align-items: center;
          }
      }
      &-details-inner{
        // background-color: rgba(255, 255, 255, var(--bg-opacity));
        margin-bottom: .9rem;
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
        &-info{
            @media only screen and (max-width: 48em) {
              flex-direction: column;
            }
          &--date{
            --text-opacity: 1;
            color: rgba(75, 85, 99, var(--text-opacity));
            font-weight: 600;
            letter-spacing: 0.025em;
            font-size: .8rem/* 18px */;
          }
          &--ticket{
            font-weight: 600;
            letter-spacing: 0.025em;
            font-size: .8rem/* 18px */;
            &-value {
              color: #f77d24;
            }
          }
        }
      }
    }
    &-button{
      border: 1px solid #f77d24;
      margin: 0 0 .9rem;
      width: 100%;
      color: #f77d24;
      cursor: pointer;
        @media only screen and (max-width: 48em) and (min-width: 0em) {
          display: none;
        }
      &--icon{
        &--mobile {
          display: none;
            @media only screen and (max-width: 48em) and  (min-width: 0em){
              display: block;
            }
        }
      }
      &--text{

      }
      & span{
        margin-left: .3rem;
      }
      &:disabled{
        color: #707475;
        border: 1px solid #707475;
        cursor: not-allowed;
      }
    }
  }
</style>

<template>
  <div class="wrapper">
    <div class="card-form">
      <div v-if="isDoneBooking" class="card-form__image-container">
        <flex flexDirection="column" justifyContent="center" class="card-form__image">
          <h2>You have booked <span class="ticket-number">{{tickets}}</span> ticket(s) for</h2>
          <div class="card-input-title">
            <hr/>
            <h1>{{selectedEvent.title}}</h1>
            <h4>{{selectedEvent.date}}</h4>
            <hr/>
          </div>
        </flex>
        <flex justifyContent="space-between" flexWrap="wrap" class="form_buttons">
          <button type="submit" class="card-form__button card-form__button-primary">
            Make Payment
          </button>
          <button type="reset" class="card-form__button card-form__button-secondary">
            <router-link to="/">
              Back To Booking
            </router-link>
          </button>
        </flex>
      </div>
      <validation-observer v-else v-slot="{ handleSubmit, reset }">
      <form @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="reset" class="card-form__inner">
        <div class="card-input">
          <flex flexDirection="column" justifyContent="center">
            <div class="card-input-title">
              <h1>{{selectedEvent.title}}</h1>
              <h4>{{selectedEvent.date}}</h4>
              <div class="card-container-details-info--ticket">
                Tickets Available:
                <span class="card-container-details-info--ticket-value">{{ selectedEvent.ticketAvailable }}</span>
              </div>
            </div>
          </flex>
          <validation-provider name="name" v-slot='{ errors }' rules="required">
            <label for="name" class="card-input__label">Name</label>
            <input type="text" name="name" id="name" v-model="name" class="card-input__input" data-ref="cardNumber" autocomplete="off">
            <span>{{ errors[0] }}</span>
          </validation-provider>
        </div>
        <div class="card-input">
          <validation-provider name="email" v-slot='{ errors }' rules="required|email">
            <label for="email" class="card-input__label">Email</label>
            <input type="text" name="email" id="email" v-model="email" class="card-input__input" data-ref="cardNumber" autocomplete="off">
            <span>{{ errors[0] }}</span>
          </validation-provider>
        </div>
        <div class="card-input">
          <validation-provider name="Phone Number">
            <label for="phone-number" class="card-input__label">Mobile</label>
            <input type="text" id="phone-number" name="phone-number" v-model="number" class="card-input__input" data-ref="cardNumber" autocomplete="off">
          </validation-provider>
        </div>
        <!-- <div class="card-form__row card-input">
          <div class="card-form__col">
            <div class="card-form__group">
              <validation-provider name="seats" v-slot='{ errors }' rules="required">
                <label for="seats" class="card-input__label">Number of Seats</label>
                <select name="seats" data-vv-as="selected" data-vv-validate-on="blur" class="card-input__input -select" v-model="seats" data-ref="cardDate">
                  <option value="" disabled selected>seats</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
                <span>{{ errors[0] }}</span>
              </validation-provider>
            </div>
          </div>
        </div> -->
        <div class="card-input">
          <label v-if="!seatsAvailable" for="attendee" class="card-input__label">Attendee(s)</label>
          <validation-provider class="input-wrapper" v-for="(attendee, index) in attendees" :key="`attendee-${index}`" name="attendee" v-slot='{ errors }' :rules="!seatsAvailable ? null : 'required'">
            <h2>{{index + 1}}</h2>
            <flex>
              <input type="text" name="attendee" id="attendee" v-model="attendee.name" class="card-input__input" data-ref="cardName" autocomplete="off">
              <span>{{ errors[0] }}</span>
            </flex>
          </validation-provider>
        </div>
        <flex justifyContent="flex-end">
          <button @click="addField(name, attendees)" class="card-input-attendee-button">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.7143 7.07143H10.9286V1.28571C10.9286 0.575759 10.3528 0 9.64286 0H8.35714C7.64719 0 7.07143 0.575759 7.07143 1.28571V7.07143H1.28571C0.575759 7.07143 0 7.64719 0 8.35714V9.64286C0 10.3528 0.575759 10.9286 1.28571 10.9286H7.07143V16.7143C7.07143 17.4242 7.64719 18 8.35714 18H9.64286C10.3528 18 10.9286 17.4242 10.9286 16.7143V10.9286H16.7143C17.4242 10.9286 18 10.3528 18 9.64286V8.35714C18 7.64719 17.4242 7.07143 16.7143 7.07143Z" fill="#FC732F"/>
            </svg>
              Add an Attendee
          </button>
        </flex>
        <flex justifyContent="space-between" flexWrap="wrap" class="form_buttons">
          <button type="submit" :disabled="isBooked" class="card-form__button card-form__button-primary" :class="{ 'submitting': isBooked }">
            Book Ticket
          </button>
          <button type="reset" :disabled="isBooked" class="card-form__button card-form__button-secondary" :class="{ 'submitting': isBooked }">
            Cancel
          </button>
        </flex>
      </form>
      </validation-observer>
    </div>
  </div>
</template>

<script>
import { localize } from 'vee-validate';
import Flex from '@/components/design-system/Flex.vue';

export default {
  name: 'booking-form',
  components: {
    Flex,
  },
  created() {
    this.$store.dispatch('FIND_EVENT', this.$route.params.id);
    localize({
      en: {
        fields: {
          name: {
            required: 'Please enter your name',
          },
          email: {
            required: 'Please enter your email',
          },
          seats: {
            required: 'Please enter the number of seats',
          },
          attendee: {
            required: 'Please enter the name of attendee',
          },
        },
      },
    });
  },
  data() {
    return {
      name: '',
      email: '',
      number: '',
      seats: 0,
      attendees: [{ value: '' }],
      isBooked: false,
      tickets: 0 || 1,
      isDoneBooking: false,
    };
  },
  computed: {
    selectedEvent: {
      get() {
        return this.$store.state.selectedEvent;
      },
    },
    seatsAvailable() {
      if (this.seats > 1) {
        return true;
      }
      return false;
    },
  },
  methods: {
    onSubmit() {
      // console.table({
      //   name: this.name,
      //   email: this.email,
      //   number: this.number,
      //   seats: this.seats,
      //   tickets: this.tickets,
      //   attendees: this.attendees.map((attd) => attd),
      // });
      this.isDoneBooking = true;
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(this.$router.push('/'));
        }, 7000);
      });
    },
    addField(value, fieldType) {
      this.tickets += 1;
      return fieldType.push({ value: '' });
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 20px;
  @media screen and (max-width: 700px), (max-height: 500px) {
    flex-wrap: wrap;
    flex-direction: column;
  }
}
.notification {
  background-color: #23d160;
  animation: slidein 2s 1;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(.68,-.55,.265,1.3);
  border-radius: 4px;
  max-width: 600px;
  padding: 1.25rem 3rem;
}
.card-form {
  justify-content: space-around;
  margin: auto;
  width: 100%;
  padding: 15px 15px;

  @media screen and (max-width: 48em) {
    display: block;
    margin: 0 auto;
  }

  &__inner {
    background: #fff;
    width: 30rem;
    border-radius: 10px;
    padding: 35px;
    margin: 0 auto;
    box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);
    @media screen and (max-width: 48em) {
      padding: 25px;
      width: 100%;
    }
    @media screen and (max-width: 360px) {
      padding: 15px;
    }
  }

  &__row {
    display: flex;
    align-items: flex-start;
    width: 60%;
    @media screen and (max-width: 480px) {
      flex-wrap: wrap;
    }
  }

  &__col {
    flex: auto;
    margin-right: 35px;

    &:last-child {
      margin-right: 0;
    }

    @media screen and (max-width: 480px) {
      margin-right: 0;
      flex: unset;
      width: 100%;
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__group {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;

    .card-input__input {
      flex: 1;
      margin-right: 15px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  &__button {
    width: 48.9%;
    height: 45px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 500;
    box-shadow: 3px 10px 20px 0px rgba(35, 100, 210, 0.3);
    margin-top: 20px;
    cursor: pointer;
    & a{
      text-decoration: none;
      color:inherit
    }
    &-primary {
      color: white;
      background: #f77d24;
    }
    &-secondary {
      color:#f77d24;
      border: 1px solid #f77d24;;
    }
    @media screen and (max-width: 48em){
      font-size: 0.8rem;
    }
    @media screen and (max-width: 480px) {
      margin-top: 10px;
      font-size: 0.8rem;
      width: 100%;
    }
  }
  &__image{
      text-align: center;
      &-container{
      display: flex;
      width: 60%;
      margin: 0 auto;
      flex-wrap: wrap;
      flex-direction: column;
      position: relative;
      box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);
      padding: 3rem 2.5rem;
      @media only screen and (max-width: 48em) {
        width: auto;
        padding: 2rem;
        justify-content: center;
      }
      @media only screen and (max-width: 25.565em){
        padding: 1rem;
      }
    }
  }
}

.card-item {
  max-width: 430px;
  height: 270px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 2;
  width: 100%;

  @media screen and (max-width: 480px) {
    max-width: 310px;
    height: 220px;
    width: 90%;
  }

  @media screen and (max-width: 360px) {
    height: 180px;
  }
}

.card-list {
  margin-bottom: -130px;
  @media screen and (max-width: 480px) {
    margin-bottom: -120px;
  }
}
.card-input {
  margin-bottom: 20px;
  &-title{
    text-align: center;
  }
  &__label {
    font-size: 14px;
    margin-bottom: 5px;
    font-weight: 500;
    color: #1a3b5d;
    width: 100%;
    display: block;
    user-select: none;
  }
  &__input {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    box-shadow: none;
    border: 1px solid #ced6e0;
    transition: all 0.3s ease-in-out;
    font-size: 18px;
    padding: 5px 15px;
    background: none;
    color: #1a3b5d;
    font-family: "Source Sans Pro", sans-serif;
    margin-bottom: 1rem;

    &:hover,
    &:focus {
      border-color: #3d9cff;
    }

    &:focus {
      box-shadow: 0px 10px 20px -13px rgba(32, 56, 117, 0.35);
    }
    &.-select {
      -webkit-appearance: none;
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAeCAYAAABuUU38AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAUxJREFUeNrM1sEJwkAQBdCsngXPHsQO9O5FS7AAMVYgdqAd2IGCDWgFnryLFQiCZ8EGnJUNimiyM/tnk4HNEAg/8y6ZmMRVqz9eUJvRaSbvutCZ347bXVJy/ZnvTmdJ862Me+hAbZCTs6GHpyUi1tTSvPnqTpoWZPUa7W7ncT3vK4h4zVejy8QzM3WhVUO8ykI6jOxoGA4ig3BLHcNFSCGqGAkig2yqgpEiMsjSfY9LxYQg7L6r0X6wS29YJiYQYecemY+wHrXD1+bklGhpAhBDeu/JfIVGxaAQ9sb8CI+CQSJ+QmJg0Ii/EE2MBiIXooHRQhRCkBhNhBcEhLkwf05ZCG8ICCOpk0MULmvDSY2M8UawIRExLIQIEgHDRoghihgRIgiigBEjgiFATBACAgFgghEwSAAGgoBCBBgYAg5hYKAIFYgHBo6w9RRgAFfy160QuV8NAAAAAElFTkSuQmCC');
      background-size: 12px;
      background-position: 90% center;
      background-repeat: no-repeat;
      padding-right: 30px;
    }
  }
  &-attendee-button{
    border: none;
    display: flex;
    align-items: center;
    background: transparent;
    & svg {
      margin-right:.5rem;
    }
  }
}
.home-page-link {
  & a{
  background-color: #3d9cff;
  border-radius: 5px;
  color: white;
  padding: .7rem .8rem;
  text-decoration: none;
  margin-top: 1.5rem;
  }
}
.form_buttons button.submitting::after {
  background:  #fff;
  color: #ccc;
  cursor: no-drop;
  opacity: 0.65;
  border-color: transparent transparent black black;
}
.opacity{
  opacity: 0.65;
}
.input-wrapper{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.ticket-number{
  color:#f77d24;
}
</style>

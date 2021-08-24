<template>
    <div class="wrapper">
    <div class="card-form">
      <div class="card-form__image-container">
        <div class="card-form__image">
          <img class="" src="/images/Rectangle 6.20avocado.png" alt="event">
        </div>
      </div>
      <validation-observer v-slot="{ handleSubmit, valid }">
      <form @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="reset" class="card-form__inner">
        <div class="card-input">
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
            <label for="phone-number" class="card-input__label">Phone Number</label>
            <input type="text" id="phone-number" name="phone-number" v-model="number" class="card-input__input" data-ref="cardNumber" autocomplete="off">
          </validation-provider>
        </div>
        <div class="card-form__row card-input">
          <div class="card-form__col">
            <div class="card-form__group">
              <validation-provider name="seats" v-slot='{ errors }' rules="required">
                <label for="seats" class="card-input__label">Number of Seats</label>
                <select name="seats" class="card-input__input -select" v-model="seats" data-ref="cardDate">
                  <option value="" disabled selected>seats</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </select>
                <span>{{ errors[0] }}</span>
              </validation-provider>
            </div>
          </div>
        </div>
        <div class="card-input">
          <validation-provider name="attendee" v-slot='{ errors }' rules="required">
            <label for="attendee" class="card-input__label">Number of Attendee(s)</label>
            <input type="number" name="attendee" id="attendee" v-model="attendees" class="card-input__input" data-ref="cardName" autocomplete="off">
            <span>{{ errors[0] }}</span>
          </validation-provider>
        </div>
        <flex justifyContent="space-between" flexWrap="wrap">
          <button :disabled="valid" type="submit" class="card-form__button">
            Submit
          </button>
          <button :disabled="valid" type="reset" class="card-form__button">
            Cancel
          </button>
        </flex>
        <flex justifyContent="center" class="home-page-link">
          <router-link to="/">
            Go Back to Events
          </router-link>
        </flex>
      </form>
      </validation-observer>
    </div>
  </div>
</template>

<script>
import { localize } from 'vee-validate';
import Flex from '@/components/design-system/Flex.vue';

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

export default {
  name: 'booking-form',
  components: {
    Flex,
  },
  data() {
    return {
      name: '',
      email: '',
      number: '',
      seats: null,
      attendees: null,
    };
  },
  methods: {
    onSubmit() {
      return console.log('Form has been submitted!');
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

.card-form {
  // max-width: 570px;
  display: flex;
  justify-content: space-around;
  margin: auto;
  width: 100%;
  padding: 15px 15px;
  box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);

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
    @media screen and (max-width: 480px) {
      padding: 25px;
      padding-top: 165px;
      width: 100%;
    }
    @media screen and (max-width: 360px) {
      padding: 15px;
      padding-top: 165px;
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
    width: 30%;
    height: 40px;
    background: #2364d2;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 500;
    font-family: "Source Sans Pro", sans-serif;
    box-shadow: 3px 10px 20px 0px rgba(35, 100, 210, 0.3);
    color: #fff;
    margin-top: 20px;
    cursor: pointer;

    @media screen and (max-width: 480px) {
      margin-top: 10px;
    }
  }
  &__image{
      height: 100%;
      // width: 100%;
      object-fit: cover;
      // box-shadow:  0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      & img{
        border-radius: 50%;
      }
      &-container{
      display: flex;
      flex-wrap: wrap;
      // width: 100%;
      position: relative;
      @media only screen and (max-width: 48em) {
        width: auto;
        justify-content: center;
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

  &.-active {
    .card-item__side {
      &.-front {
        transform: perspective(1000px) rotateY(180deg) rotateX(0deg)
          rotateZ(0deg);
      }
      &.-back {
        transform: perspective(1000px) rotateY(0) rotateX(0deg) rotateZ(0deg);
        // box-shadow: 0 20px 50px 0 rgba(81, 88, 206, 0.65);
      }
    }
  }

  &__focus {
    position: absolute;
    z-index: 3;
    border-radius: 5px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all 0.35s cubic-bezier(0.71, 0.03, 0.56, 0.85);
    opacity: 0;
    pointer-events: none;
    overflow: hidden;
    border: 2px solid rgba(255, 255, 255, 0.65);

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background: rgb(8, 20, 47);
      height: 100%;
      border-radius: 5px;
      filter: blur(25px);
      opacity: 0.5;
    }

    &.-active {
      opacity: 1;
    }
  }

  &__side {
    border-radius: 15px;
    overflow: hidden;
    // box-shadow: 3px 13px 30px 0px rgba(11, 19, 41, 0.5);
    box-shadow: 0 20px 60px 0 rgba(14, 42, 90, 0.55);
    transform: perspective(2000px) rotateY(0deg) rotateX(0deg) rotate(0deg);
    transform-style: preserve-3d;
    transition: all 0.8s cubic-bezier(0.71, 0.03, 0.56, 0.85);
    backface-visibility: hidden;
    height: 100%;

    &.-back {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      transform: perspective(2000px) rotateY(-180deg) rotateX(0deg) rotate(0deg);
      z-index: 2;
      padding: 0;
      height: 100%;

      .card-item__cover {
        transform: rotateY(-180deg)
      }
    }
  }
  &__bg {
    max-width: 100%;
    display: block;
    max-height: 100%;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  &__cover {
    height: 100%;
    background-color: #1c1d27;
    position: absolute;
    height: 100%;
    background-color: #1c1d27;
    left: 0;
    top: 0;
    width: 100%;
    border-radius: 15px;
    overflow: hidden;
    &:after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(6, 2, 29, 0.45);
    }
  }

  &__top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 40px;
    padding: 0 10px;

    @media screen and (max-width: 480px) {
      margin-bottom: 25px;
    }
    @media screen and (max-width: 360px) {
      margin-bottom: 15px;
    }
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
</style>

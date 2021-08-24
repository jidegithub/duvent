<template>
  <header class="nav-header-outer">
    <div class="nav-header-inner">
      <div class="nav-header--image">
        <img class="h-8" src="/images/logo-inverted.svg" alt="Workcation">
      </div>
      <div class="sm:hidden nav-header--button">
        <button @click="isOpen = !isOpen" type="button" class="">
          <svg class="" viewBox="0 0 24 24">
            <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
            <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>
      </div>
    </div>
    <nav :class="isOpen ? 'block' : 'hidden'" class="navigation-nav">
      <a href="#" class="navigation-nav-item">Dashboard</a>
      <a href="#" class="navigation-nav-item">Events</a>
      <a href="#" class="navigation-nav-item">Help</a>
      <a href="#" class="navigation-nav-item">Logout</a>
    </nav>
  </header>
</template>

<script lang="ts">
export default {
  name: 'navbar',
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
<style lang="scss" scoped>
  .block {
    display: block;
  }
  .hidden {
    display: none;
  }
  .nav-header{
    &-outer{
      background-color: rgba(17, 24, 39, 1);
      @media only screen and  (min-width: 640px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.75rem 1rem/* 16px */;
      };
    }
    &-inner{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0.75rem/* 16px */;
        @media (min-width: 640px) {
          padding: 0px;
        }
    }
    &--image{
      & img{
        height: 2rem/* 32px */;
      }
    }
    &--button{

      @media (min-width: 640px) {
        display: none;
      }
      & button{
        display: block;
        border: none;
        background: inherit;
        color: rgb(255, 255, 255);
        &:hover{
          color: rgba(255, 255, 255, 1);
        }
        &:focus{
          color: rgba(255, 255, 255, 1);
          outline: 2px solid transparent;
          outline-offset: 2px;
        }
        & svg{
          height: 1.5rem/* 24px */;
          width: 1.5rem/* 24px */;
          fill: currentColor;
        }
      }
    }
  }
  .navigation{
    &-nav{
      padding: 0.5rem 0.5rem 1rem 0.5rem/* 8px */;
      @media (min-width: 640px) {
        display: flex;
        padding: 0px;
      }
        &-item{
          display: block;
          padding: 0.8rem 0.5rem/* 4px */;
          color: rgba(255, 255, 255, 1);
          font-weight: 600;
          font-size: .9rem;
          text-decoration: none;
          border-radius: 0.25rem/* 4px */;
          margin-top: 0.25rem/* 4px */;
          &:first-child{
            margin-top: 0;
          }
          &:not(:first-child){
            @media (min-width: 640px) {
              margin-top: 0px;
              margin-left: 0.5rem/* 8px */;
            }
          }
          &:hover{
            background-color: rgba(31, 41, 55, 1);
            text-decoration: underline;
          }
      }
    }
  }
</style>

<template>
  <div>
    <div class="font-avenir">
      <NavBar/>
    </div>
    <div id="app" class="font-avenir">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/navbar/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  scroll-behavior: smooth;
  font-size: 62.5%;
  min-height: 100vh;
}
.font-avenir{
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
body{
  margin: 0;
}
</style>

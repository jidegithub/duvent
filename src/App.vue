<template>
  <div>
    <div class="font-avenir">
      <NavBar/>
      <SearchBar/>
    </div>
    <div id="app" class="font-avenir">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/navbar/NavBar.vue';
import SearchBar from '@/components/searchbar/SearchBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    SearchBar,
  },
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 20px;
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

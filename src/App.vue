<template>
  <div id="app">
    <navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from './components/navbar'

export default {
  name: 'App',
  components: {
    navbar
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  margin: 0;
  padding: 0;
}
</style>

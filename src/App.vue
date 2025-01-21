<script setup>
import { RouterView } from 'vue-router'
import NavBarComponent from './components/NavBarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <div id="app">
    <NavBarComponent />
    <router-view></router-view>
    <FooterComponent />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>

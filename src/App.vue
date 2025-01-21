<script setup>
import { RouterView } from 'vue-router'
import NavBarComponent from './components/NavBarComponent.vue'
</script>

<template>
  <div id="app" class="bg-dark">
    <NavBarComponent />
    <router-view></router-view>
    <footer>
      <a href="https://www.flaticon.com/fr/icones-gratuites/france" title="france icônes"
        >France icônes créées par Freepik - Flaticon</a
      >
      <a href="https://www.flaticon.com/fr/icones-gratuites/royaume-uni" title="royaume-uni icônes"
        >Royaume-uni icônes créées par Freepik - Flaticon</a
      >
    </footer>
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

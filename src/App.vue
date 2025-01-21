<script setup>
import { RouterView } from 'vue-router'
import NavBarComponent from './components/NavBarComponent.vue'
</script>

<template>
  <div id="app">
    <NavBarComponent />
    <router-view></router-view>
    <footer>
      <a href="https://www.flaticon.com/fr/icones-gratuites/france" title="france icônes"
        >France icônes créées par Freepik - Flaticon</a
      >
      <a href="https://www.flaticon.com/fr/icones-gratuites/royaume-uni" title="royaume-uni icônes"
        >Royaume-uni icônes créées par Freepik - Flaticon</a
      >
      <a href="https://www.flaticon.com/fr/icones-gratuites/travail" title="travail icônes"
        >Travail icônes créées par Sicon - Flaticon</a
      >
      <a href="https://www.flaticon.com/fr/icones-gratuites/etude" title="étude icônes"
        >Étude icônes créées par kmg design - Flaticon</a
      >
      <a href="https://www.flaticon.com/fr/icones-gratuites/education" title="éducation icônes"
        >Éducation icônes créées par Freepik - Flaticon</a
      >
      <a href="https://www.flaticon.com/fr/icones-gratuites/utilisateur" title="utilisateur icônes"
        >Utilisateur icônes créées par Eucalyp - Flaticon</a
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

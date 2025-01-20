<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Experience from './components/ExperienceComponent.vue'
</script>

<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">My Portfolio</a>
        <div class="d-flex">
          <button class="btn btn-outline-success" @click="changeLanguage('en')">EN</button>
          <button class="btn btn-outline-success ms-2" @click="changeLanguage('fr')">FR</button>
        </div>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/Experience">About</RouterLink>
      </div>
    </nav>
    <Experience />

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    changeLanguage(language) {
      this.$i18n.locale = language
    },
  },
}
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>

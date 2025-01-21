<template>
  <nav class="navbar navbar-expand-lg px-5">
    <div class="container-fluid">
      <RouterLink class="navbar-brand text-white" to="/">Marion BERNARD</RouterLink>
      <RouterLink class="link-white" to="/">{{ $t('presentation.label') }}</RouterLink>
      <RouterLink class="link-white" to="/Experience">{{ $t('experience.label') }}</RouterLink>
      <RouterLink class="link-white" to="/Skills">{{ $t('skills') }}</RouterLink>
      <RouterLink to="/Projects" class="link-white">{{ $t('projects') }}</RouterLink>
      <RouterLink to="/Contact" class="link-white">{{ $t('contact') }}</RouterLink>
      <div class="d-flex">
        <button class="btn" @click="changeLanguage('en')">
          <img src="@/assets/flags/english-flag.png" alt="English" width="30" />
        </button>
        <button class="btn ms-2" @click="changeLanguage('fr')">
          <img src="@/assets/flags/french-flag.png" alt="French" width="30" />
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBarComponent',
  methods: {
    changeLanguage(language) {
      this.$i18n.locale = language
    },
  },
}
</script>

<style scoped>
.router-link-active:not(.navbar-brand) {
  color: var(--custom-accent-1);
  font-weight: 700;
}
</style>

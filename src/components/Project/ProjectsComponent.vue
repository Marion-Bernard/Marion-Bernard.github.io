<template>
  <div class="container text-center text-white my-3">
    <h1>{{ $t('projects.label') }}</h1>
    <div v-if="$i18n.locale === 'fr'">
      <p>&#x1F477; Chantier en cours</p>
    </div>
    <div v-else>
      <p>&#x1F477; Work in progress</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsComponent',
}
</script>

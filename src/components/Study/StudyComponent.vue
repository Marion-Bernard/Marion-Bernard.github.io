<script>
import datas from '@/assets/data/data.json'
import StudyCard from './StudyCard.vue'

export default {
  name: 'StudyComponent',
  data() {
    return {
      studies: datas.study, // Chargement des données du JSON
    }
  },
  components: {
    StudyCard,
  },
}
</script>

<template>
  <div class="container text-center text-white my-3">
    <h1 class="mb-2">{{ $t('study.label') }}</h1>

    <div class="experience-list text-left row mt-4 g-4 d-flex align-items-stretch">
      <StudyCard
        v-for="study in studies"
        :key="study.id"
        :institution="study.institution"
        :programFr="study.programFr"
        :programEn="study.programEn"
        :date="study.date"
        :descriptionFr="study.descriptionFr"
        :descriptionEn="study.descriptionEn"
        :image="study.image"
      />
    </div>
  </div>
</template>

<style scoped>
button.active {
  background-color: var(--custom-accent-1);
  border-color: var(--custom-accent-1);
  color: #fff;
}
</style>

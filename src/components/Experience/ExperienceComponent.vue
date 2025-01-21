<script>
import datas from '@/assets/data/data.json'
import ExperienceCard from './ExperienceCard.vue'

export default {
  name: 'ExperienceComponent',
  data() {
    return {
      workingExperience: datas.workingExperience, // Chargement des données du JSON
      filteredExperiences: datas.workingExperience,
      activeButton: 'all',
    }
  },
  components: {
    ExperienceCard,
  },
  methods: {
    filterCards(type) {
      if (type === 'all') {
        this.filteredExperiences = this.workingExperience
      } else {
        this.filteredExperiences = this.workingExperience.filter((card) => card.type === type)
      }
      this.activeButton = type
    },
  },
}
</script>

<template>
  <div class="container text-center text-white my-3">
    <h1 class="mb-2">{{ $t('experience.label') }}</h1>
    <div class="selection-container mt-4">
      <button
        :class="{ active: activeButton === 'work' }"
        class="btn btn-small btn-light mx-3"
        @click="filterCards('work')"
      >
        {{ $t('main.work') }}
      </button>
      <button
        :class="{ active: activeButton === 'internship' }"
        class="btn btn-small btn-light mx-3"
        @click="filterCards('internship')"
      >
        {{ $t('main.internship') }}
      </button>
      <button
        :class="{ active: activeButton === 'voluntering' }"
        class="btn btn-small btn-light mx-3"
        @click="filterCards('voluntering')"
      >
        {{ $t('main.voluntering') }}
      </button>
      <button
        :class="{ active: activeButton === 'all' }"
        class="btn btn-small btn-light mx-3"
        @click="filterCards('all')"
      >
        {{ $t('main.all') }}
      </button>
    </div>

    <div class="experience-list text-left row mt-4 g-4 d-flex align-items-stretch">
      <ExperienceCard
        v-for="experience in filteredExperiences"
        :key="experience.id"
        :company="experience.company"
        :link="experience.link"
        :positionFr="experience.positionFr"
        :positionEn="experience.positionEn"
        :startDate="experience.startDate"
        :endDate="experience.endDate"
        :type="experience.type"
        :icon="experience.icon"
        :descriptionFr="experience.descriptionFr"
        :descriptionEn="experience.descriptionEn"
        :image="experience.image"
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

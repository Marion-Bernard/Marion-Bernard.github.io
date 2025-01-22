<script setup>
import SkillsCard from './SkillsCard.vue'
import datas from '@/assets/data/data.json'
</script>

<template>
  <div class="container text-center text-white my-3">
    <h1>{{ $t('skill.label') }}</h1>
    <div class="skill-list mt-4 g-4 d-flex flex-row flex-wrap align-items-stretch">
      <SkillsCard
        v-for="skill in skills"
        :key="skill.id"
        :title="skill.title"
        :logo="skill.logo"
        :tag="skill.tag"
        :level="skill.level"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillsComponent',
  components: {
    SkillsCard,
  },
  data() {
    return {
      skills: datas.skill,
    }
  },
}
</script>

<style scoped></style>

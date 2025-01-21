<template>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="experience-card mx-3 p-3">
      <a class="image-container" :href="link" target="_blank">
        <img :src="image" :alt="company" class="company-logo" />
      </a>
      <div class="content-container text-black text-left">
        <p>
          {{ startDate }} - <span v-if="endDate === 'today'">{{ $t('experience.today') }}</span>
          <span v-else>{{ endDate }}</span>
        </p>
        <p class="accent title-6">
          <img :src="icon" :alt="icon" class="icon me-3" width="30px" />{{
            $i18n.locale === 'fr' ? positionFr : positionEn
          }}
        </p>
        <p class="text-left">{{ $i18n.locale === 'fr' ? descriptionFr : descriptionEn }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperienceCard',
  props: {
    company: String,
    link: String,
    positionFr: String,
    positionEn: String,
    startDate: String,
    endDate: String,
    type: String,
    icon: String,
    descriptionFr: String,
    descriptionEn: String,
    image: String,
  },
}
</script>

<style scoped>
.experience-card {
  border: 1px solid #ddd;
  border-radius: 15px;
  background-color: #fff;
  height: 100%;
}

.company-logo {
  margin-bottom: 8px;
  width: 100%;
  max-width: 300px;
  height: auto;
  object-fit: contain;
}

.image-container {
  width: 100%;
  overflow: hidden;
}

.text-left {
  text-align: left;
}
</style>

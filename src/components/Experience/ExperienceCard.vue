<template>
  <div class="col-12 col-md-6 col-lg-3">
    <div class="experience-card rounded mx-3">
      <a class="image-container rounded-top p-2" :href="link" target="_blank">
        <img :src="image" :alt="company" class="company-logo" />
      </a>
      <div class="content-container text-black text-left pt-2 px-3 rounded-bottom">
        <p class="text-center">
          {{ startDate }} -
          <span v-if="endDate === 'today'">{{ $t('experience.today') }}</span>
          <span v-else>{{ endDate }}</span>
        </p>
        <p class="accent title-6">
          <img :src="icon" :alt="icon" class="icon me-3" width="30px" />
          {{ $i18n.locale === 'fr' ? positionFr : positionEn }}
        </p>
        <div class="button-container d-flex flex-row-reverse">
          <button @click="toggleDescription" class="btn btn-toggle-description">
            {{ isDescriptionVisible ? '&uarr;' : '&darr;' }}
          </button>
        </div>

        <p v-if="isDescriptionVisible" class="text-left">
          {{ $i18n.locale === 'fr' ? descriptionFr : descriptionEn }}
        </p>
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
  data() {
    return {
      isDescriptionVisible: false,
    }
  },
  methods: {
    toggleDescription() {
      this.isDescriptionVisible = !this.isDescriptionVisible
    },
  },
}
</script>

<style scoped>
.experience-card {
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100%;
}
.company-logo {
  width: 100%;
  max-width: 200px;
  height: auto;
  object-fit: contain;
}
.image-container {
  width: 100%;
  overflow: hidden;
  background-color: #fff;
}
.content-container {
  background-color: rgb(232, 245, 255);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.text-left {
  text-align: left;
}
p {
  margin-bottom: 0.5rem;
}
</style>

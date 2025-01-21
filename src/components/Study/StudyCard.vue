<template>
  <div class="col-6 col-sm-4 col-md-3 col-lg-2">
    <div class="study-card rounded mx-3">
      <a class="image-container rounded-top p-2" :href="link" target="_blank">
        <img :src="image" :alt="company" class="school-logo" />
      </a>
      <div class="content-container text-black text-left px-3 pb-2 rounded-bottom">
        <p class="text-center">{{ date }}</p>
        <p class="accent title-6 text-center">
          {{ institution }}
        </p>
        <p>
          {{ $i18n.locale === 'fr' ? programFr : programEn }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudyCard',
  props: {
    institution: String,
    programFr: String,
    programEn: String,
    date: String,
    image: String,
  },
}
</script>

<style scoped>
.study-card {
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100%;
  width: 100%;
}

.school-logo {
  width: 100%;
  max-width: 75px;
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
  margin-bottom: 0px;
}
</style>

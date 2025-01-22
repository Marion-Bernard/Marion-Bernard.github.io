<template>
  <div class="skill-card mx-3 my-4">
    <div class="image-container p-2">
      <img :src="logo" :alt="title" class="skill-logo" />
    </div>
    <div class="content-container text-white text-left px-3 pb-2">
      <p class="text-center accent">{{ title }}</p>
      <div class="progress">
        <div
          class="progress-bar progress-bar-stripped"
          role="progressbar"
          :style="{ width: progress + '%' }"
          :aria-valuenow="progress"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudyCard',
  props: {
    title: String,
    tag: String,
    logo: String,
    level: Number,
  },
  computed: {
    progress() {
      return (this.level / 5) * 100
    },
  },
}
</script>

<style scoped>
.skill-card {
  display: grid;
  grid-template-rows: auto 1fr;
  /*height: 100%;*/
  min-width: 115px;
}

.skill-logo {
  width: 100%;
  max-height: 50px;
  width: auto;
  object-fit: contain;
}

.image-container {
  width: 100%;
  overflow: hidden;
}
.content-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.text-left {
  text-align: left;
}
.progress,
.progress-bar {
  height: 10px;
}
.progress-bar {
  background-color: var(--custom-accent-1);
}
p {
  margin-bottom: 5px;
}
</style>

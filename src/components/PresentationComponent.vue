<template>
  <div class="text-center text-white my-5">
    <h1>{{ $t('welcome.title') }}</h1>
    <p class="text-white">{{ $t('welcome.subtitle') }}</p>
    <div class="presentation-container">
      <div class="img-container">
        <img src="@/assets/portfolio.png" alt="image-de-presentation" width="400" />
      </div>
      <div class="text-container">
        <p class="text-white"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PresentationComponent',
}
</script>

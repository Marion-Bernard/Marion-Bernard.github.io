<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="footer-container d-flex g-4 mt-4">
    <a href="https://www.linkedin.com/in/marion-bernard/" target="_blank">
      <img class="img-logo" src="/icons/icon-linkedin.png" />
    </a>
    <a href="https://github.com/Marion-Bernard" target="_blank">
      <img class="img-logo" src="/icons/icon-github.png" />
    </a>
    <RouterLink class="link-white" to="/Credits">&copy; Copyright</RouterLink>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
}
</script>

<style>
.footer-container {
  min-height: 50px;
  gap: 40px;
  justify-content: center;
}

.img-logo {
  height: 30px;
  transition: height 0.3s ease;
}
.img-logo:hover {
  height: 32px;
}
</style>

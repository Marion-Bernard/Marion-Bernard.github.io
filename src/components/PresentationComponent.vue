<template>
  <div class="container-md">
    <div class="text-center text-white my-5">
      <h1>{{ $t('presentation.title') }}</h1>
    </div>

    <div class="presentation-container">
      <div class="img-container">
        <img src="@/assets/portfolio.png" alt="image-de-presentation" width="400" />
      </div>

      <div class="text-container col-9 text-white">
        <!-- Paragraphe en français -->
        <div v-if="$i18n.locale === 'fr'">
          <h2 class="title mb-4">Bonjour, je suis <span class="accent"> Marion </span>!</h2>
          <p>
            Je suis <span class="accent">ingénieur agronome</span>, passionnée par la nature et la
            <span class="accent">préservation de l'environnement.</span> J'ai travaillé pendant 5
            ans dans une association de protection de l'environnement, où j'ai acquis une solide
            expérience dans la <span class="accent">gestion de projets </span> environnementaux.
          </p>
          <p>
            En 2023, j'ai décidé de me
            <span class="accent">réorienter vers le développement web</span>, une nouvelle passion
            qui me permet de combiner ma curiosité technique et mon engagement pour un avenir
            durable.
          </p>
          <p>
            L'aventure commence donc par une année en alternance en tant que
            <span class="accent">Développeuse Web </span>, au sein de la société Articque by
            Chapsvision. Elle se poursuit cette année par une 2ème année d'alternance en tant que
            <span class="accent">Conceptrice Développeuse d'Application.</span>
          </p>
          <p>Affaire à suivre !</p>
        </div>

        <!-- Paragraphe en anglais -->
        <div v-if="$i18n.locale === 'en'">
          <h2 class="title mb-4">Hello, I'm <span class="accent"> Marion </span>!</h2>
          <p>
            I am a <span class="accent">Agronomist</span>, passionate about nature and
            <span class="accent">environmental conservation.</span> I worked for 5 years in an
            environmental protection association, where I gained solid experience in
            <span class="accent">project management</span> for environmental initiatives.
          </p>
          <p>
            In 2023, I decided to <span class="accent">transition into web development</span>, a new
            passion that allows me to combine my technical curiosity with my commitment to a
            sustainable future.
          </p>
          <p>
            The adventure started with a year in a work-study program as a
            <span class="accent">Web Developer</span> at Articque by Chapsvision. This year, I am
            continuing with a second year of work-study as a
            <span class="accent">Application Developer and Designer.</span>
          </p>
          <p>Stay tuned!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PresentationComponent',
}
</script>

<style>
.title {
  margin-top: 0;
  font-weight: 700;
}

.accent {
  color: var(--custom-accent-2);
  font-weight: 700;
}

.presentation-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 30px;
}
</style>

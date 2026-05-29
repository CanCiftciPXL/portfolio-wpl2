<script setup>
import RevealSection from './RevealSection.vue'

defineProps({
  projects: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <RevealSection id="projects" class="content-section section-shell">
    <div class="section-heading projects-heading">
      <p class="section-kicker">Geselecteerd werk</p>
      <h2>Projecten met focus op techniek, presentatie en leerproces.</h2>
      <p>
        Elk project laat een ander onderdeel zien: interface, logica, hulpmiddelen, debuggen en
        reflectie.
      </p>
    </div>

    <div class="project-showcase">
      <article v-for="project in projects" :key="project.title" class="project-card">
        <div class="project-image">
          <img :src="project.image" :alt="project.title" />
        </div>

        <div class="project-content">
          <p>{{ project.category }}</p>
          <h3>{{ project.title }}</h3>
          <span>{{ project.text }}</span>

          <div class="tag-row">
            <small v-for="tag in project.tags" :key="tag">{{ tag }}</small>
          </div>
        </div>
      </article>
    </div>
  </RevealSection>
</template>

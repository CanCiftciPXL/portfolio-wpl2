<script setup>
import RevealSection from './RevealSection.vue'

defineProps({
  about: {
    type: Object,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <RevealSection id="about" class="content-section section-shell">
    <div class="section-heading">
      <p class="section-kicker">{{ about.eyebrow }}</p>
      <h2>{{ about.title }}</h2>
      <p>{{ about.text }}</p>
    </div>

    <div class="about-layout">
      <div class="highlight-list">
        <article v-for="item in about.highlights" :key="item">
          <span aria-hidden="true"></span>
          <p>{{ item }}</p>
        </article>
      </div>

      <div class="skill-grid" aria-label="Vaardigheden">
        <article v-for="skill in skills" :key="skill.name" class="skill-card">
          <span>{{ skill.mark }}</span>
          <div>
            <h3>{{ skill.name }}</h3>
            <p>{{ skill.type }}</p>
          </div>
        </article>
      </div>
    </div>
  </RevealSection>
</template>

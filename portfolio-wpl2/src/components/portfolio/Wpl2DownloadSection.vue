<script setup>
import RevealSection from './RevealSection.vue'

defineProps({
  document: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <RevealSection
    id="eindreflectie"
    class="wpl-section section-shell wpl-section--alt"
  >
    <div class="wpl2-download">
      <div class="wpl2-download__copy">
        <h2 class="wpl-section__title">{{ document.title }}</h2>
        <p>{{ document.description }}</p>
      </div>

      <div class="wpl2-download__actions">
        <a
          class="button button-primary wpl2-download__btn"
          :href="document.href"
          :download="document.fileName"
        >
          {{ document.buttonLabel }}
        </a>
        <a
          class="button button-ghost wpl2-download__btn"
          :href="document.href"
          target="_blank"
          rel="noopener noreferrer"
        >
          PDF bekijken
        </a>
      </div>
    </div>
  </RevealSection>
</template>

<script setup>
import RevealSection from './RevealSection.vue'

defineProps({
  intro: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <RevealSection id="inleiding" class="wpl-section section-shell">
    <h2 class="wpl-section__title">{{ intro.title }}</h2>
    <div class="wpl-prose">
      <p v-for="(paragraph, index) in intro.paragraphs" :key="index">{{ paragraph }}</p>
    </div>
  </RevealSection>
</template>

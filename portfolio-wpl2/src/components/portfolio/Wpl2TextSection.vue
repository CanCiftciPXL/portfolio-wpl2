<script setup>
import RevealSection from './RevealSection.vue'

defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  paragraphs: {
    type: Array,
    required: true,
  },
  alt: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <RevealSection
    :id="id"
    class="wpl-section section-shell content-section"
    :class="{ 'wpl-section--alt': alt }"
  >
    <h2 class="wpl-section__title">{{ title }}</h2>
    <div class="wpl-prose">
      <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
    </div>
  </RevealSection>
</template>

<script setup>
import RevealSection from './RevealSection.vue'

defineProps({
  logbook: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <RevealSection id="logboek" class="wpl-section section-shell wpl-section--alt">
    <h2 class="wpl-section__title">{{ logbook.title }}</h2>
    <figure class="wpl-figure">
      <img :src="logbook.image" :alt="logbook.alt" />
    </figure>
  </RevealSection>
</template>

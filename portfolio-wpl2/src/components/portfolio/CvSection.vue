<script setup>
import RevealSection from './RevealSection.vue'

defineProps({
  id: {
    type: String,
    required: true,
  },
  alt: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <RevealSection :id="id" class="cv-section" :class="{ 'cv-section--alt': alt }">
    <div class="cv-section__inner">
      <slot />
    </div>
  </RevealSection>
</template>

<style scoped>
.cv-section {
  width: 100%;
  max-width: none;
  padding-top: 5.5rem;
  padding-bottom: 5.5rem;
  background: var(--bg);
  box-sizing: border-box;
}

.cv-section--alt {
  background: var(--bg-card);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.cv-section__inner {
  max-width: 1120px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  box-sizing: border-box;
}

@media (max-width: 900px) {
  .cv-section__inner {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
}
</style>

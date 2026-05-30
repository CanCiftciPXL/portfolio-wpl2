<script setup>
import RevealSection from './RevealSection.vue'

defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
  alt: {
    type: Boolean,
    default: false,
  },
  prose: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <RevealSection :id="id" class="wpl-section" :class="{ 'wpl-section--alt': alt }">
    <div class="wpl-section__inner">
      <h2 v-if="title" class="wpl-section__title">{{ title }}</h2>
      <div v-if="prose" class="wpl-prose">
        <slot />
      </div>
      <slot v-else />
    </div>
  </RevealSection>
</template>

<style scoped>
.wpl-section {
  width: 100%;
  max-width: none;
  padding-top: 5.5rem;
  padding-bottom: 5.5rem;
  background: var(--bg);
  box-sizing: border-box;
}

.wpl-section--alt {
  background: var(--bg-card);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.wpl-section__inner {
  max-width: 1120px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  box-sizing: border-box;
}

.wpl-section__title {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.75rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border);
}

.wpl-prose :deep(p) {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.85;
  margin-bottom: 1rem;
  max-width: 72ch;
}

.wpl-prose :deep(p:last-child) {
  margin-bottom: 0;
}

@media (max-width: 900px) {
  .wpl-section__inner {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
}
</style>

<script setup>
import RevealSection from './RevealSection.vue'

defineProps({
  reflections: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <RevealSection id="reflectie" class="wpl-section section-shell content-section">
    <h2 class="wpl-section__title">Reflectie</h2>

    <article v-for="(item, index) in reflections" :key="item.title" class="wpl-reflection">
      <h3>{{ item.title }}</h3>

      <template v-if="item.blocks">
        <div v-for="block in item.blocks" :key="block.label" class="wpl-reflection__block">
          <strong>{{ block.label }}</strong>
          <p>{{ block.text }}</p>
        </div>
      </template>

      <div v-else class="wpl-prose">
        <p v-for="(paragraph, pIndex) in item.paragraphs" :key="pIndex">{{ paragraph }}</p>
      </div>

      <hr v-if="index < reflections.length - 1" class="wpl-divider" />
    </article>
  </RevealSection>
</template>

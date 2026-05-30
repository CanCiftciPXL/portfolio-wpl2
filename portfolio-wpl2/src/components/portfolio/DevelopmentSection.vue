<script setup>
import RevealSection from './RevealSection.vue'

defineProps({
  sections: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <RevealSection id="ontwikkeling" class="wpl-section section-shell">
    <h2 class="wpl-section__title">Ontwikkeling</h2>

    <article
      v-for="section in sections"
      :id="section.id"
      :key="section.id"
      class="wpl-role"
    >
      <h3>{{ section.title }}</h3>

      <template v-if="section.blocks">
        <div v-for="(block, index) in section.blocks" :key="index" class="wpl-role__block">
          <h4 v-if="block.subtitle">{{ block.subtitle }}</h4>
          <div class="wpl-prose">
            <p v-for="(paragraph, pIndex) in block.paragraphs" :key="pIndex">{{ paragraph }}</p>
          </div>
        </div>
      </template>

      <div v-else class="wpl-prose">
        <p v-for="(paragraph, index) in section.paragraphs" :key="index">{{ paragraph }}</p>
      </div>
    </article>
  </RevealSection>
</template>

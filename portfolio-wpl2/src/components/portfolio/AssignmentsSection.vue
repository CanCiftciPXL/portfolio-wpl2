<script setup>
import RevealSection from './RevealSection.vue'

defineProps({
  assignments: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <RevealSection id="opdrachten" class="wpl-section section-shell content-section wpl-section--alt">
    <h2 class="wpl-section__title">Opdrachten</h2>

    <article v-for="(item, index) in assignments" :key="item.title" class="wpl-assignment">
      <h3>{{ item.title }}</h3>
      <div class="wpl-prose">
        <p v-for="(paragraph, pIndex) in item.paragraphs" :key="pIndex">{{ paragraph }}</p>
      </div>
      <figure class="wpl-figure wpl-figure--assignment">
        <img :src="item.image" :alt="item.alt" />
      </figure>
      <hr v-if="index < assignments.length - 1" class="wpl-divider" />
    </article>
  </RevealSection>
</template>

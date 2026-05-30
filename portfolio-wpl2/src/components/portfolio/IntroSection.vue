<script setup>
import WplSection from './WplSection.vue'

defineProps({
  intro: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <WplSection id="inleiding" :title="intro.title" prose>
    <p v-for="(paragraph, index) in intro.paragraphs" :key="index">{{ paragraph }}</p>
  </WplSection>
</template>

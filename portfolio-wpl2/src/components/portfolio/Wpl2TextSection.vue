<script setup>
import WplSection from './WplSection.vue'

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
  <WplSection :id="id" :title="title" :alt="alt" prose>
    <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
  </WplSection>
</template>

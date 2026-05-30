<script setup>
import WplSection from './WplSection.vue'

defineProps({
  logbook: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <WplSection id="logboek" :title="logbook.title" alt>
    <figure class="figure">
      <img :src="logbook.image" :alt="logbook.alt" />
    </figure>
  </WplSection>
</template>

<style scoped>
.figure {
  margin-top: 1.5rem;
}

.figure img {
  width: 100%;
  max-width: 900px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
}
</style>

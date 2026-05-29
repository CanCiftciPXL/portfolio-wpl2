<script setup>
import RevealSection from './RevealSection.vue'

defineProps({
  timeline: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <RevealSection id="timeline" class="content-section section-shell">
    <div class="section-heading timeline-heading">
      <p class="section-kicker">Ervaring</p>
      <h2>Een groeipad van IT-basis naar professionele softwareontwikkeling.</h2>
    </div>

    <div class="timeline">
      <article v-for="item in timeline" :key="item.title" class="timeline-item">
        <time>{{ item.year }}</time>
        <div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </div>
      </article>
    </div>
  </RevealSection>
</template>

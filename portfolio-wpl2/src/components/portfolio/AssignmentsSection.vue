<script setup>
import WplSection from './WplSection.vue'

defineProps({
  assignments: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <WplSection id="opdrachten" title="Opdrachten" alt>
    <article v-for="(item, index) in assignments" :key="item.title" class="assignment">
      <h3>{{ item.title }}</h3>
      <div class="prose">
        <p v-for="(paragraph, pIndex) in item.paragraphs" :key="pIndex">{{ paragraph }}</p>
      </div>
      <figure class="figure">
        <img :src="item.image" :alt="item.alt" />
      </figure>
      <hr v-if="index < assignments.length - 1" class="divider" />
    </article>
  </WplSection>
</template>

<style scoped>
.assignment {
  margin-bottom: 2rem;
}

.assignment h3 {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.prose p {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.85;
  margin-bottom: 1rem;
  max-width: 72ch;
}

.prose p:last-child {
  margin-bottom: 0;
}

.figure {
  margin-top: 1.5rem;
}

.figure img {
  width: 100%;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
}

.divider {
  border: none;
  border-top: 1px solid var(--border);
  margin: 2.5rem 0;
}
</style>

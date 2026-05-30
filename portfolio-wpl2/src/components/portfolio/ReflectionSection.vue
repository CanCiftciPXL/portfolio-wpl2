<script setup>
import WplSection from './WplSection.vue'

defineProps({
  reflections: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <WplSection id="reflectie" title="Reflectie">
    <article v-for="(item, index) in reflections" :key="item.title" class="reflection">
      <h3>{{ item.title }}</h3>

      <template v-if="item.blocks">
        <div v-for="block in item.blocks" :key="block.label" class="reflection__block">
          <strong>{{ block.label }}</strong>
          <p>{{ block.text }}</p>
        </div>
      </template>

      <div v-else class="prose">
        <p v-for="(paragraph, pIndex) in item.paragraphs" :key="pIndex">{{ paragraph }}</p>
      </div>

      <hr v-if="index < reflections.length - 1" class="divider" />
    </article>
  </WplSection>
</template>

<style scoped>
.reflection {
  margin-bottom: 2rem;
}

.reflection h3 {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.reflection__block {
  margin-bottom: 1.25rem;
}

.reflection__block strong {
  display: block;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent);
  margin-bottom: 0.35rem;
}

.reflection__block p {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.8;
  max-width: 72ch;
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

.divider {
  border: none;
  border-top: 1px solid var(--border);
  margin: 2.5rem 0;
}
</style>

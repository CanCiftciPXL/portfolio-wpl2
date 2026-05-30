<script setup>
import WplSection from './WplSection.vue'

defineProps({
  sections: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <WplSection id="ontwikkeling" title="Ontwikkeling">
    <article
      v-for="section in sections"
      :id="section.id"
      :key="section.id"
      class="role"
    >
      <h3>{{ section.title }}</h3>

      <template v-if="section.blocks">
        <div v-for="(block, index) in section.blocks" :key="index" class="role__block">
          <h4 v-if="block.subtitle">{{ block.subtitle }}</h4>
          <div class="prose">
            <p v-for="(paragraph, pIndex) in block.paragraphs" :key="pIndex">{{ paragraph }}</p>
          </div>
        </div>
      </template>

      <div v-else class="prose">
        <p v-for="(paragraph, index) in section.paragraphs" :key="index">{{ paragraph }}</p>
      </div>
    </article>
  </WplSection>
</template>

<style scoped>
.role {
  margin-bottom: 2.5rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid var(--border);
}

.role:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.role h3 {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 1rem;
}

.role h4 {
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.role__block {
  margin-bottom: 1.25rem;
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
</style>

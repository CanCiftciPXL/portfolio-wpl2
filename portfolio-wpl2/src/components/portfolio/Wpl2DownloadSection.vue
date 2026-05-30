<script setup>
import AppButton from './AppButton.vue'
import WplSection from './WplSection.vue'

defineProps({
  document: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <WplSection id="eindreflectie" alt>
    <div class="download">
      <div class="download__copy">
        <h2 class="download__title">{{ document.title }}</h2>
        <p>{{ document.description }}</p>
      </div>

      <div class="download__actions">
        <AppButton
          variant="primary"
          :href="document.href"
          :download="document.fileName"
        >
          {{ document.buttonLabel }}
        </AppButton>
        <AppButton
          :href="document.href"
          target="_blank"
          rel="noopener noreferrer"
        >
          PDF bekijken
        </AppButton>
      </div>
    </div>
  </WplSection>
</template>

<style scoped>
.download {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem 2.25rem;
  background: var(--bg-raised);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
}

.download__copy {
  flex: 1;
  min-width: 240px;
}

.download__title {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.download__copy p {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 52ch;
}

.download__actions {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex-shrink: 0;
}

.download__actions :deep(.btn) {
  text-align: center;
  white-space: nowrap;
}
</style>

<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped>
.card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  transition: border-color 0.25s, box-shadow 0.25s;
}

.card:hover {
  border-color: var(--border-mid);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
}
</style>

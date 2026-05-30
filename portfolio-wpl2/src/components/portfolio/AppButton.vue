<script setup>
import { RouterLink } from 'vue-router'
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'ghost',
    validator: (v) => ['primary', 'ghost'].includes(v),
  },
  to: {
    type: [String, Object],
    default: null,
  },
  href: {
    type: String,
    default: null,
  },
  download: {
    type: String,
    default: null,
  },
  target: {
    type: String,
    default: null,
  },
  rel: {
    type: String,
    default: null,
  },
})

const tag = computed(() => {
  if (props.to) return RouterLink
  return 'a'
})

const linkProps = computed(() => {
  if (props.to) return { to: props.to }
  return {
    href: props.href,
    download: props.download || undefined,
    target: props.target || undefined,
    rel: props.rel || undefined,
  }
})
</script>

<template>
  <component :is="tag" class="btn" :class="`btn--${variant}`" v-bind="linkProps">
    <slot />
  </component>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none;
  padding: 0.7rem 1.35rem;
  border-radius: var(--radius);
  border: 1.5px solid transparent;
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s;
  letter-spacing: 0.02em;
  cursor: pointer;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn--primary {
  background: var(--accent);
  color: var(--bg);
  border-color: var(--accent);
}

.btn--primary:hover {
  filter: brightness(1.05);
}

.btn--ghost {
  background: transparent;
  color: var(--text-primary);
  border-color: var(--border-mid);
}

.btn--ghost:hover {
  border-color: var(--accent);
  color: var(--accent);
}
</style>

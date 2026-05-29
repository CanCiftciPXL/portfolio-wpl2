<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const section = ref(null)
const isVisible = ref(false)
let observer

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.18 },
  )

  if (section.value) {
    observer.observe(section.value)
  }
})

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<template>
  <section ref="section" class="reveal-section" :class="{ 'is-visible': isVisible }">
    <slot />
  </section>
</template>

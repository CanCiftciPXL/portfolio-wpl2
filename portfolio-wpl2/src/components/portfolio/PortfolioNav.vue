<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  profile: {
    type: Object,
    required: true,
  },
})

const isOpen = ref(false)
const route  = useRoute()

const closeMenu = () => { isOpen.value = false }
</script>

<template>
  <header class="site-nav">
    <RouterLink class="nav-brand" to="/" @click="closeMenu">
      <span class="brand-mark">CC</span>
      <span>
        <strong>{{ profile.name }}</strong>
        <small>{{ profile.role }}</small>
      </span>
    </RouterLink>

    <button
      class="nav-toggle"
      type="button"
      :aria-expanded="isOpen"
      aria-label="Menu openen"
      @click="isOpen = !isOpen"
    >
      <span></span>
      <span></span>
    </button>

    <nav class="nav-links" :class="{ 'is-open': isOpen }" aria-label="Hoofdnavigatie">
      <template v-if="route.path === '/'">
        <a v-for="item in items" :key="item.href" :href="item.href" @click="closeMenu">
          {{ item.label }}
        </a>
      </template>

      <RouterLink v-if="route.path !== '/'" to="/" @click="closeMenu">Portfolio</RouterLink>
      <RouterLink to="/cv" class="nav-cv-btn" @click="closeMenu">CV</RouterLink>
    </nav>
  </header>
</template>
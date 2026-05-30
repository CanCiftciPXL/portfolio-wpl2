<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  profile: {
    type: Object,
    required: true,
  },
  traject: {
    type: String,
    default: 'wpl1',
  },
})

const isOpen = ref(false)
const openDropdown = ref(null)
const isMobileNav = ref(false)
const route = useRoute()

let mediaQuery

const trajectLabel = computed(() => {
  if (props.traject === 'wpl2') return 'WPL2 · Portfolio'
  if (props.traject === 'cv') return 'Curriculum Vitae'
  return 'WPL1 · Portfolio'
})

function syncNavMode() {
  isMobileNav.value = mediaQuery.matches
  if (!mediaQuery.matches) {
    openDropdown.value = null
  }
}

onMounted(() => {
  mediaQuery = window.matchMedia('(max-width: 768px)')
  syncNavMode()
  mediaQuery.addEventListener('change', syncNavMode)
})

onBeforeUnmount(() => {
  if (mediaQuery) {
    mediaQuery.removeEventListener('change', syncNavMode)
  }
})

const closeMenu = () => {
  isOpen.value = false
  openDropdown.value = null
}

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  if (!isOpen.value) {
    openDropdown.value = null
  }
}

const toggleDropdown = (label) => {
  if (!isMobileNav.value) return
  openDropdown.value = openDropdown.value === label ? null : label
}
</script>

<template>
  <header class="site-nav">
    <RouterLink class="nav-brand" to="/" @click="closeMenu">
      <span class="brand-mark">CC</span>
      <span>
        <strong>{{ profile.name }}</strong>
        <small>{{ trajectLabel }}</small>
      </span>
    </RouterLink>

    <button
      class="nav-toggle"
      type="button"
      :class="{ 'is-active': isOpen }"
      :aria-expanded="isOpen"
      aria-label="Menu openen"
      @click="toggleMenu"
    >
      <span></span>
      <span></span>
    </button>

    <nav class="nav-links" :class="{ 'is-open': isOpen }" aria-label="Hoofdnavigatie">
      <div v-if="items.length && route.path !== '/cv'" class="nav-links__primary">
        <template v-for="item in items" :key="item.label">
          <div v-if="item.children" class="nav-dropdown">
            <button
              type="button"
              class="nav-link nav-dropdown__btn"
              :class="{ 'is-open': isMobileNav && openDropdown === item.label }"
              :aria-expanded="isMobileNav && openDropdown === item.label"
              @click="toggleDropdown(item.label)"
            >
              <span>{{ item.label }}</span>
              <span class="nav-dropdown__chevron" aria-hidden="true"></span>
            </button>
            <div
              v-if="!isMobileNav || openDropdown === item.label"
              class="nav-dropdown__menu"
            >
              <a
                v-for="child in item.children"
                :key="child.href"
                :href="child.href"
                @click="closeMenu"
              >
                {{ child.label }}
              </a>
            </div>
          </div>
          <a v-else class="nav-link" :href="item.href" @click="closeMenu">{{ item.label }}</a>
        </template>
      </div>

      <div class="nav-traject-links">
        <span class="nav-traject-links__label">Traject</span>
        <div class="nav-traject-links__row">
          <RouterLink to="/" class="nav-traject-btn" @click="closeMenu">WPL1</RouterLink>
          <RouterLink to="/wpl2" class="nav-traject-btn" @click="closeMenu">WPL2</RouterLink>
          <RouterLink to="/cv" class="nav-traject-btn" @click="closeMenu">CV</RouterLink>
        </div>
      </div>
    </nav>
  </header>
</template>

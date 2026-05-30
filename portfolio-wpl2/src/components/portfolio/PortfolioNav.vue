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
  <header class="nav">
    <RouterLink class="nav__brand" to="/" @click="closeMenu">
      <span class="nav__mark">CC</span>
      <span>
        <strong>{{ profile.name }}</strong>
        <small>{{ trajectLabel }}</small>
      </span>
    </RouterLink>

    <button
      class="nav__toggle"
      type="button"
      :class="{ 'nav__toggle--active': isOpen }"
      :aria-expanded="isOpen"
      aria-label="Menu openen"
      @click="toggleMenu"
    >
      <span></span>
      <span></span>
    </button>

    <nav class="nav__links" :class="{ 'nav__links--open': isOpen }" aria-label="Hoofdnavigatie">
      <div v-if="items.length && route.path !== '/cv'" class="nav__primary">
        <template v-for="item in items" :key="item.label">
          <div v-if="item.children" class="nav__dropdown">
            <button
              type="button"
              class="nav__link nav__dropdown-btn"
              :class="{ 'nav__dropdown-btn--open': isMobileNav && openDropdown === item.label }"
              :aria-expanded="isMobileNav && openDropdown === item.label"
              @click="toggleDropdown(item.label)"
            >
              <span>{{ item.label }}</span>
              <span class="nav__chevron" aria-hidden="true"></span>
            </button>
            <div
              v-if="!isMobileNav || openDropdown === item.label"
              class="nav__dropdown-menu"
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
          <a v-else class="nav__link" :href="item.href" @click="closeMenu">{{ item.label }}</a>
        </template>
      </div>

      <div class="nav__traject">
        <span class="nav__traject-label">Traject</span>
        <div class="nav__traject-row">
          <RouterLink to="/" class="nav__traject-btn" @click="closeMenu">WPL1</RouterLink>
          <RouterLink to="/wpl2" class="nav__traject-btn" @click="closeMenu">WPL2</RouterLink>
          <RouterLink to="/cv" class="nav__traject-btn" @click="closeMenu">CV</RouterLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--nav-h);
  background: rgba(11, 15, 12, 0.88);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.5rem;
  z-index: 100;
}

.nav__brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: inherit;
}

.nav__mark {
  width: 36px;
  height: 36px;
  background: var(--accent);
  color: var(--bg);
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  border-radius: 7px;
  display: grid;
  place-items: center;
  flex-shrink: 0;
}

.nav__brand strong {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.95rem;
  display: block;
  line-height: 1.1;
}

.nav__brand small {
  font-size: 0.72rem;
  color: var(--text-muted);
  font-weight: 300;
  display: block;
  line-height: 1;
}

.nav__links {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 0.25rem;
}

.nav__primary {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 0.25rem;
}

.nav__links :deep(a),
.nav__link,
.nav__dropdown-btn {
  font-size: 0.83rem;
  font-weight: 500;
  color: var(--text-secondary);
  text-decoration: none;
  padding: 0.4rem 0.75rem;
  border-radius: var(--radius);
  transition: color 0.2s, background 0.2s;
  letter-spacing: 0.02em;
  white-space: nowrap;
}

.nav__links :deep(a:hover),
.nav__link:hover,
.nav__dropdown-btn:hover {
  color: var(--text-primary);
  background: var(--bg-raised);
}

.nav__traject {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  margin-left: 0.5rem;
}

.nav__traject-btn {
  padding: 0.38rem 0.75rem !important;
  border: 1.5px solid var(--border-mid) !important;
  color: var(--text-secondary) !important;
  border-radius: var(--radius) !important;
  font-weight: 600 !important;
  font-size: 0.8rem !important;
  letter-spacing: 0.04em !important;
  text-decoration: none;
  transition: background 0.2s, color 0.2s, border-color 0.2s !important;
}

.nav__traject-btn:hover {
  border-color: var(--accent) !important;
  color: var(--accent) !important;
}

.nav__traject-btn.router-link-active {
  background: var(--accent) !important;
  border-color: var(--accent) !important;
  color: var(--bg) !important;
}

.nav__toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.nav__toggle span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: transform 0.25s, opacity 0.25s;
}

.nav__dropdown {
  position: relative;
  display: flex;
  align-items: center;
}

.nav__dropdown-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-family: var(--font-body);
}

.nav__chevron {
  display: none;
}

.nav__dropdown-menu {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  padding: 0.35rem 0 0.35rem 0.5rem;
}

.nav__dropdown-menu a {
  font-size: 0.82rem;
  padding: 0.45rem 0.65rem;
  border-radius: 4px;
}

.nav__traject-label {
  display: none;
}

.nav__traject-row {
  display: contents;
}

@media (min-width: 769px) {
  .nav__dropdown:hover .nav__dropdown-menu,
  .nav__dropdown:focus-within .nav__dropdown-menu {
    display: flex !important;
  }

  .nav__dropdown-menu {
    display: none !important;
    position: absolute;
    top: calc(100% + 0.35rem);
    left: 0;
    min-width: 220px;
    padding: 0.5rem;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
    z-index: 10;
  }
}

@media (max-width: 768px) {
  .nav {
    padding: 0 1.25rem;
  }

  .nav__toggle {
    display: flex;
  }

  .nav__toggle--active span:first-child {
    transform: translateY(3.5px) rotate(45deg);
  }

  .nav__toggle--active span:last-child {
    transform: translateY(-3.5px) rotate(-45deg);
  }

  .nav__links {
    display: none;
    position: absolute;
    top: var(--nav-h);
    left: 0;
    right: 0;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
    flex-direction: column;
    align-items: stretch;
    padding: 0.75rem 1rem 1.25rem;
    gap: 0;
    max-height: calc(100dvh - var(--nav-h));
    overflow-y: auto;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45);
  }

  .nav__links--open {
    display: flex;
  }

  .nav__primary {
    flex-direction: column;
    gap: 0.15rem;
  }

  .nav__link,
  .nav__links :deep(a),
  .nav__dropdown-btn {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0.75rem 0.85rem;
    font-size: 0.92rem;
    color: var(--text-primary);
    text-align: left;
    border-radius: var(--radius);
  }

  .nav__dropdown {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
  }

  .nav__dropdown-btn {
    justify-content: space-between;
    font-weight: 600;
    background: transparent;
    border: none;
    width: 100%;
  }

  .nav__dropdown-btn--open {
    color: var(--accent);
    background: var(--accent-dim);
    border-radius: var(--radius) var(--radius) 0 0;
  }

  .nav__chevron {
    display: block;
    width: 8px;
    height: 8px;
    border-right: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
    transform: rotate(45deg);
    transition: transform 0.2s;
    flex-shrink: 0;
    margin-right: 2px;
  }

  .nav__dropdown-btn--open .nav__chevron {
    transform: rotate(-135deg);
    margin-top: 4px;
  }

  .nav__dropdown-menu {
    position: static;
    width: 100%;
    margin: 0;
    padding: 0.25rem 0 0.5rem;
    border-left: none;
    border-top: 1px solid var(--border);
    background: var(--bg-card);
    border-radius: 0 0 var(--radius) var(--radius);
    box-shadow: none;
  }

  .nav__dropdown-menu a {
    display: block;
    width: 100%;
    padding: 0.6rem 0.85rem 0.6rem 1.15rem;
    font-size: 0.85rem;
    font-weight: 400;
    color: var(--text-secondary);
    border-radius: 0;
  }

  .nav__dropdown-menu a:hover {
    color: var(--accent);
    background: var(--accent-dim);
  }

  .nav__traject {
    margin-left: 0;
    margin-top: 0.85rem;
    padding-top: 0.85rem;
    border-top: 1px solid var(--border);
    width: 100%;
  }

  .nav__traject-label {
    display: block;
    font-size: 0.68rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--text-muted);
    font-weight: 600;
    margin-bottom: 0.5rem;
    padding: 0 0.35rem;
  }

  .nav__traject-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.4rem;
  }

  .nav__traject-btn {
    text-align: center;
    padding: 0.55rem 0.4rem !important;
    font-size: 0.78rem !important;
  }
}
</style>

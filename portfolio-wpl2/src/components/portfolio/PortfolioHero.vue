<script setup>
import { computed } from 'vue'
import { instagramUrl } from '@/data/portfolio'
import AppButton from './AppButton.vue'
import AppCard from './AppCard.vue'

const props = defineProps({
  profile: {
    type: Object,
    required: true,
  },
  traject: {
    type: String,
    default: 'wpl1',
  },
})

const studyLine = computed(() =>
  props.traject === 'wpl2' ? 'WPL2 · ClockWise · Monocode' : props.profile.study,
)
</script>

<template>
  <header id="home" class="hero-band">
    <div class="hero">
      <div class="hero__profile">
        <a
          :href="instagramUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="hero__photo-link"
        >
          <img :src="profile.image" :alt="`Foto van ${profile.name}`" />
        </a>
        <div>
          <h1>{{ profile.name }}</h1>
          <p class="hero__role">{{ profile.role }}</p>
          <p class="hero__study">{{ studyLine }}</p>
        </div>
      </div>

      <AppCard class="hero__info">
        <h2>Persoonlijke informatie</h2>
        <ul>
          <li>{{ profile.name }}</li>
          <li>
            <a :href="`tel:${profile.phone.replace(/\s/g, '')}`">{{ profile.phone }}</a>
          </li>
          <li>
            <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
          </li>
          <li>Geboren {{ profile.birthdate }}</li>
          <li>{{ profile.address }}</li>
        </ul>
        <div class="hero__traject-links">
          <AppButton v-if="traject !== 'wpl1'" to="/">Naar WPL1</AppButton>
          <AppButton v-if="traject !== 'wpl2'" to="/wpl2">Naar WPL2</AppButton>
          <AppButton to="/cv">Curriculum Vitae</AppButton>
        </div>
      </AppCard>
    </div>
  </header>
</template>

<style scoped>
.hero-band {
  width: 100%;
  background: var(--bg);
}

.hero {
  max-width: 1120px;
  margin: 0 auto;
  padding: 3rem 2.5rem 4rem;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 2.5rem;
  align-items: start;
  border-bottom: 1px solid var(--border);
}

.hero__profile {
  display: flex;
  gap: 1.75rem;
  align-items: center;
}

.hero__photo-link {
  flex-shrink: 0;
}

.hero__photo-link img {
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
}

.hero h1 {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 0.35rem;
}

.hero__role {
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: 0.2rem;
}

.hero__study {
  font-size: 0.88rem;
  color: var(--text-muted);
}

.hero__info h2 {
  font-family: var(--font-display);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--text-muted);
  margin-bottom: 1rem;
  font-weight: 600;
}

.hero__info ul {
  list-style: none;
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.85;
  margin-bottom: 1.25rem;
}

.hero__info a {
  color: inherit;
  text-decoration: none;
}

.hero__info a:hover {
  color: var(--accent);
}

.hero__traject-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.hero__traject-links :deep(.btn) {
  width: 100%;
  text-align: center;
}

@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }

  .hero__profile {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>

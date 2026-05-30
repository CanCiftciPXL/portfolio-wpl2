<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { instagramUrl } from '@/data/portfolio'

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
  <header id="home" class="band band--dark">
    <div class="band__inner portfolio-hero">
      <div class="portfolio-hero__profile">
        <a
          :href="instagramUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="portfolio-hero__photo-link"
        >
          <img :src="profile.image" :alt="`Foto van ${profile.name}`" />
        </a>
        <div>
          <h1>{{ profile.name }}</h1>
          <p class="portfolio-hero__role">{{ profile.role }}</p>
          <p class="portfolio-hero__study">{{ studyLine }}</p>
        </div>
      </div>

      <aside class="portfolio-hero__info card">
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
        <div class="portfolio-hero__traject-links">
          <RouterLink v-if="traject !== 'wpl1'" class="button button-ghost" to="/">
            Naar WPL1
          </RouterLink>
          <RouterLink v-if="traject !== 'wpl2'" class="button button-ghost" to="/wpl2">
            Naar WPL2
          </RouterLink>
          <RouterLink class="button button-ghost" to="/cv">Curriculum Vitae</RouterLink>
        </div>
      </aside>
    </div>
  </header>
</template>

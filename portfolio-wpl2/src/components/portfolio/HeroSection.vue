<script setup>
import RevealSection from './RevealSection.vue'

defineProps({
  profile: {
    type: Object,
    required: true,
  },
  stats: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <RevealSection id="home" class="hero-section section-shell">
    <div class="hero-copy">
      <p class="section-kicker">Portfolio / Ontwikkelaar in opleiding</p>
      <h1>{{ profile.headline }}</h1>
      <p class="hero-intro">{{ profile.intro }}</p>

      <div class="hero-actions">
        <a class="button button-primary" href="#projects">Bekijk projecten</a>
        <a class="button button-ghost" :href="`mailto:${profile.email}`">Neem contact op</a>
      </div>

      <div class="hero-stats" aria-label="Portfolio statistieken">
        <div v-for="stat in stats" :key="stat.label">
          <strong>{{ stat.value }}</strong>
          <span>{{ stat.label }}</span>
        </div>
      </div>
    </div>

    <div class="hero-visual" aria-label="Profiel">
      <img :src="profile.image" :alt="profile.name" />
      <div class="profile-meta">
        <span class="availability-dot"></span>
        <p>Beschikbaar voor groei, feedback en nieuwe uitdagingen</p>
      </div>
      <dl>
        <div>
          <dt>Locatie</dt>
          <dd>{{ profile.location }}</dd>
        </div>
        <div>
          <dt>E-mail</dt>
          <dd>{{ profile.email }}</dd>
        </div>
      </dl>
    </div>
  </RevealSection>
</template>

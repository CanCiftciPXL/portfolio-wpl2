<script setup>
import AppCard from '@/components/portfolio/AppCard.vue'
import CvSection from '@/components/portfolio/CvSection.vue'
import PageLayout from '@/components/portfolio/PageLayout.vue'
import PortfolioNav from '@/components/portfolio/PortfolioNav.vue'
import { cvContent, instagramUrl, profile } from '@/data/portfolio'

const cvNavItems = [
  { label: 'Introductie', href: '#introductie' },
  { label: "Diploma's", href: '#diplomas' },
  { label: 'Werkervaring', href: '#werkervaring' },
  { label: 'Vaardigheden', href: '#vaardigheden' },
  { label: 'Talen', href: '#talen' },
  { label: "Hobby's", href: '#hobby' },
]
</script>

<template>
  <PageLayout>
    <template #nav>
      <PortfolioNav :items="cvNavItems" :profile="profile" traject="cv" />
    </template>

    <header class="hero-band">
      <section class="hero">
        <div class="hero__copy">
          <p class="kicker">Curriculum Vitae</p>
          <h1 class="hero__name">{{ profile.name }}</h1>
          <p class="hero__role">{{ profile.role }}</p>

          <dl class="hero__meta">
            <div>
              <dt>Telefoon</dt>
              <dd>
                <a :href="`tel:${profile.phone.replace(/\s/g, '')}`">{{ profile.phone }}</a>
              </dd>
            </div>
            <div>
              <dt>E-mail</dt>
              <dd>
                <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
              </dd>
            </div>
            <div>
              <dt>Geboren</dt>
              <dd>{{ profile.birthdate }}</dd>
            </div>
            <div>
              <dt>Adres</dt>
              <dd>{{ profile.address }}</dd>
            </div>
          </dl>
        </div>

        <div class="hero__visual">
          <a
            :href="instagramUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="hero__photo-wrap"
          >
            <img :src="profile.cvImage" :alt="`Foto van ${profile.name}`" />
            <div class="hero__photo-ring" aria-hidden="true"></div>
          </a>
        </div>
      </section>
    </header>

    <CvSection id="introductie" alt>
      <h2 class="section-title">Introductie</h2>
      <p class="body">{{ cvContent.intro }}</p>
    </CvSection>

    <CvSection id="diplomas">
      <h2 class="section-title">Diploma's</h2>
      <div class="diploma-list">
        <article v-for="item in cvContent.diplomas" :key="item.period" class="diploma">
          <AppCard>
            <time>{{ item.period }}</time>
            <h3>{{ item.title }}</h3>
            <p class="org">{{ item.school }}</p>
            <p>{{ item.field }}</p>
          </AppCard>
        </article>
      </div>
    </CvSection>

    <CvSection id="werkervaring" alt>
      <h2 class="section-title">Werkervaring</h2>
      <div class="timeline">
        <div v-for="job in cvContent.work" :key="job.company" class="timeline__entry">
          <time>{{ job.period }}</time>
          <h3>{{ job.role }}</h3>
          <span class="org">{{ job.company }}</span>
          <p v-for="(line, index) in job.description" :key="index">{{ line }}</p>
        </div>
      </div>
    </CvSection>

    <CvSection id="vaardigheden">
      <h2 class="section-title">Vaardigheden</h2>
      <div class="skills-cols">
        <div class="skills-group">
          <h3>Technische vaardigheden</h3>
          <div class="tags">
            <span v-for="skill in cvContent.techSkills" :key="skill" class="tag">{{ skill }}</span>
          </div>
        </div>
        <div class="skills-group">
          <h3>Sociale vaardigheden</h3>
          <div class="tags">
            <span v-for="skill in cvContent.softSkills" :key="skill" class="tag">{{ skill }}</span>
          </div>
        </div>
      </div>
    </CvSection>

    <CvSection id="talen" alt>
      <h2 class="section-title">Talen</h2>
      <ul class="stars-list">
        <li v-for="lang in cvContent.languages" :key="lang.name">
          <span class="stars-list__name">{{ lang.name }}</span>
          <span class="stars" :aria-label="`${lang.stars} van 5`">
            <span
              v-for="n in 5"
              :key="n"
              class="star"
              :class="{ 'star--on': n <= lang.stars }"
            ></span>
          </span>
        </li>
      </ul>
    </CvSection>

    <CvSection id="hobby">
      <h2 class="section-title">Hobby's</h2>
      <ul class="hobby-list">
        <li v-for="hobby in cvContent.hobbies" :key="hobby">{{ hobby }}</li>
      </ul>
    </CvSection>

    <template #footer-start>{{ profile.name }} · 2PROC · PXL-Digital</template>
    <template #footer-end>Opdracht Curriculum Vitae</template>
  </PageLayout>
</template>

<style scoped>
.hero-band {
  width: 100%;
  background: var(--bg);
}

.hero {
  max-width: 1120px;
  margin: 0 auto;
  padding: 4rem 2.5rem 5rem;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 4rem;
  border-bottom: 1px solid var(--border);
}

.kicker {
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--accent);
  margin-bottom: 1rem;
}

.hero__name {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  line-height: 1;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.hero__role {
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: 2.25rem;
}

.hero__meta {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.85rem 2rem;
}

.hero__meta dt {
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--text-muted);
  margin-bottom: 0.15rem;
  font-weight: 600;
}

.hero__meta dd {
  font-size: 0.9rem;
  color: var(--text-primary);
}

.hero__meta a {
  color: inherit;
  text-decoration: none;
}

.hero__meta a:hover {
  color: var(--accent);
}

.hero__visual {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
}

.hero__photo-wrap {
  position: relative;
  width: 220px;
  height: 220px;
}

.hero__photo-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  position: relative;
  z-index: 1;
}

.hero__photo-ring {
  position: absolute;
  inset: -8px;
  border-radius: calc(var(--radius-lg) + 6px);
  border: 1.5px solid var(--accent);
  opacity: 0.45;
  pointer-events: none;
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 2rem;
  line-height: 1.15;
}

.body {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.8;
  max-width: 680px;
  margin-bottom: 1rem;
}

.diploma-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
}

.diploma :deep(time) {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  display: block;
  margin-bottom: 0.5rem;
}

.diploma :deep(h3) {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.diploma :deep(.org) {
  color: var(--accent);
  font-size: 0.85rem;
  margin-bottom: 0.35rem;
}

.diploma :deep(p:last-child) {
  font-size: 0.88rem;
  color: var(--text-secondary);
}

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5rem;
  bottom: 0.5rem;
  width: 1px;
  background: linear-gradient(to bottom, var(--accent), transparent);
}

.timeline__entry {
  position: relative;
  padding-bottom: 2.5rem;
}

.timeline__entry:last-child {
  padding-bottom: 0;
}

.timeline__entry::before {
  content: '';
  position: absolute;
  left: -2.4rem;
  top: 0.45rem;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 10px var(--accent-glow);
}

.timeline__entry time {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  font-weight: 500;
  display: block;
  margin-bottom: 0.35rem;
}

.timeline__entry h3 {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.15rem;
}

.timeline__entry .org {
  font-size: 0.8rem;
  color: var(--accent);
  margin-bottom: 0.5rem;
  display: block;
}

.timeline__entry p {
  font-size: 0.87rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

.skills-cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
}

.skills-group h3 {
  font-family: var(--font-display);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--text-muted);
  margin-bottom: 1rem;
  font-weight: 600;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tag {
  font-size: 0.75rem;
  padding: 0.25rem 0.65rem;
  border-radius: 4px;
  background: var(--accent-dim);
  border: 1px solid rgba(184, 242, 100, 0.18);
  color: var(--accent);
  letter-spacing: 0.02em;
  font-weight: 500;
}

.stars-list {
  list-style: none;
  max-width: 420px;
}

.stars-list li {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 0.65rem 0;
  border-bottom: 1px solid var(--border);
}

.stars-list li:last-child {
  border-bottom: none;
}

.stars-list__name {
  width: 100px;
  font-size: 0.9rem;
  font-weight: 500;
  flex-shrink: 0;
}

.stars {
  display: flex;
  gap: 0.25rem;
}

.star {
  width: 14px;
  height: 14px;
  background: var(--border-mid);
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
}

.star--on {
  background: var(--accent);
}

.hobby-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.hobby-list li {
  padding: 0.5rem 1.1rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 100px;
}

@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }

  .hero__visual {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }
}

@media (max-width: 600px) {
  .hero__meta {
    grid-template-columns: 1fr;
  }

  .skills-cols {
    grid-template-columns: 1fr;
  }
}
</style>

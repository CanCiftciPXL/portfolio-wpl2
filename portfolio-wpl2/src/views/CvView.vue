<script setup>
import PortfolioNav from '@/components/portfolio/PortfolioNav.vue'
import RevealSection from '@/components/portfolio/RevealSection.vue'
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
  <div class="page-shell cv-page">
    <PortfolioNav :items="cvNavItems" :profile="profile" traject="cv" />

    <main>
      <header class="band band--dark">
        <section class="band__inner cv-hero">
        <div class="cv-hero__copy">
          <p class="section-kicker">Curriculum Vitae</p>
          <h1 class="cv-hero__name">{{ profile.name }}</h1>
          <p class="cv-hero__role">{{ profile.role }}</p>

          <dl class="cv-hero__meta">
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

        <div class="cv-hero__visual">
          <a :href="instagramUrl" target="_blank" rel="noopener noreferrer" class="cv-hero__photo-wrap">
            <img :src="profile.cvImage" :alt="`Foto van ${profile.name}`" />
            <div class="cv-hero__photo-ring" aria-hidden="true"></div>
          </a>
        </div>
        </section>
      </header>

      <RevealSection id="introductie" class="section-wrap cv-section--alt">
        <div class="cv-section-inner">
          <h2 class="cv-section__title">Introductie</h2>
          <p class="cv-body">{{ cvContent.intro }}</p>
        </div>
      </RevealSection>

      <RevealSection id="diplomas" class="section-wrap">
        <div class="cv-section-inner">
          <h2 class="cv-section__title">Diploma's</h2>
          <div class="cv-diploma-list">
            <article v-for="item in cvContent.diplomas" :key="item.period" class="cv-diploma card">
              <time>{{ item.period }}</time>
              <h3>{{ item.title }}</h3>
              <p class="org">{{ item.school }}</p>
              <p>{{ item.field }}</p>
            </article>
          </div>
        </div>
      </RevealSection>

      <RevealSection id="werkervaring" class="section-wrap cv-section--alt">
        <div class="cv-section-inner">
          <h2 class="cv-section__title">Werkervaring</h2>
          <div class="timeline-track">
            <div v-for="job in cvContent.work" :key="job.company" class="timeline-entry">
              <time>{{ job.period }}</time>
              <h3>{{ job.role }}</h3>
              <span class="org">{{ job.company }}</span>
              <p v-for="(line, index) in job.description" :key="index">{{ line }}</p>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection id="vaardigheden" class="section-wrap">
        <div class="cv-section-inner">
          <h2 class="cv-section__title">Vaardigheden</h2>
          <div class="cv-skills-cols">
            <div class="cv-skills-group">
              <h3>Technische vaardigheden</h3>
              <div class="tag-list">
                <span v-for="skill in cvContent.techSkills" :key="skill" class="tag">{{ skill }}</span>
              </div>
            </div>
            <div class="cv-skills-group">
              <h3>Sociale vaardigheden</h3>
              <div class="tag-list">
                <span v-for="skill in cvContent.softSkills" :key="skill" class="tag">{{ skill }}</span>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection id="talen" class="section-wrap cv-section--alt">
        <div class="cv-section-inner">
          <h2 class="cv-section__title">Talen</h2>
          <ul class="cv-stars-list">
            <li v-for="lang in cvContent.languages" :key="lang.name">
              <span class="cv-stars-list__name">{{ lang.name }}</span>
              <span class="cv-stars" :aria-label="`${lang.stars} van 5`">
                <span
                  v-for="n in 5"
                  :key="n"
                  class="cv-star"
                  :class="{ 'cv-star--on': n <= lang.stars }"
                ></span>
              </span>
            </li>
          </ul>
        </div>
      </RevealSection>

      <RevealSection id="hobby" class="section-wrap">
        <div class="cv-section-inner">
          <h2 class="cv-section__title">Hobby's</h2>
          <ul class="cv-hobby-list">
            <li v-for="hobby in cvContent.hobbies" :key="hobby">{{ hobby }}</li>
          </ul>
        </div>
      </RevealSection>
    </main>

    <footer class="site-footer">
      <span>{{ profile.name }} · 2PROC · PXL-Digital</span>
      <span>Opdracht Curriculum Vitae</span>
    </footer>
  </div>
</template>

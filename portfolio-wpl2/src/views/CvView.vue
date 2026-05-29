<script setup>
import PortfolioNav from '@/components/portfolio/PortfolioNav.vue'
import RevealSection from '@/components/portfolio/RevealSection.vue'
import { profile } from '@/data/portfolio'

const diplomas = [
  {
    year: '2015 – 2022',
    title: 'Secundair Onderwijs',
    org: 'Sint-Franciscuscollege',
    desc: 'Informaticabeheer',
  },
  {
    year: '2024 – heden',
    title: 'Graduaat in het Programmeren',
    org: 'PXL',
    desc: 'Hogeschool PXL-Digital',
  },
]

const werkervaring = [
  {
    year: 'Feb 2022 – Mei 2022',
    title: 'Stagiair Programmeur',
    org: 'Menute.be',
    desc: 'Ontwikkelen en onderhouden van webapplicaties, testen van nieuwe functies en bijdragen aan de optimalisatie van bestaande systemen. Actief samenwerken met een team van programmeurs.',
  },
  {
    year: 'Jul 2022 – Aug 2022',
    title: 'Medewerker Magazijn',
    org: 'Nike Wings',
    desc: 'Verantwoordelijk voor het sorteren, inpakken en verzenden van producten. Helpen bij voorraadbeheer en zorgen voor een georganiseerde werkomgeving.',
  },
]

const techSkills  = ['HTML / CSS', 'C#', 'Python', 'SQL', 'Vue.js', 'Git']
const softSkills  = ['Teamspeler', 'Leergierig', 'Flexibel', 'Probleemoplossend']

const talen = [
  { naam: 'Nederlands', pct: 100 },
  { naam: 'Engels',     pct: 95  },
  { naam: 'Turks',      pct: 80  },
  { naam: 'Frans',      pct: 35  },
]

const hobbys = ['⚽ Voetballen', '🎮 Gamen']
</script>

<template>
  <div class="page-shell">
    <PortfolioNav :profile="profile" />

    <main>
      <!-- Hero -->
      <section class="cv-hero section-wrap">
        <div class="cv-hero__copy">
          <p class="section-kicker">Curriculum Vitae</p>
          <h1 class="cv-hero__name">Can Ciftci</h1>
          <p class="cv-hero__role">Junior ontwikkelaar in opleiding · PXL-Digital</p>

          <dl class="cv-hero__meta">
            <div>
              <dt>Telefoon</dt>
              <dd>0486 56 18 06</dd>
            </div>
            <div>
              <dt>E-mail</dt>
              <dd>can.c075@outlook.com</dd>
            </div>
            <div>
              <dt>Geboren</dt>
              <dd>16 december 2004</dd>
            </div>
            <div>
              <dt>Adres</dt>
              <dd>Schootstraat 103, Heusden-Zolder</dd>
            </div>
          </dl>
        </div>

        <div class="cv-hero__visual">
          <div class="cv-hero__photo-wrap">
            <img src="@/assets/img/canFoto.png" alt="Can Ciftci" />
            <div class="cv-hero__photo-ring"></div>
          </div>
          <div class="cv-hero__badge">
            <span class="avail-dot"></span>
            Beschikbaar voor stages &amp; projecten
          </div>
        </div>
      </section>

      <!-- Intro -->
      <RevealSection class="section-wrap cv-section--alt">
        <div class="cv-section-inner">
          <p class="section-kicker">Over mij</p>
          <h2 class="cv-section__title">Introductie</h2>
          <p class="cv-body">
            Hallo, mijn naam is Can Ciftci en ik ben 20 jaar oud. Ik studeer graduaat in het
            Programmeren aan PXL. Ik heb voor deze opleiding gekozen omdat ik een grote interesse
            heb in technologie en programmeren — ik geloof dat programmeren een essentieel onderdeel
            van de toekomst is.
          </p>
          <p class="cv-body">
            Ik vraag me al van kinds af hoe mensen websites bouwen en games maken. Dit vak past goed
            bij mij: ik vind het leuk, ik werk graag in team, en ik ben flexibel genoeg om snel te
            schakelen in een professionele omgeving.
          </p>
        </div>
      </RevealSection>

      <!-- Diplomas -->
      <RevealSection class="section-wrap">
        <div class="cv-section-inner">
          <p class="section-kicker">Opleiding</p>
          <h2 class="cv-section__title">Diploma's</h2>
          <div class="timeline-track">
            <div v-for="d in diplomas" :key="d.year" class="timeline-entry">
              <time>{{ d.year }}</time>
              <h3>{{ d.title }}</h3>
              <span class="org">{{ d.org }}</span>
              <p>{{ d.desc }}</p>
            </div>
          </div>
        </div>
      </RevealSection>

      <!-- Werkervaring -->
      <RevealSection class="section-wrap cv-section--alt">
        <div class="cv-section-inner">
          <p class="section-kicker">Loopbaan</p>
          <h2 class="cv-section__title">Werkervaring</h2>
          <div class="timeline-track">
            <div v-for="w in werkervaring" :key="w.year" class="timeline-entry">
              <time>{{ w.year }}</time>
              <h3>{{ w.title }}</h3>
              <span class="org">{{ w.org }}</span>
              <p>{{ w.desc }}</p>
            </div>
          </div>
        </div>
      </RevealSection>

      <!-- Vaardigheden -->
      <RevealSection class="section-wrap">
        <div class="cv-section-inner">
          <p class="section-kicker">Wat ik kan</p>
          <h2 class="cv-section__title">Vaardigheden</h2>
          <div class="cv-skills-cols">
            <div class="cv-skills-group">
              <h3>Technisch</h3>
              <div class="tag-list">
                <span v-for="s in techSkills" :key="s" class="tag">{{ s }}</span>
              </div>
            </div>
            <div class="cv-skills-group">
              <h3>Sociaal</h3>
              <div class="tag-list">
                <span v-for="s in softSkills" :key="s" class="tag">{{ s }}</span>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      <!-- Talen -->
      <RevealSection class="section-wrap cv-section--alt">
        <div class="cv-section-inner cv-section-inner--narrow">
          <p class="section-kicker">Communicatie</p>
          <h2 class="cv-section__title">Talen</h2>
          <div class="lang-list">
            <div v-for="t in talen" :key="t.naam" class="lang-row">
              <span class="lang-name">{{ t.naam }}</span>
              <div class="lang-bar-track">
                <div class="lang-bar-fill" :style="{ width: t.pct + '%' }"></div>
              </div>
              <span class="lang-pct">{{ t.pct }}%</span>
            </div>
          </div>
        </div>
      </RevealSection>

      <!-- Hobby's -->
      <RevealSection class="section-wrap">
        <div class="cv-section-inner">
          <p class="section-kicker">Vrije tijd</p>
          <h2 class="cv-section__title">Hobby's</h2>
          <div class="tag-list">
            <span v-for="h in hobbys" :key="h" class="tag tag--hobby">{{ h }}</span>
          </div>
        </div>
      </RevealSection>
    </main>

    <footer class="site-footer">
      <span>Can Ciftci · PXL-Digital · 1PROd</span>
      <span>Curriculum Vitae</span>
    </footer>
  </div>
</template>

<style scoped>
.cv-hero {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 4rem;
  padding-top: calc(var(--nav-h) + 5rem);
  padding-bottom: 5rem;
  border-bottom: 1px solid var(--border);
}

.cv-hero__name {
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 1;
  color: var(--text-primary);
  margin-bottom: .6rem;
}

.cv-hero__role {
  font-size: 1rem;
  color: var(--text-muted);
  margin-bottom: 2.5rem;
  font-weight: 300;
  letter-spacing: .02em;
}

.cv-hero__meta {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: .85rem 2rem;
}

.cv-hero__meta dt {
  font-size: .68rem;
  text-transform: uppercase;
  letter-spacing: .12em;
  color: var(--text-muted);
  margin-bottom: .15rem;
  font-weight: 600;
}

.cv-hero__meta dd {
  font-size: .9rem;
  color: var(--text-primary);
  font-weight: 400;
}

.cv-hero__visual {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
}

.cv-hero__photo-wrap {
  position: relative;
  width: 200px;
  height: 200px;
}

.cv-hero__photo-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--radius-lg);
  display: block;
  position: relative;
  z-index: 1;
}

.cv-hero__photo-ring {
  position: absolute;
  inset: -6px;
  border-radius: calc(var(--radius-lg) + 4px);
  border: 1.5px solid var(--accent);
  opacity: .5;
  pointer-events: none;
}

.cv-hero__badge {
  display: flex;
  align-items: center;
  gap: .5rem;
  font-size: .75rem;
  color: var(--text-secondary);
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 100px;
  padding: .35rem .85rem;
  white-space: nowrap;
}

.avail-dot {
  width: 7px;
  height: 7px;
  background: var(--accent);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--accent-glow);
  flex-shrink: 0;
}

.cv-section--alt {
  background: var(--bg-card);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  max-width: 100%;
  padding-left: 0;
  padding-right: 0;
}

.cv-section--alt .cv-section-inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2.5rem;
}

.cv-section-inner--narrow {
  max-width: 640px !important;
}

.cv-section__title {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 2.5rem;
  line-height: 1.15;
}

.cv-body {
  font-size: .95rem;
  color: var(--text-secondary);
  line-height: 1.8;
  max-width: 680px;
  margin-bottom: 1rem;
}

.cv-skills-cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
}

.cv-skills-group h3 {
  font-family: var(--font-display);
  font-size: .72rem;
  text-transform: uppercase;
  letter-spacing: .12em;
  color: var(--text-muted);
  margin-bottom: 1rem;
  font-weight: 600;
}

.lang-list {
  display: flex;
  flex-direction: column;
}

.tag--hobby {
  font-size: .9rem !important;
  padding: .45rem 1rem !important;
}

@media (max-width: 900px) {
  .cv-hero {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .cv-hero__visual {
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .cv-hero__photo-wrap {
    width: 150px;
    height: 150px;
  }
}

@media (max-width: 600px) {
  .cv-hero__meta { grid-template-columns: 1fr; }
  .cv-skills-cols { grid-template-columns: 1fr; gap: 2rem; }
}
</style>
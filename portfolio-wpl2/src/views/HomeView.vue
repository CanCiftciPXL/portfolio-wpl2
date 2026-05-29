<script setup>
import AboutSection from '@/components/portfolio/AboutSection.vue'
import HeroSection from '@/components/portfolio/HeroSection.vue'
import PortfolioNav from '@/components/portfolio/PortfolioNav.vue'
import ProjectsSection from '@/components/portfolio/ProjectsSection.vue'
import TimelineSection from '@/components/portfolio/TimelineSection.vue'
import {
  about,
  navItems,
  profile,
  projects,
  skills,
  stats,
  timeline,
} from '@/data/portfolio'
</script>

<template>
  <div class="page-shell">
    <PortfolioNav :items="navItems" :profile="profile" />
    <main>
      <HeroSection :profile="profile" :stats="stats" />
      <AboutSection :about="about" :skills="skills" />
      <ProjectsSection :projects="projects" />
      <TimelineSection :timeline="timeline" />
    </main>
    <footer class="site-footer">
      <span>Can Ciftci · PXL-Digital · 1PROd</span>
      <span>Portfolio</span>
    </footer>
  </div>
</template>
<script setup>
import AssignmentsSection from '@/components/portfolio/AssignmentsSection.vue'
import DevelopmentSection from '@/components/portfolio/DevelopmentSection.vue'
import IntroSection from '@/components/portfolio/IntroSection.vue'
import LogbookSection from '@/components/portfolio/LogbookSection.vue'
import PortfolioHero from '@/components/portfolio/PortfolioHero.vue'
import PortfolioNav from '@/components/portfolio/PortfolioNav.vue'
import ReflectionSection from '@/components/portfolio/ReflectionSection.vue'
import {
  assignments,
  developmentSections,
  logbook,
  navItems,
  portfolioIntro,
  profile,
  reflections,
} from '@/data/portfolio'
</script>

<template>
  <div class="page-shell">
    <PortfolioNav :items="navItems" :profile="profile" traject="wpl1" />
    <main>
      <PortfolioHero :profile="profile" traject="wpl1" />
      <IntroSection :intro="portfolioIntro" />
      <LogbookSection :logbook="logbook" />
      <DevelopmentSection :sections="developmentSections" />
      <AssignmentsSection :assignments="assignments" />
      <ReflectionSection :reflections="reflections" />
    </main>
    <footer class="site-footer">
      <span>{{ profile.name }} · 2PROC · PXL-Digital</span>
      <span>Opdracht Portfolio WPL1</span>
    </footer>
  </div>
</template>

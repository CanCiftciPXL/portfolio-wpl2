<script setup>
import IntroSection from '@/components/portfolio/IntroSection.vue'
import PageLayout from '@/components/portfolio/PageLayout.vue'
import PortfolioHero from '@/components/portfolio/PortfolioHero.vue'
import PortfolioNav from '@/components/portfolio/PortfolioNav.vue'
import Wpl2DownloadSection from '@/components/portfolio/Wpl2DownloadSection.vue'
import Wpl2TextSection from '@/components/portfolio/Wpl2TextSection.vue'
import { profile } from '@/data/portfolio'
import {
  clockWiseCase,
  myContributions,
  wpl2Document,
  wpl2Intro,
  wpl2NavItems,
} from '@/data/wpl2'
</script>

<template>
  <PageLayout>
    <template #nav>
      <PortfolioNav :items="wpl2NavItems" :profile="profile" traject="wpl2" />
    </template>

    <PortfolioHero :profile="profile" traject="wpl2" />
    <IntroSection :intro="wpl2Intro" />
    <Wpl2TextSection
      id="case"
      :title="clockWiseCase.title"
      :paragraphs="clockWiseCase.paragraphs"
      alt
    />
    <Wpl2TextSection
      id="aandeel"
      :title="myContributions.title"
      :paragraphs="myContributions.paragraphs"
    />
    <Wpl2DownloadSection :document="wpl2Document" />

    <template #footer-start>{{ profile.name }} · 2PROC · PXL-Digital · Monocode</template>
    <template #footer-end>ClockWise · WPL2</template>
  </PageLayout>
</template>

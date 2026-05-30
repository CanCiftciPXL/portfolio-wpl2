<template>
  <div class="page-shell">
    <slot name="nav" />
    <main>
      <slot />
    </main>
    <footer class="site-footer">
      <slot name="footer-start" />
      <slot name="footer-end" />
    </footer>
  </div>
</template>

<style scoped>
.page-shell {
  padding-top: var(--nav-h);
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  background: var(--bg);
}

.site-footer {
  border-top: 1px solid var(--border);
  padding: 2rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: var(--text-muted);
  max-width: 1120px;
  margin: 0 auto;
}

@media (max-width: 600px) {
  .site-footer {
    flex-direction: column;
    gap: 0.35rem;
    text-align: center;
    padding: 1.5rem 1.25rem;
  }
}
</style>

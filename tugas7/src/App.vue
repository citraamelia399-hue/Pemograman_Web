<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useCartStore } from './stores/cart'

const cartStore = useCartStore()
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Beranda</RouterLink> | 
      <RouterLink to="/cart">
        Keranjang ({{ cartStore.totalItems }})
      </RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
nav {
  padding: 16px 0;
  font-size: 18px;
}
nav a.router-link-active {
  font-weight: bold;
  color: #42b883;
}
</style>
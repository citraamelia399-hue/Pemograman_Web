<script setup>
import { ref } from 'vue'
import ProductCard from '../components/ProductCard.vue'

const products = ref([
  { id: 1, name: 'Keyboard Mechanical', price: 450000 },
  { id: 2, name: 'Mouse Wireless', price: 150000 },
  { id: 3, name: 'Headset Gaming', price: 300000 }
])
</script>

<template>
  <div>
    <h2>Katalog Produk</h2>
    <div class="product-list">
      <ProductCard 
        v-for="item in products" 
        :key="item.id" 
        :product="item" 
      />
    </div>
  </div>
</template>

<style scoped>
.product-list {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
</style>
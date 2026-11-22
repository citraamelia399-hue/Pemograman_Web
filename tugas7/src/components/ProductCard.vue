<script setup>
import { useCartStore } from '../stores/cart'

// Menerima data produk dari parent (HomeView)
defineProps({
  product: {
    type: Object,
    required: true
  }
})

const cartStore = useCartStore()
</script>

<template>
  <div class="card">
    <h3>{{ product.name }}</h3>
    <p>Harga: Rp {{ product.price.toLocaleString('id-ID') }}</p>
    <button @click="cartStore.addToCart(product)">
      + Tambah ke Keranjang
    </button>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  width: 220px;
}
button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #33a06f;
}
</style>
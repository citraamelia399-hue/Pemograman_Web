<script setup>
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()
</script>

<template>
  <div>
    <h2>Keranjang Belanja</h2>
    
    <div v-if="cartStore.items.length === 0">
      <p>Keranjang masih kosong.</p>
    </div>

    <div v-else>
      <ul>
        <li v-for="item in cartStore.items" :key="item.id">
          <strong>{{ item.name }}</strong> - 
          Rp {{ item.price.toLocaleString('id-ID') }} x {{ item.quantity }}
        </li>
      </ul>
      <hr />
      <h3>Total Bayar: Rp {{ cartStore.totalPrice.toLocaleString('id-ID') }}</h3>
    </div>
  </div>
</template>
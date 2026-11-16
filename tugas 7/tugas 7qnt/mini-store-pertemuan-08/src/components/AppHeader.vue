<script setup>
import { storeToRefs } from 'pinia'
import { useCartStore } from '../stores/cart'

const cart = useCartStore()
const { totalItems } = storeToRefs(cart)
</script>

<template>
  <header class="site-header">
    <div class="header-inner">
      <RouterLink to="/" class="brand">
        <span class="brand-icon">r.</span>
        <span>qonita<span class="brand-light"> store</span></span>
      </RouterLink>

      <nav class="main-nav">
        <RouterLink to="/" class="nav-link">Beranda</RouterLink>
        <RouterLink to="/cart" class="cart-link">
          <span class="cart-icon">♧</span>
          Keranjang
          <span class="cart-badge">{{ totalItems }}</span>
        </RouterLink>
      </nav>
    </div>
  </header>
</template>
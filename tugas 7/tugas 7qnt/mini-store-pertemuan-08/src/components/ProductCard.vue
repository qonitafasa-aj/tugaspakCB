<script setup>
import { useCartStore } from '../stores/cart'

defineProps({
  product: {
    type: Object,
    required: true
  }
})

const cart = useCartStore()

function formatPrice(price) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(price)
}
</script>

<template>
  <article class="product-card">
    <div class="product-image-wrap">
      <img :src="product.image" :alt="product.name" class="product-image" loading="lazy">
      <span class="product-badge">{{ product.badge }}</span>
      <span class="image-number">0{{ product.id }}</span>
    </div>

    <div class="product-info">
      <div class="product-meta">
        <span>{{ product.category }}</span>
        <span class="rating">★ {{ product.rating }}</span>
      </div>
      <h3>{{ product.name }}</h3>
      <p class="product-description">{{ product.description }}</p>
      <div class="product-bottom">
        <div class="price-group">
          <strong>{{ formatPrice(product.price) }}</strong>
          <del v-if="product.oldPrice">{{ formatPrice(product.oldPrice) }}</del>
        </div>
        <button class="add-cart-button" type="button" @click="cart.addToCart(product)" :aria-label="`Tambah ${product.name} ke keranjang`">
          <span>＋</span>
        </button>
      </div>
    </div>
  </article>
</template>
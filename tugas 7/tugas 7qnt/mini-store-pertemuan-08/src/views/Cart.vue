<script setup>
import { storeToRefs } from 'pinia'
import { useCartStore } from '../stores/cart'

const cart = useCartStore()
const { items, totalItems, totalPrice } = storeToRefs(cart)

function formatPrice(price) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(price)
}

function checkout() {
  window.alert('Terima kasih! Ini adalah simulasi checkout untuk tugas praktikum.')
  cart.clearCart()
}
</script>

<template>
  <main class="page-container cart-page">
    <div class="cart-heading">
      <p class="section-eyebrow">RINGKASAN PESANAN</p>
      <h1>Keranjang <em>belanja.</em></h1>
      <p>Periksa kembali pilihan yang ingin kamu bawa pulang.</p>
    </div>

    <div v-if="items.length" class="cart-layout">
      <section class="cart-items-panel">
        <div class="cart-panel-heading">
          <h2>Produk pilihanmu</h2>
          <span>{{ totalItems }} item</span>
        </div>

        <article v-for="item in items" :key="item.id" class="cart-item">
          <img :src="item.image" :alt="item.name">
          <div class="cart-item-info">
            <span>{{ item.category }}</span>
            <h3>{{ item.name }}</h3>
            <strong>{{ formatPrice(item.price) }}</strong>
          </div>
          <div class="quantity-control">
            <button type="button" @click="cart.decreaseQuantity(item.id)" aria-label="Kurangi jumlah">−</button>
            <span>{{ item.quantity }}</span>
            <button type="button" @click="cart.increaseQuantity(item.id)" aria-label="Tambah jumlah">＋</button>
          </div>
          <button class="remove-item" type="button" @click="cart.removeFromCart(item.id)" aria-label="Hapus produk">×</button>
        </article>

        <RouterLink to="/" class="continue-shopping">← Lanjut belanja</RouterLink>
      </section>

      <aside class="summary-panel">
        <p class="section-eyebrow">DETAIL PEMBAYARAN</p>
        <h2>Ringkasan.</h2>
        <div class="summary-line"><span>Total barang</span><strong>{{ totalItems }}</strong></div>
        <div class="summary-line"><span>Subtotal</span><strong>{{ formatPrice(totalPrice) }}</strong></div>
        <div class="summary-line"><span>Pengiriman</span><strong class="free-shipping">Gratis</strong></div>
        <div class="summary-divider"></div>
        <div class="summary-total"><span>Total pembayaran</span><strong>{{ formatPrice(totalPrice) }}</strong></div>
        <button class="checkout-button" type="button" @click="checkout">Lanjut checkout <span>↗</span></button>
        <p class="secure-note">✳ Checkout ini merupakan simulasi tugas praktikum.</p>
      </aside>
    </div>

    <section v-else class="empty-cart">
      <div class="empty-cart-icon">♧</div>
      <p class="section-eyebrow">KERANJANG MASIH KOSONG</p>
      <h2>Belum ada yang<br><em>dipilih.</em></h2>
      <p>Yuk, temukan produk menarik dan tambahkan ke keranjangmu.</p>
      <RouterLink to="/" class="hero-button">Mulai belanja <span>↗</span></RouterLink>
    </section>
  </main>
</template>
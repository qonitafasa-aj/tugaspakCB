<script setup>
import { computed, ref } from 'vue'
import ProductCard from '../components/ProductCard.vue'
import { products } from '../data/products'

const kategoriAktif = ref('Semua')
const kategori = ['Semua', 'Lifestyle', 'Elektronik', 'Fashion', 'Home Living']

const produkTampil = computed(() => {
  if (kategoriAktif.value === 'Semua') return products
  return products.filter((product) => product.category === kategoriAktif.value)
})
</script>

<template>
  <main class="page-container">
    <section class="hero-banner">
      <div class="hero-content">
        <span class="hero-kicker"><i></i> PILIHAN HARI INI</span>
        <h1>Temukan hal kecil<br>yang membuat hari<br><em>lebih berarti.</em></h1>
        <p>Kurasi produk pilihan untuk menemani setiap cerita dan aktivitasmu.</p>
        <a href="#katalog" class="hero-button">Jelajahi koleksi <span>↗</span></a>
      </div>
      <div class="hero-visual">
        <div class="hero-orbit orbit-one"></div>
        <div class="hero-orbit orbit-two"></div>
        <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=1000&q=85" alt="Interior toko minimalis dengan produk pilihan">
        <span class="hero-sticker">GOOD<br>THINGS<br>INSIDE ✳</span>
        <span class="hero-caption">THE EVERYDAY EDIT / 2026</span>
      </div>
      <div class="hero-index">01 — 06</div>
    </section>

    <section id="katalog" class="catalog-section">
      <div class="catalog-heading">
        <div>
          <p class="section-eyebrow">DIKURASI UNTUKMU</p>
          <h2>Belanja <em>pilihan.</em></h2>
        </div>
        <p class="catalog-note">Temukan favorit baru<br>di antara koleksi kami.</p>
      </div>

      <div class="category-row">
        <div class="category-filters">
          <button
            v-for="item in kategori"
            :key="item"
            :class="['category-chip', { active: kategoriAktif === item }]"
            @click="kategoriAktif = item"
          >{{ item }}</button>
        </div>
        <span class="product-total">MENAMPILKAN {{ produkTampil.length }} PRODUK</span>
      </div>

      <div class="product-grid">
        <ProductCard v-for="product in produkTampil" :key="product.id" :product="product" />
      </div>
    </section>

    <section class="bottom-note">
      <span class="note-star">✳</span>
      <p>Lebih dari sekadar barang.<br><em>Temukan yang cocok dengan ceritamu.</em></p>
      <span class="note-number">RUANGBELANJA / 001</span>
    </section>
  </main>
</template>
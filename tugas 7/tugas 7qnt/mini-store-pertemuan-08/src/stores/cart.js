import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])

  // Jumlah seluruh barang di keranjang
  const totalItems = computed(() =>
    items.value.reduce((total, item) => total + item.quantity, 0)
  )

  // Total harga semua barang
  const totalPrice = computed(() =>
    items.value.reduce((total, item) => total + item.price * item.quantity, 0)
  )

  // Menambahkan produk atau menambah kuantitas jika sudah ada
  function addToCart(product) {
    const existing = items.value.find((item) => item.id === product.id)

    if (existing) {
      existing.quantity += 1
    } else {
      items.value.push({ ...product, quantity: 1 })
    }
  }

  function increaseQuantity(id) {
    const item = items.value.find((product) => product.id === id)
    if (item) item.quantity += 1
  }

  function decreaseQuantity(id) {
    const item = items.value.find((product) => product.id === id)
    if (!item) return

    if (item.quantity > 1) {
      item.quantity -= 1
    } else {
      removeFromCart(id)
    }
  }

  function removeFromCart(id) {
    items.value = items.value.filter((item) => item.id !== id)
  }

  function clearCart() {
    items.value = []
  }

  return {
    items,
    totalItems,
    totalPrice,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart
  }
})
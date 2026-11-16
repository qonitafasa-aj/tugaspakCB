<script setup>
import { ref, computed } from 'vue'

const judulBuku = ref('')
const kategoriBuku = ref('Novel')
const statusBaca = ref(false)
const daftarBuku = ref([])

const tambahBuku = () => {
  if (judulBuku.value.trim() === '') return
  daftarBuku.value.push({
    judul: judulBuku.value,
    kategori: kategoriBuku.value,
    selesai: statusBaca.value
  })
  judulBuku.value = ''
  statusBaca.value = false
}

const totalSelesai = computed(() => {
  return daftarBuku.value.filter(buku => buku.selesai).length
})
</script>

<template>
  <div style="padding: 20px; font-family: Arial;">
    <h2>Form Catatan Buku</h2>
    
    <form @submit.prevent="tambahBuku" style="margin-bottom: 20px;">
      <div style="margin-bottom: 10px;">
        <label>Judul Buku: </label>
        <input type="text" v-model="judulBuku" placeholder="Masukkan judul buku..." required />
      </div>

      <div style="margin-bottom: 10px;">
        <label>Kategori Buku: </label>
        <select v-model="kategoriBuku">
          <option value="Novel">Novel</option>
          <option value="Edukasi">Edukasi</option>
          <option value="Teknologi">Teknologi</option>
          <option value="Fiksi">Fiksi</option>
        </select>
      </div>

      <div style="margin-bottom: 10px;">
        <label>
          <input type="checkbox" v-model="statusBaca" /> Selesai Dibaca
        </label>
      </div>

      <button type="submit">Tambah Buku</button>
    </form>

    <hr />

    <h3>Daftar Buku (Total Selesai Dibaca: {{ totalSelesai }})</h3>
    <ul>
      <li v-for="(buku, index) in daftarBuku" :key="index">
        <strong>{{ buku.judul }}</strong> - [{{ buku.kategori }}] 
        <span>Status: {{ buku.selesai ? 'Selesai Dibaca' : 'Belum Selesai' }}</span>
      </li>
    </ul>
  </div>
</template>
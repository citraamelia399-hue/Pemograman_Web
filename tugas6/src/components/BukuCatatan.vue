
<script setup>
import { ref, computed } from 'vue'

// Input data buku
const judul = ref('')
const kategori = ref('')
const sudahDibaca = ref(false)

// Daftar buku
const daftarBuku = ref([])

// Fungsi menambahkan buku
function tambahBuku() {
  if (judul.value.trim() === '' || kategori.value === '') {
    alert('Judul dan kategori harus diisi!')
    return
  }

  daftarBuku.value.push({
    id: Date.now(),
    judul: judul.value,
    kategori: kategori.value,
    sudahDibaca: sudahDibaca.value
  })

  // Mengosongkan form
  judul.value = ''
  kategori.value = ''
  sudahDibaca.value = false
}

// Menghitung buku yang sudah dibaca
const jumlahSelesai = computed(() => {
  return daftarBuku.value.filter(
    buku => buku.sudahDibaca
  ).length
})

// Menghapus buku
function hapusBuku(id) {
  daftarBuku.value = daftarBuku.value.filter(
    buku => buku.id !== id
  )
}
</script>

<template>
  <div class="container">
    <h1>📚 Buku Catatan</h1>
    <p class="deskripsi">
      Aplikasi pencatatan daftar buku
    </p>

    <div class="form-buku">
      <label>Judul Buku</label>
      <input
        v-model="judul"
        type="text"
        placeholder="Masukkan judul buku"
      />

      <label>Kategori Buku</label>
      <select v-model="kategori">
        <option value="">Pilih kategori</option>
        <option value="Teknologi">Teknologi</option>
        <option value="Pendidikan">Pendidikan</option>
        <option value="Novel">Novel</option>
        <option value="Sejarah">Sejarah</option>
      </select>

      <label class="checkbox">
        <input
          type="checkbox"
          v-model="sudahDibaca"
        />
        Sudah selesai dibaca
      </label>

      <button @click="tambahBuku">
        + Tambahkan Buku
      </button>
    </div>

    <div class="hasil">
      <h3>Daftar Buku</h3>

      <p class="jumlah">
        Buku selesai dibaca: {{ jumlahSelesai }}
        dari {{ daftarBuku.length }}
      </p>

      <div v-if="daftarBuku.length === 0">
        Belum ada buku yang ditambahkan.
      </div>

      <div
        v-for="buku in daftarBuku"
        :key="buku.id"
        class="buku-item"
      >
        <div>
          <h4>{{ buku.judul }}</h4>
          <p>Kategori: {{ buku.kategori }}</p>
          <p>
            Status:
            {{ buku.sudahDibaca ? 'Sudah dibaca' : 'Belum dibaca' }}
          </p>
        </div>

        <button
          class="hapus"
          @click="hapusBuku(buku.id)"
        >
          Hapus
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 40px auto;
  padding: 25px;
  font-family: Arial, sans-serif;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

h1 {
  text-align: center;
  color: #42b883;
}

.deskripsi {
  text-align: center;
  color: #666;
}

.form-buku {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

input[type="text"],
select {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.checkbox {
  display: flex;
  gap: 8px;
  align-items: center;
}

button {
  padding: 12px;
  border: none;
  border-radius: 6px;
  background: #42b883;
  color: white;
  cursor: pointer;
}

button:hover {
  background: #32976b;
}

.hasil {
  margin-top: 25px;
}

.jumlah {
  background: #e4f8ed;
  padding: 12px;
  border-radius: 6px;
  color: #24734e;
}

.buku-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 12px;
  margin-top: 12px;
  gap: 10px;
}

.buku-item h4 {
  margin: 0 0 8px;
}

.buku-item p {
  margin: 5px 0;
  color: #555;
}

.hapus {
  background: #e74c3c;
}
</style>

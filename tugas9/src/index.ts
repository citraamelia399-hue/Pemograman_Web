import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

//2: Koleksi data inventaris laboratorium (komputer, proyektor, switch, router)
let inventaris = [
  { id: 1, nama: 'Komputer Lab PC-01', kategori: 'komputer', kondisi: 'Baik' },
  { id: 2, nama: 'Proyektor Epson', kategori: 'proyektor', kondisi: 'Baik' },
  { id: 3, nama: 'Switch Cisco', kategori: 'switch', kondisi: 'Baik' },
  { id: 4, nama: 'Router Mikrotik', kategori: 'router', kondisi: 'Rusak Ringan' }
]

// 3a: GET /api/inventaris (get list)
app.get('/api/inventaris', (c) => {
  return c.json({
    status: 'success',
    total: inventaris.length,
    data: inventaris
  })
})

// 3b: GET /api/inventaris/:id (get by ID)
app.get('/api/inventaris/:id', (c) => {
  const id = Number(c.req.param('id'))
  const barang = inventaris.find((item) => item.id === id)

  if (!barang) {
    return c.json({ status: 'error', message: 'Barang tidak ditemukan' }, 404)
  }

  return c.json({
    status: 'success',
    data: barang
  })
})

// 3c: POST /api/inventaris (create new inventasi)
app.post('/api/inventaris', async (c) => {
  try {
    const input = await c.req.json<{
      nama: string
      kategori: string
      kondisi?: string
    }>()

    if (!input.nama || !input.kategori) {
      return c.json({
        status: 'error',
        message: 'Nama dan kategori wajib diisi'
      }, 400)
    }

    const barangBaru = {
      id: inventaris.length > 0
        ? inventaris[inventaris.length - 1].id + 1
        : 1,
      nama: input.nama,
      kategori: input.kategori,
      kondisi: input.kondisi || 'Baik'
    }

    inventaris.push(barangBaru)

    return c.json({
      status: 'success',
      message: 'Barang berhasil ditambahkan',
      data: barangBaru
    }, 201)

  } catch (error) {
  return c.json({
    status: 'error',
    message: 'Format JSON tidak valid',
    detail: String(error)
  }, 400)
}
  }
)

export default app

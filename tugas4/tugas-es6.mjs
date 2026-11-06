const DataBarang =[ 
    {id: 1, barang:'Indomilk', qty: 10, harga:3_500, kategori:'susu Kotak'},
    {id: 2, barang:'FrisianFlag', qty: 8, harga:6_000, kategori:'susu Kental'},
    {id: 3, barang:'Dancow', qty: 3, harga:2_500,kategori:'susu Bubuk'},
    {id: 4, barang:'UltraMilk', qty: 2, harga:6_900, kategori:'susu UHT'},
    {id: 5, barang:'Ovaltine', qty: 5, harga:4_500, kategori:'susu Oat'},
    {id: 6, barang:'Cimory', qty: 4, harga:7_700, kategori:'susu Yogurt'}
];
const filter = DataBarang.filter(i => i.harga > 5000)
console.log(filter);
const hasilMap = DataBarang.map(({barang, qty, harga}) => ({
    barang,
    subtotal: qty * harga
}));
console.log("\n=== Hasil Map (Subtotal Tiap Barang)")
console.log(hasilMap)
const totalKeseluruhan = hasilMap.reduce((total, { subtotal }) => total + subtotal, 0);
console.log(totalKeseluruhan);
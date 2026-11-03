const mongoose = require('mongoose');

// 1. EMBEDDED SCHEMA: Penerbit (Subdocument)
const penerbitSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: [true, 'Nama penerbit wajib diisi'],
    trim: true
  },
  kota: {
    type: String,
    trim: true,
    default: 'Jakarta'
  }
}, { _id: false });

// 2. MAIN SCHEMA: Buku
const bukuSchema = new mongoose.Schema({
  judul: { 
    type: String, 
    required: [true, 'Judul buku wajib diisi'], 
    trim: true 
  },
  penulis: { 
    type: String, 
    required: [true, 'Penulis wajib diisi'], 
    trim: true 
  },
  tahun: { 
    type: Number, 
    required: [true, 'Tahun terbit wajib diisi'],
    min: [1900, 'Tahun tidak valid'],
    max: [2100, 'Tahun tidak valid']
  },
  // EMBEDDING: Penerbit
  penerbit: penerbitSchema,
  // REFERENCING: Relasi ke Kategori
  kategoriId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Kategori' 
  }
}, { timestamps: true });

module.exports = mongoose.model('Buku', bukuSchema);

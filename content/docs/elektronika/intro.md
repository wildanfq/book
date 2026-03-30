---
title: "Intro"
weight: 1
---

# Dasar elektronik
Memahami **hardware komputer** tanpa tahu elektronika dasar ibarat belajar menyetir mobil tanpa tahu cara kerja mesin. Bab ini akan membangun fondasi Anda sebelum menyentuh komponen kompleks seperti *motherboard* atau *processor*. Semua sistem digital pada dasarnya adalah manipulasi arus listrik yang sangat presisi.

---

## 1. Fondasi Atom: Asal Muasal Listrik

Segala teknologi canggih saat ini bekerja dengan memanipulasi partikel terkecil di alam semesta. Untuk memahami listrik, kita harus melihat ke dalam struktur atom.

* **Inti Atom:** Pusat massa yang terdiri dari **Proton** (bermuatan positif) dan **Neutron** (netral).
* **Elektron:** Partikel bermuatan negatif yang mengorbit inti.
* **Elektron Valensi:** Elektron yang berada di orbit terluar. Karena letaknya jauh dari inti, ikatannya lemah dan mudah lepas.
* **Arus Listrik:** Terjadi ketika elektron-elektron valensi ini melompat dari satu atom ke atom lain secara kontinu dan searah akibat adanya perbedaan potensial (tegangan).

---

## 2. Klasifikasi Arus: AC vs DC

Dalam dunia komputer, kedua jenis arus ini digunakan secara berdampingan namun untuk tujuan yang sangat berbeda.

| Karakteristik | AC (*Alternating Current*) | DC (*Direct Current*) |
| :--- | :--- | :--- |
| **Definisi** | Arus bolak-balik (arah elektron berubah-ubah secara periodik). | Arus searah (elektron mengalir tetap ke satu arah dari negatif ke positif). |
| **Sumber Utama** | Stop Kontak PLN (Grid Listrik). | Baterai, Aki, Power Supply (PSU), Adaptor. |
| **Penggunaan** | Transmisi listrik jarak jauh. | Perangkat digital sensitif (Laptop, PC, HP). |
| **Keamanan** | **Bahaya Tinggi!** Tegangan standar 220V. | **Relatif Aman.** Tegangan rendah (5V - 12V). |

> **Analogi Komputer:** Power Supply (PSU) bertugas sebagai "penerjemah" yang mengubah AC dari dinding menjadi DC yang stabil untuk memberi makan komponen internal.

---

## 3. Variabel Utama: Tegangan, Arus, dan Hambatan

Untuk memahami bagaimana sirkuit bekerja, kita bisa menggunakan **Analogi Pipa Air**:

1. **Tegangan (Voltage - V):** Diukur dalam **Volt**. Ini adalah "Tekanan Air". Gaya yang mendorong elektron agar mau mengalir dalam kabel.

2. **Arus (Current - I):** Diukur dalam **Ampere**. Ini adalah "Debit Air". Jumlah elektron yang mengalir melewati suatu titik dalam satu detik.

3. **Hambatan (Resistance - R):** Diukur dalam **Ohm (Ω)**. Ini adalah "Diameter Pipa". Sifat material yang menghambat atau membatasi laju aliran listrik.

---

## 4. Komponen Pasif: Penjaga Stabilitas

Sebelum masuk ke komponen aktif seperti transistor, Anda wajib mengenal "Tiga Serangkai" komponen pasif:

### A. Resistor (Penghambat)

Berfungsi membatasi arus listrik. Tanpa resistor, komponen seperti LED akan terbakar karena menerima arus berlebih.

* **Simbol:** Garis zig-zag atau persegi panjang kecil.

### B. Kapasitor (Penyimpan Muatan)

Ibarat tangki air cadangan kecil. Ia menyimpan energi listrik sementara dan melepaskannya saat tegangan turun.

* **Fungsi di PC:** Memastikan suplai listrik ke *processor* tetap halus (*smooth*) meskipun ada fluktuasi kecil.

### C. Induktor (Kumparan)

Menyimpan energi dalam bentuk medan magnet. Digunakan untuk menyaring gangguan (*noise*) frekuensi tinggi agar sinyal data tidak korup atau error.

---

## 5. Hukum Ohm: Aturan Main Elektronika

Hukum Ohm adalah rumus dasar yang menghubungkan Tegangan, Arus, dan Hambatan. Karena rumus matematika terkadang sulit tampil di web, gunakan panduan teks di bawah ini:

### Segitiga Rumus

* **V = I x R** (Tegangan = Arus dikali Hambatan)
* **I = V / R** (Arus = Tegangan dibagi Hambatan)
* **R = V / I** (Hambatan = Tegangan dibagi Arus)

### Contoh Kasus Praktis

Anda memiliki baterai **9 Volt** dan sebuah lampu LED yang hanya boleh menerima arus maksimal **0,02 Ampere**. Berapa hambatan (Resistor) yang dibutuhkan agar LED tidak putus?

**Cara Menghitung:**

1. Gunakan rumus mencari R: **R = V / I**
2. Masukkan angka: **R = 9 / 0,02**
3. Hasilnya: **R = 450 Ohm**

---

## 6. Proyek Praktik: Merakit Sirkuit LED Seri

Mari kita terapkan teori di atas ke dalam sebuah jalur tunggal yang nyata.

![Circuit Elektronik](elektronik.jpeg)

### Daftar Alat dan Bahan

1. **Power Source:** Baterai 9V (Sumber tenaga).
2. **Control:** Saklar/Switch (Pintu untuk memutus/menyambung arus).
3. **Protection:** Resistor 470 Ohm (Penjaga agar LED tidak meledak).
4. **Output:** LED (Lampu indikator).
5. **Medium:** Kabel Jumper (Jalan tol bagi elektron).

---

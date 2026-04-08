---
title: "Logika Kombinasional"
weight: 4
---

Rangkaian kombinasional adalah fondasi dari setiap sistem digital (seperti kalkulator dan komputer). Ciri khas utamanya adalah: **Output (hasil) saat ini ditentukan sepenuhnya oleh kombinasi Input (masukan) saat ini.**

**Perbedaan Utama:**

* **Tidak Ada Memori:** Rangkaian ini tidak "mengingat" apa yang terjadi sebelumnya. Begitu input berubah, output langsung berubah.
* **Proses Instan:** Tidak menunggu detak jam (*clock*), bekerja secepat aliran listrik melewati gerbang logikanya.

---

## 1. Pengelola Jalur Data (MUX & DEMUX)

Bayangkan data sebagai arus lalu lintas. Kita butuh "polisi lalu lintas" untuk mengatur arahnya.

### A. Multiplexer (MUX)

Multiplexer berfungsi memilih satu dari banyak jalur masuk untuk diteruskan ke satu jalur keluar.

* **Analogi:** Seperti TV di rumah Anda. Ada banyak sumber (Antena, Konsol Game, TV Box), tapi hanya satu yang bisa tampil di layar berdasarkan tombol yang Anda tekan di remote.
* **Pentingnya:** Digunakan oleh CPU untuk memilih data mana yang harus diproses selanjutnya.

### B. Demultiplexer (DEMUX)

Kebalikan dari MUX. Ia mengambil satu input dan menyalurkannya ke salah satu dari banyak jalur keluar.

* **Analogi:** Seperti petugas sortir paket. Ia menerima paket dari satu ban berjalan, lalu mengarahkannya ke truk tujuan yang benar berdasarkan alamatnya.

---

## 2. Penerjemah Kode (Decoder & Encoder)

Komputer berbicara dalam bahasa angka biner (0 dan 1). Komponen ini membantu menerjemahkan bahasa tersebut.

### A. Decoder

Decoder mengubah kode biner yang ringkas menjadi satu sinyal aktif yang spesifik.

* **Cara Kerja:** Jika Anda memberi kode biner "01", maka hanya lampu nomor 2 yang menyala.
* **Fungsi di Komputer:** Digunakan untuk "membangunkan" bagian tertentu dari memori atau memberi perintah spesifik ke mesin.

### B. Encoder

Kebalikan dari Decoder. Ia mengambil banyak input dan meringkasnya menjadi kode biner yang pendek agar efisien.

---

## 3. Rangkaian Berhitung (Adder)

Semua proses matematika di dalam komputer (tambah, kurang, kali, bagi) sebenarnya adalah hasil dari penjumlahan biner yang sangat cepat.

### A. Half Adder (HA)

Rangkaian dasar untuk menjumlahkan dua angka biner (0 atau 1).

* **Output:** Menghasilkan **Sum** (hasil jumlah) dan **Carry** (angka simpanan jika hasilnya meluap).

### B. Full Adder (FA)

Rangkaian yang lebih lengkap. Ia bisa menjumlahkan dua angka biner PLUS satu angka "simpanan" dari hasil penjumlahan sebelumnya. Ini adalah komponen utama dalam kalkulator.

---

## 4. Comparator

Rangkaian ini bertugas untuk membandingkan dua buah nilai dan memberikan jawaban logis tentang hubungan keduanya.

* **Tugasnya:** Menentukan apakah:
* Angka A **sama dengan** Angka B.
* Angka A **lebih besar dari** Angka B.
* Angka A **lebih kecil dari** Angka B.
* **Kegunaan:** Digunakan untuk logika "Jika... Maka...". Misalnya: *Jika suhu > 30 derajat, maka nyalakan AC.*

---

{{< youtube AaN72s5WfOM >}}

---
title: "Combinational Logic"
weight: 4
---

# Rangkaian Logika Kombinasional

adalah pondasi dari setiap sistem digital modern. Karakteristik utamanya adalah **Output sepenuhnya bergantung pada kombinasi Input saat ini.**

Berbeda dengan rangkaian sekuensial (seperti *Register* atau *Memory*), rangkaian kombinasional:
1. **Tidak Memiliki Memori:** Tidak ada umpan balik (*feedback*) yang menyimpan status sebelumnya.
2. **Tanpa Clock:** Beroperasi secara asinkron (output berubah segera setelah input stabil, dipisahkan hanya oleh *propagation delay*).
3. **Fungsi Matematis:** Dapat didefinisikan secara murni menggunakan Aljabar Boolean dan Tabel Kebenaran.

---

## 1. Pengatur Aliran Data (Data Selector & Distributor)

Dalam perancangan CPU (seperti RISC-V), bagian ini sangat krusial untuk menentukan jalur data (*datapath*).

### A. Multiplexer (MUX)
Multiplexer berfungsi sebagai **"Data Selector"**. Ia memilih satu dari sekian banyak input untuk diarahkan ke jalur tunggal.



[Image of 4-to-1 Multiplexer logic circuit diagram]


* **Aplikasi pada RISC-V:** Digunakan untuk memilih apakah input ke ALU berasal dari *Register File* atau dari nilai *Immediate* (konstanta).
* **Rumus:** Jika terdapat $n$ jalur pemilih (*select bits*), jumlah input maksimal adalah $2^n$.

> **Analogi:** Seperti wesel rel kereta api yang menentukan kereta dari jalur mana yang boleh masuk ke rel utama menuju stasiun.

### B. Demultiplexer (DEMUX)
Kebalikan dari MUX, DEMUX berfungsi sebagai **"Data Distributor"**. Ia mengambil satu input dan menyalurkannya ke salah satu dari banyak output.
> **Analogi:** Seperti petugas sortir logistik yang menerima paket dari satu ban berjalan dan mengarahkannya ke salah satu truk tujuan yang spesifik.

---

## 2. Pengonversi Kode (Code Converter)

Digunakan untuk menerjemahkan instruksi mesin menjadi sinyal kendali.

### A. Decoder
Decoder mengubah kode biner $n$-bit menjadi $2^n$ jalur output unik. Biasanya digunakan sebagai **Active High** atau **Active Low**.



* **Aplikasi pada RISC-V:** Bagian *Instruction Decoder* menggunakan ini untuk menerjemahkan *opcode* instruksi menjadi sinyal aktif untuk menyalakan ALU atau menulis ke memori.

### B. Encoder
Encoder meringkas banyak jalur input menjadi kode biner yang lebih kecil.
* **Priority Encoder:** Jenis khusus yang hanya memproses input dengan derajat kepentingan tertinggi jika ada dua input yang aktif bersamaan.

---

## 3. Rangkaian Aritmatika (Adder)

Ini adalah komponen penyusun **ALU (Arithmetic Logic Unit)**. Semua operasi matematika di komputer berakar dari penjumlahan biner.

### A. Half Adder (HA)
Menjumlahkan dua bit ($A$ dan $B$).
- **Sum ($S$):** $A \oplus B$ (Gerbang XOR)
- **Carry ($C$):** $A \cdot B$ (Gerbang AND)



[Image of Half Adder logic gate diagram]


### B. Full Adder (FA)
Mampu menjumlahkan tiga bit: $A$, $B$, dan $C_{in}$ (Carry-in).
- **Logika:** Gabungan dari 2 Half Adder dan 1 gerbang OR.



### C. Ripple Carry Adder (RCA)
Untuk menjumlahkan angka yang besar (misal 32-bit pada RISC-V), FA disusun secara berantai.
* **Isu Teknik:** Memiliki masalah *propagation delay* karena bit paling ujung harus menunggu "limpahan" (*carry*) dari bit pertama selesai diproses.

---

## 4. Magnitude Comparator (Pembanding)

Rangkaian ini membandingkan dua nilai biner secara bit-per-bit untuk menentukan hubungan logika.



- **Keluaran:** Biasanya terdiri dari tiga pin output: $A > B$, $A < B$, dan $A = B$.
- **Implementasi pada RISC-V:** Digunakan pada instruksi *Branch* (seperti `BEQ` atau `BNE`) untuk memutuskan apakah program harus melompat ke alamat lain atau tidak.

---

## Ringkasan Perbedaan Komponen

| Komponen | Fungsi Utama | Contoh Penggunaan di CPU |
| :--- | :--- | :--- |
| **MUX** | Memilih data | Memilih sumber operand ALU |
| **Decoder** | Menerjemahkan kode | Unit Dekoding Instruksi |
| **Adder** | Penjumlahan | Eksekusi perhitungan di ALU |
| **Comparator** | Membandingkan nilai | Logika percabangan (*Branching*) |

---

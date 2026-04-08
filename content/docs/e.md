---
title: "Logika Sekuensial"
weight: 5
---

Berbeda dengan rangkaian kombinasional (seperti ALU atau Multiplexer) yang outputnya hanya bergantung pada input saat itu juga, **Rangkaian Sekuensial** adalah rangkaian logika yang outputnya ditentukan oleh kombinasi **input saat ini** dan **status sebelumnya (sejarah)**.

Inti dari rangkaian sekuensial adalah hadirnya elemen **Memori**. Kemampuan sirkuit untuk "mengingat" informasi ini adalah fondasi mutlak dalam pembuatan arsitektur prosesor seperti **RISC-V**.

---

## 1. Konsep Clock (Sinyal Detak)

Sebelum memahami komponen memori, kita wajib memahami konsep **Clock**.

Dalam CPU yang sinkron, Clock adalah sinyal listrik yang terus berdenyut secara stabil dan berulang antara status tinggi (1) dan rendah (0). Sinyal ini berfungsi sebagai "konduktor" atau metronom yang memastikan semua perpindahan data di dalam prosesor terjadi secara teratur dan bersamaan.

> **Catatan Penting:** Tanpa adanya sinkronisasi Clock, sinyal data yang berjalan dengan kecepatan berbeda akan saling bertabrakan (*race condition*), menyebabkan kerusakan atau kesalahan perhitungan.

---

## 2. D Flip-Flop (Komponen Dasar Memori)

Untuk menyimpan sebuah data, kita menggunakan Flip-Flop. Salah satu jenis yang **paling banyak digunakan** dalam arsitektur prosesor modern adalah **D Flip-Flop**.

Huruf "D" merujuk pada **Data**. Prinsip kerja D Flip-Flop sangat sederhana dan fungsional: apapun nilai bit (0 atau 1) yang ada pada jalur input **D**, nilai tersebut akan disalin dan disimpan ke jalur output **Q**, *tetapi hanya pada saat Clock berdetak*.

### Cara Kerja Internal D Flip-Flop

D Flip-Flop merupakan penyempurnaan dari desain memori lama (SR Flip-Flop). D Flip-Flop memodifikasi jalur inputnya dengan menambahkan sebuah gerbang **NOT** di dalam sirkuitnya. Hal ini secara otomatis mencegah terjadinya "kondisi terlarang" (error) saat sirkuit mencoba menyimpan angka 1 dan 0 secara bersamaan.

### Tabel Kebenaran D Flip-Flop

| Input Data (D) | Detak Clock (CLK) | Output Baru (Q) | Keterangan |
| :---: | :---: | :---: | :--- |
| 0 | Naik (↑) | **0** | Menyimpan bit 0 |
| 1 | Naik (↑) | **1** | Menyimpan bit 1 |
| Acak (X) | Diam (0 / 1) | **Q (Tetap)** | Selama tidak ada transisi detak, data lama terkunci |

---

## 3. Register (Penyimpanan Paralel)

Satu buah D Flip-Flop hanya mampu menyimpan **1-bit** data (satu buah angka 0 atau 1). Di sisi lain, standar arsitektur CPU RISC-V (RV32I) bekerja dengan bongkahan data berukuran **32-bit**.

Untuk menyimpan data sebesar itu, kita menyusun D Flip-Flop secara berjejer secara paralel. Kumpulan Flip-Flop inilah yang disebut sebagai **Register**.

* Untuk membuat **1 buah Register 32-bit**, kita membutuhkan **32 buah D Flip-Flop**.
* Ke-32 Flip-Flop ini dihubungkan ke **satu jalur Clock yang sama**.
* Ketika Clock berdetak, 32-bit data (misalnya instruksi memori atau hasil penjumlahan dari ALU) akan masuk secara bersamaan (*Parallel Load*) ke dalam register tersebut dalam sepersekian detik.

---

  {{< youtube AaN72s5WfOM >}}

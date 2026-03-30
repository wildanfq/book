---
title: "Logic Gates"
weight: 3
---

# Gerbang logika dasar

**Gerbang Logika** (*Logic Gate*) adalah blok bangunan dasar dalam sistem elektronika digital dan komputer. Fungsinya adalah mengambil keputusan berdasarkan aturan logika tertentu dengan memproses satu atau lebih sinyal input menjadi satu sinyal output. Sinyal ini direpresentasikan dalam biner: **1 (HIGH/Nyala)** dan **0 (LOW/Mati)**.

---

## 1. Gerbang NOT (Inverter)

Gerbang NOT adalah gerbang paling sederhana namun sangat vital. Ia hanya memiliki **satu input** dan **satu output**. Fungsinya adalah membalikkan keadaan sinyal (*Inversion*), Jika input 1, output menjadi 0. Jika input 0, output menjadi 1.

### Tabel Kebenaran NOT

| Input (A) | Output (Y) |
| :---: | :---: |
| 0 | **1** |
| 1 | **0** |

* **Sirkuit Transistor:** Menggunakan satu buah Transistor BJT NPN. Kaki *Collector* dihubungkan ke sumber tegangan (VCC) dan titik output, sementara kaki *Emitter* ke *Ground*. Ketika *Base* diberi arus (1), transistor aktif dan menyedot arus ke *Ground*, sehingga output mati (0). Inilah prinsip dasar pembalikan sinyal secara elektrik.
* **IC Standar:** **74HC04** (*Hex Inverter*). IC ini berisi 6 buah gerbang NOT sekaligus. Dalam arsitektur prosesor, gerbang ini esensial untuk membalikkan bit, misalnya dalam sistem bilangan *Two's Complement* (bilangan negatif).

---

## 2. Gerbang AND

Gerbang AND beroperasi layaknya operasi perkalian. Ia hanya akan menghasilkan output **1 (HIGH)** jika **SEMUA** inputnya bernilai 1. Jika ada satu saja input yang bernilai 0, maka output akan 0.

### Tabel Kebenaran AND

| Input (A) | Input (B) | Output (Y) |
| :---: | :---: | :---: |
| 0 | 0 | **0** |
| 0 | 1 | **0** |
| 1 | 0 | **0** |
| 1 | 1 | **1** |

* **Sirkuit Transistor:** Dianalogikan dengan dua sakelar (transistor) yang disusun secara **seri**. Arus dari sumber tegangan harus melewati transistor A, lalu melewati transistor B, baru bisa mencapai lampu (output). Jika salah satu transistor tertutup rapat (OFF), arus terputus.
* **IC Standar:** **74HC08** (*Quad 2-Input AND Gate*). Terdapat 4 gerbang AND independen di dalam satu chip ini.

---

## 3. Gerbang OR

Gerbang OR beroperasi layaknya operasi penjumlahan. Ia menghasilkan output **1 (HIGH)** jika **salah satu atau kedua** inputnya bernilai 1. Output hanya akan menjadi 0 jika semua inputnya 0.

### Tabel Kebenaran OR

| Input (A) | Input (B) | Output (Y) |
| :---: | :---: | :---: |
| 0 | 0 | **0** |
| 0 | 1 | **1** |
| 1 | 0 | **1** |
| 1 | 1 | **1** |

* **Sirkuit Transistor:** Menggunakan dua transistor yang disusun secara **paralel**. Arus memiliki dua jalur alternatif untuk mencapai output. Jika transistor A aktif, ATAU transistor B aktif, arus tetap bisa mengalir dan menyalakan output.
* **IC Standar:** **74HC32** (*Quad 2-Input OR Gate*). Dalam desain prosesor, OR gate sering digunakan untuk menggabungkan sinyal *error* atau mendeteksi interupsi dari berbagai perangkat.

---

## 4. Gerbang NAND (Not-AND)

Gerbang NAND adalah gabungan dari gerbang AND yang diikuti oleh gerbang NOT. Outputnya adalah kebalikan dari gerbang AND. Menariknya, NAND disebut sebagai **Gerbang Universal**, karena Anda bisa merakit gerbang logika apa saja (AND, OR, NOT) hanya dengan menggunakan kumpulan gerbang NAND.

### Tabel Kebenaran NAND

| Input (A) | Input (B) | Output (Y) |
| :---: | :---: | :---: |
| 0 | 0 | **1** |
| 0 | 1 | **1** |
| 1 | 0 | **1** |
| 1 | 1 | **0** |

* **Sirkuit Transistor:** Mirip dengan AND (seri), namun posisi pengambilan output diubah. Saat kedua transistor mendapat sinyal (1), mereka menciptakan "jalan pintas" (*short circuit*) langsung ke *Ground*, yang menyebabkan tegangan output jatuh menjadi 0.
* **IC Standar:** **74HC00** (*Quad 2-Input NAND Gate*). Ini adalah chip legendaris dan paling sering diandalkan oleh para desainer sirkuit komputasi dasar.

---

## 5. Gerbang NOR (Not-OR)

Sama seperti NAND, NOR juga merupakan **Gerbang Universal**. Ini adalah kebalikan dari gerbang OR. Outputnya hanya akan bernilai **1 (HIGH)** jika **semua** inputnya bernilai **0**.

### Tabel Kebenaran NOR

| Input (A) | Input (B) | Output (Y) |
| :---: | :---: | :---: |
| 0 | 0 | **1** |
| 0 | 1 | **0** |
| 1 | 0 | **0** |
| 1 | 1 | **0** |

* **Sirkuit Transistor:** Menggunakan dua transistor yang disusun paralel, tetapi diposisikan untuk "menarik" tegangan output ke *Ground* (Pull-down). Jika salah satu saja transistor aktif, tegangan ditarik habis ke bawah, menghasilkan output 0.
* **IC Standar:** **74HC02** (*Quad 2-Input NOR Gate*). Gerbang ini memegang peran krusial dalam pembuatan **SR-Latch**, yaitu unit memori primitif penyimpan data 1-bit yang menjadi cikal bakal Register RAM di komputer Anda.

---

## 6. Gerbang XOR (Exclusive-OR)

XOR adalah gerbang detektor perbedaan. Output akan menjadi **1 (HIGH)** *hanya* jika status kedua inputnya **berbeda** (satu 0 dan satunya 1). Jika kedua input sama, outputnya 0.

### Tabel Kebenaran XOR

| Input (A) | Input (B) | Output (Y) |
| :---: | :---: | :---: |
| 0 | 0 | **0** |
| 0 | 1 | **1** |
| 1 | 0 | **1** |
| 1 | 1 | **0** |

* **Sirkuit Transistor:** Gerbang XOR terlalu kompleks untuk dibuat hanya dengan 1-2 transistor sederhana. Secara internal, XOR dibangun dari kombinasi gerbang AND, OR, dan NOT.
* **IC Standar:** **74HC86** (*Quad 2-Input XOR Gate*). IC ini adalah komponen wajib jika Anda ingin membuat sirkuit penjumlahan biner (*Half-Adder* atau *Full-Adder*) di atas *breadboard* atau Logisim.

---

## 7. Gerbang XNOR (Exclusive-NOR)

Kebalikan dari XOR. Gerbang ini disebut juga sebagai detektor kesamaan (*Equality Detector*). Output bernilai **1 (HIGH)** *hanya* jika kedua inputnya bernilai **sama** (sama-sama 0 atau sama-sama 1).

### Tabel Kebenaran XNOR

| Input (A) | Input (B) | Output (Y) |
| :---: | :---: | :---: |
| 0 | 0 | **1** |
| 0 | 1 | **0** |
| 1 | 0 | **0** |
| 1 | 1 | **1** |

* **IC Standar:** **74HC266** (*Quad 2-Input XNOR Gate*). XNOR sangat esensial dalam sirkuit pembanding (*Comparator*). Misalnya, saat prosesor perlu mengeksekusi instruksi: "Apakah nilai di Register A sama persis dengan Register B?".

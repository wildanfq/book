---
title: "Gerbang Logika"
weight: 4
---

**Aljabar Boolean** adalah sistem matematika yang ditemukan oleh George Boole. Berbeda dengan matematika biasa yang memiliki angka 0 sampai tak terhingga, di sini kita hanya mengenal dua nilai:

* **1 (True / ON / Tegangan Tinggi)**
* **0 (False / OFF / Tegangan Rendah)**

Dalam perangkat elektronik seperti HP atau Laptop, konsep ini diwujudkan dalam bentuk fisik yang disebut **Gerbang Logika** (*Logic Gates*).

---

## 1. Gerbang Logika Dasar

Hanya ada tiga operasi utama. Jika Anda paham ketiganya, Anda sudah memahami pondasi dasar komputer.

### A. NOT (Pembalik)

Gerbang ini berfungsi membalikkan keadaan. Jika masuk 1, keluar 0, dan sebaliknya.

* **Persamaan:** Y = NOT A
* **Tabel Kebenaran:**

| Input (A) | Output (Y) |
| :---: | :---: |
| 0 | **1** |
| 1 | **0** |

### B. AND (Perkalian Logika)

Output hanya akan bernilai **1** jika **SEMUA** input bernilai 1. Ibarat dua sakelar yang dipasang berurutan (seri).

* **Persamaan:** Y = A AND B
* **Tabel Kebenaran:**

| Input A | Input B | Output (Y) |
| :---: | :---: | :---: |
| 0 | 0 | **0** |
| 0 | 1 | **0** |
| 1 | 0 | **0** |
| 1 | 1 | **1** |

### C. OR (Penjumlahan Logika)

Output akan bernilai **1** jika **SALAH SATU atau SEMUA** input bernilai 1. Ibarat dua sakelar yang dipasang sejajar (paralel).

* **Persamaan:** Y = A OR B
* **Tabel Kebenaran:**

| Input A | Input B | Output (Y) |
| :---: | :---: | :---: |
| 0 | 0 | **0** |
| 0 | 1 | **1** |
| 1 | 0 | **1** |
| 1 | 1 | **1** |

---

## 2. Hukum Aljabar Boolean

Dalam merancang sirkuit, kita seringkali memiliki kombinasi gerbang yang terlalu banyak. Hukum-hukum ini digunakan untuk **menyederhanakan sirkuit** agar lebih murah dan efisien.

Berikut adalah hukum yang paling sering digunakan:

### A. Hukum Identitas

Apapun yang diproses dengan angka netral akan menghasilkan dirinya sendiri.

* A AND 1 = **A**
* A OR 0 = **A**

### B. Hukum Null (Dominansi)

Angka yang mendominasi hasil.

* A AND 0 = **0** (Apapun dikali 0 adalah 0)
* A OR 1 = **1** (Apapun ditambah 1, dalam boolean hasilnya tetap 1)

### C. Hukum Idempoten

Input yang sama diproses berkali-kali tidak akan mengubah hasil.

* A AND A = **A**
* A OR A = **A**

### D. Hukum Komplemen (Kebalikan)

Memproses variabel dengan lawannya sendiri.

* A AND (NOT A) = **0** (Tidak mungkin sesuatu bernilai Benar DAN Salah sekaligus)
* A OR (NOT A) = **1** (Pasti salah satunya bernilai Benar)

### E. Hukum Negasi Ganda

Kebalikan yang dibalikkan lagi akan kembali ke asal.

* NOT (NOT A) = **A**

---

## 3. Contoh Penerapan: Menyederhanakan Sirkuit

Bayangkan Anda memiliki sebuah sistem keamanan yang persamaannya adalah:
**Output = (A AND B) OR (A AND 0)**

Jika kita membangun sirkuit ini langsung, kita butuh **2 gerbang AND** dan **1 gerbang OR**. Namun, kita bisa menyederhanakannya menggunakan hukum aljabar:

1. Lihat bagian **(A AND 0)**. Berdasarkan *Hukum Null*, hasilnya adalah **0**.
    * Persamaan menjadi: **(A AND B) OR 0**
2. Lihat bagian **... OR 0**. Berdasarkan *Hukum Identitas*, apapun yang di-OR dengan 0 tidak berubah.
    * Persamaan akhir: **A AND B**

**Kesimpulan:**
Alih-alih memakai 3 gerbang, Anda cukup memakai **1 gerbang AND** saja. Hasilnya sama, tapi sirkuit Anda jadi lebih murah, hemat baterai, dan lebih cepat!

  {{< youtube Q9gmAgwT6o8 >}}

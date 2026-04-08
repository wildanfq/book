---
title: "Sistem Bilangan"
weight: 1
draft: false
---

Komputer tidak punya 10 jari seperti manusia. Mesin cuma mengerti dua keadaan: **Ada listrik** atau **Tidak ada listrik**. Karena itu, kita butuh cara untuk menerjemahkan angka manusia ke bahasa mesin. Inilah yang disebut dengan **Sistem Bilangan**.

Hanya ada 3 sistem bilangan yang wajib kamu tahu di dunia komputer:

---

## 1. Desimal (Angka Manusia)

Ini adalah angka biasa yang kita pakai sehari-hari sejak SD.
Disebut "Basis 10" karena punya 10 bentuk angka yang berbeda.

* **Angkanya:** 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.
* **Contoh:** 256. (Ya angka dua ratus lima puluh enam biasa).

---

## 2. Biner (Angka Mesin)

Ini bahasa aslinya komputer. Disebut "Basis 2" karena cuma ada dua angka. Satu angka di sistem ini sebutannya adalah **Bit**.

**Angkanya:**

* **1** = Listrik Nyala (ON)
* **0** = Listrik Mati (OFF)
* **Contoh:** 1011

**Cara Membaca Biner (Cara Cepat):**
Lupakan rumus matematika. Bayangkan saja dari kanan ke kiri itu punya nilai kelipatan dua: **... 8, 4, 2, 1**.
Kalau ada Biner **1011**, pasangkan dari kanan:

* Angka 1 (paling kanan) = nilainya 1
* Angka 1 (sebelahnya) = nilainya 2
* Angka 0 (sebelahnya) = MATI (lewati saja)
* Angka 1 (paling kiri) = nilainya 8
* **Total:** 8 + 2 + 1 = **11**

---

## 3. Heksadesimal (Singkatan Biner)

Kalau komputer disuruh baca angka yang besar, angka binernya bisa panjaaaaang banget (contoh: 110100101010). Mata manusia bisa juling melihatnya.

Maka diciptakanlah Heksadesimal (Basis 16) untuk meringkas biner tersebut. Heksadesimal dipakai di hal-hal teknis seperti kode warna website atau alamat memori.

* **Angkanya:** 0 sampai 9, lalu dilanjut huruf A sampai F.
* **Kenapa pakai huruf?** Karena angka 10 itu ada dua digit (1 dan 0). Biar tetap satu karakter, maka angka 10 diganti **A**, 11 diganti **B**, 12 jadi **C**, dan seterusnya sampai 15 jadi **F**.
* **Contoh:** 1A (Artinya 1 dan 10).

---

## Tabel Contekan Cepat

Biar gampang membayangkan, ini perbandingan ketiganya:

| Desimal (Manusia) | Biner (Mesin) | Heksadesimal (Singkatan) |
| :--- | :--- | :--- |
| 0 | 0000 | 0 |
| 5 | 0101 | 5 |
| 9 | 1001 | 9 |
| 10 | 1010 | **A** |
| 12 | 1100 | **C** |
| 15 | 1111 | **F** |

{{< youtube FFDMzbrEXaE >}}

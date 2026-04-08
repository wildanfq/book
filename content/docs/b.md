---
title: "Dasar Elektronika"
weight: 2
---

Komputer dan perangkat teknologi modern terdiri dari berbagai komponen elektronik yang kompleks. Namun, dengan memahami konsep dasar elektronika, kita akan jauh lebih mudah membedah dan mempelajari cara kerja perangkat-perangkat tersebut.

---

## 1. Fondasi Atom: Asal Mula Listrik

Segala teknologi canggih saat ini bekerja dengan memanipulasi partikel terkecil di alam semesta. Untuk memahami listrik, kita harus melihat ke dalam struktur atom:

* **Inti Atom:** Pusat massa yang terdiri dari **Proton** (bermuatan positif) dan **Neutron** (netral).
* **Elektron:** Partikel bermuatan negatif yang mengorbit inti atom.
* **Elektron Valensi:** Elektron yang berada di orbit paling luar. Karena letaknya jauh dari inti, ikatannya lemah dan mudah terlepas.
* **Arus Listrik:** Fenomena yang terjadi ketika elektron-elektron valensi ini melompat dari satu atom ke atom lain secara kontinu dan searah akibat adanya perbedaan potensial (tegangan).

---

## 2. Klasifikasi Arus: AC vs DC

Dalam dunia kelistrikan dan komputer, terdapat dua jenis arus utama yang digunakan secara berdampingan namun untuk tujuan yang berbeda.

| Karakteristik | AC (*Alternating Current*) | DC (*Direct Current*) |
| :--- | :--- | :--- |
| **Definisi** | Arus bolak-balik (arah aliran elektron berubah-ubah secara periodik). | Arus searah (elektron mengalir tetap ke satu arah dari kutub negatif ke positif). |
| **Sumber Utama** | Stop Kontak PLN (Grid Listrik). | Baterai, Aki, *Power Supply* (PSU), Adaptor. |
| **Penggunaan** | Transmisi listrik jarak jauh. | Perangkat digital sensitif (Laptop, PC, *Smartphone*). |
| **Tingkat Bahaya** | **Bahaya Tinggi!** Tegangan standar 220V. | **Relatif Aman.** Tegangan rendah (5V - 12V). |

---

## 3. Variabel Utama: Tegangan, Arus, dan Hambatan

Untuk memudahkan pemahaman tentang cara kerja sirkuit listrik, kita dapat menggunakan **Analogi Pipa Air**:

> * **Tegangan (Voltage / V):** Diukur dalam **Volt**. Ini ibarat **"Tekanan Air"**. Tegangan adalah gaya dorong yang memaksa elektron mengalir di dalam kabel.
> * **Arus (Current / I):** Diukur dalam **Ampere**. Ini ibarat **"Debit Air"**. Arus adalah jumlah elektron yang mengalir melewati suatu titik dalam satu detik.
> * **Hambatan (Resistance / R):** Diukur dalam **Ohm (Ω)**. Ini ibarat **"Diameter Pipa"**. Hambatan adalah sifat material yang membatasi laju aliran listrik.

---

## 4. Hukum Ohm: Aturan Main Elektronika

Hukum Ohm adalah rumus dasar yang menghubungkan Tegangan, Arus, dan Hambatan.

### Segitiga Rumus

* **V = I × R** (Tegangan = Arus dikali Hambatan)
* **I = V / R** (Arus = Tegangan dibagi Hambatan)
* **R = V / I** (Hambatan = Tegangan dibagi Arus)

### Contoh Kasus Praktis

Anda memiliki baterai **9 Volt** dan sebuah lampu LED yang hanya boleh menerima arus maksimal **0,02 Ampere**. Berapa ukuran Hambatan (Resistor) yang dibutuhkan agar lampu LED tidak putus/terbakar?

**Cara Menghitung:**

1. Gunakan rumus mencari R: **R = V / I**
2. Masukkan angka: **R = 9 / 0,02**
3. Hasilnya: **R = 450 Ohm**

---

## 5. Komponen Pasif: Penjaga Stabilitas

Komponen pasif adalah komponen yang hanya menyerap, menyimpan, atau melepaskan energi tanpa bisa mengendalikan arus secara aktif. Berikut adalah "Tiga Serangkai" komponen pasif:

1. **Resistor (Penghambat)**
   * **Fungsi:** Membatasi arus listrik yang lewat. Tanpa resistor, komponen sensitif seperti LED akan terbakar karena arus berlebih.
   * **Simbol:** Garis zig-zag.
2. **Kapasitor (Penyimpan Muatan)**
   * **Fungsi:** Menyimpan energi listrik sementara dan melepaskannya saat tegangan turun (ibarat tangki air cadangan). Pada PC, kapasitor memastikan suplai listrik ke prosesor tetap halus (*smooth*) meski ada fluktuasi.
3. **Induktor (Kumparan)**
   * **Fungsi:** Menyimpan energi dalam bentuk medan magnet. Sering digunakan untuk menyaring gangguan (*noise*) frekuensi tinggi agar sinyal data tidak *error*.

---

## 6. Komponen Aktif: Pengendali Arus

Berbeda dengan komponen pasif, **komponen aktif** memiliki kemampuan untuk **mengendalikan atau mengatur** aliran elektron.

**Ciri Khas Komponen Aktif:**

* Memerlukan sumber daya eksternal (catu daya) untuk beroperasi.
* Mampu melakukan penguatan sinyal (*amplification*).
* Dapat berfungsi sebagai sakelar elektronik (*switching*).

### A. Semikonduktor (Material Dasar)

Semikonduktor adalah material yang daya hantarnya berada di antara konduktor (logam) dan isolator (kaca/karet). Bahan paling populer adalah **Silikon (Si)**.

Untuk mengubah silikon murni menjadi komponen yang berguna, dilakukan proses **doping** (penambahan atom pengotor):

* **Tipe-P (*Positive*):** Kekurangan elektron, menciptakan "lubang" (*holes*) sebagai pembawa muatan.
* **Tipe-N (*Negative*):** Kelebihan elektron bebas.

> **P-N Junction:** Ketika material Tipe-P dan Tipe-N disatukan, terbentuklah batas pertemuan yang disebut *Depletion Region* (daerah deplesi). Ini adalah blok bangunan dasar bagi seluruh komponen semikonduktor modern.

### B. Dioda (Katup Penyearah Arus)

Dioda adalah komponen aktif paling sederhana (terdiri dari satu *P-N Junction*). Fungsinya mirip katup satu arah pada pipa air—hanya mengizinkan arus mengalir ke satu arah.

* **Forward Bias (Prasikap Maju):** Kutub positif dihubungkan ke Anoda (P) dan negatif ke Katoda (N). Jika tegangan melebihi batas (sekitar **0.7V** untuk silikon), arus akan mengalir.
* **Reverse Bias (Prasikap Balik):** Kutub dibalik. Arus akan terblokir total.
* **Aplikasi Utama:** Digunakan sebagai *Rectifier* (penyearah) pada *Power Supply* untuk mengubah arus AC menjadi DC.

### C. Transistor (Otak Elektronika Modern)

Transistor adalah komponen dengan tiga terminal yang berfungsi sebagai **sakelar super cepat** atau **penguat sinyal**. Komponen inilah yang memungkinkan komputer melakukan perhitungan logika biner (0 dan 1).

**1. BJT (*Bipolar Junction Transistor*)**

* Dikendalikan oleh **Arus** (*Current-Controlled*).
* **Terminal:**
  * *Base* (Basis): Gerbang pengendali; arus kecil di sini akan mengatur aliran arus yang besar.
  * *Collector* (Kolektor): Saluran masuk arus utama.
  * *Emitter* (Emitor): Saluran keluar arus.

**2. MOSFET (*Metal-Oxide-Semiconductor FET*)**

* Standar industri untuk pembuatan prosesor (CPU) modern.
* Dikendalikan oleh **Tegangan** (*Voltage-Controlled*). Sangat efisien dan tidak cepat panas karena hampir tidak ada arus bocor di gerbangnya.
* **Terminal:**
  * *Gate* (Gerbang): Pengendali berbasis medan listrik (tegangan).
  * *Drain*: Saluran masuk arus.
  * *Source*: Saluran keluar arus.
* **Jenis Utama:**
  * **N-Channel (NMOS):** Aktif (ON) ketika tegangan *Gate* lebih positif daripada *Source*.
  * **P-Channel (PMOS):** Aktif (ON) ketika tegangan *Gate* lebih rendah (negatif) daripada *Source*.
  
  {{< youtube mc979OhitAg >}}
  
# Skill-Test

## Soal 1
1. Buat Halaman Login
2. Saat login hit ke API
3. POST https://devel.bebasbayar.com/web/test_programmer.php
4. Content-Type: application/json
5. Accept: application/json
6. Request:
```
{"user": "sesuai inputan", "password": "sesuai inputan"}
```

### Credential untuk login:
```
User: admin
Pass: admin123
```
### Berdasarkan hasil API

Contoh Response Sukses:
```
{"rc":"00","rd":"Sukses"}
```
### Jika sukses masuk ke step 4
Contoh Response Gagal:
```
{"rc":"01","rd":"Invalid user\/password"}
```
Jika gagal tampilkan alert error sesuai “rd”

## Soal 3 - Logika
1. Ada 5 rumah
2. Orang Madura tinggal Rumah warna Merah Marun.
3. Orang Batak memelihara Anjing.
4. Tercium bau Capuchino di Rumah warna Hijau Pupus.
5. Orang Jawa minum Teh Melati.
6. Rumah Hijau Pupus berada di sebelah kanan Rumah warna Putih Tulang.
7. Orang yang suka makan Spagetti memelihara Kucing
8. Penghuni Rumah warna Kuning Telur suka makan Steak.
9. Susu Beruang diminum oleh pemilik Rumah di tengah.
10. Orang Sunda tinggal di Rumah Pertama.
11. Orang yang suka makan Pizza tinggal di sebelah rumah orang yang pelihara Ikan Cupang.
12. Steak dimakan di Rumah sebelahnya Rumah yang ada kandang Kudanya
13. Orang yang suka makan Burger juga sering minum Jus Wortel.
14. Orang Betawi suka sekali makan Mie Instan.
15. Orang Sunda tinggal di sebelah rumah wana Biru Langit.

Pertanyaannya:
Siapa yang memelihara Ular?


Aturan:

Gambarkan dalam bentuk bagan/tabel/chart dalam format bebas yang penting bisa menggambarkan logika dan teknis untuk menjawab pertanyaan di atas

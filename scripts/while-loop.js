// Perulangan akan di lakukan bila suatu kondisi tercapai atau benar

const jumlahlantai = 5;
let lantaisekarang = 1;

//Petugas ingin memeriksa adanya noda pada lantai. Jadi, selama terdapat noda pada lantai, maka ia akan mengulangi tahap kedua sampai kelima secara terus-menerus.
function kotoranRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Mengeceknya dahulu kemudian akan menjalankan perintah
while (lantaisekarang <= jumlahlantai) {
  let bersih = false;
  let kotoran = kotoranRandom(0, 1);

  if (kotoran === 0) bersih = true;
  if (bersih) lantaisekarang++;

  console.log(`Kotoran Ketemu Kemudian Ngepel di Lantai ${lantaisekarang}`);
}

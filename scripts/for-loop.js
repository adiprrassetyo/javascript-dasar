// Perulangan Akan Terus dilakukan sampai kondisi tertentu tercapai

// ketika petugas kebersihan mengepel lantai di sebuah gedung.
// Dia diberikan tugas  buat ngepel dari lantai 1 sampe lantai 5, dia bakal mengulangi kegiatan dia di lantai 1 (ngepel, meres pel, ngepel lagi) di tiap lantai sampai lantai ke 5.
const lantaisekarang = 1;

for (let lantai = lantaisekarang; lantai <= 5; lantai++) {
  console.log(`Aku lagi di lantai ${lantai}`);
  console.log("Ngepel!");
  console.log("Meres Pel!");
  console.log("Ngepel Lagi");
}

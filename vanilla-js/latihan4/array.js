// Array untuk mengkoleksi nama mantan pacar kita

const namaMantan = ["Komang", "Made", "Ketut"];
namaMantan.forEach(function(item, index, array) {
    console.log(item, index, array);
});

namaMantan.push("Dewi");

const indexKetut = namaMantan.indexOf("Ketut");

const namaMantanLama = namaMantan.slice();

namaMantan.pop();

console.log("Nama Mantan: ", namaMantan);
console.log("Nama Mantan Lama: ", namaMantanLama);

// console.log(indexKetut);
// console.log(namaMantan.indexOf("Made") + 1);
// namaMantan.splice(namaMantan.indexOf("Ketut"), 1);

// namaMantan.splice(indexKetut, 1);
// console.log(namaMantan);

// // Menambahkan nama mantan
// namaMantan.push("Dewi");
// console.log(namaMantan);

// // Menghapus nama mantan
// namaMantan.pop();
// console.log(namaMantan);

// // Menghapus nama mantan
// namaMantan.shift();
// console.log(namaMantan);


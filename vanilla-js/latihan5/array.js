// Array untuk mengkoleksi nama mantan pacar kita

const namaMantan = ["Komang", "Made", "Ketut", "Angel"];

namaMantan.push("Dewi");

const namaMantanLama = namaMantan.slice();

namaMantan.pop();

console.log(
    namaMantan
        .reduce(function(acc, mantan, ke) {
            acc[mantan] = `Mantan ke ${ke+1}`;
            return acc
        }, {})
);

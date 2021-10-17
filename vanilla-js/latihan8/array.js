// Array untuk mengkoleksi nama mantan pacar kita

const namaMantan = ["Komang", "Made", "Ketut", "Angel"];

namaMantan.push("Dewi");

const namaMantanLama = namaMantan.slice();

namaMantan.pop();

// console.log(
//     namaMantan
//         .reduce(function(acc, mantan, ke) {
//             acc[mantan] = `Mantan ke ${ke+1}`;
//             return acc
//         }, {})
// );

// for (let index = 0; index < namaMantan.length; index++) {
//     const element = namaMantan[index];
//     console.log(element);
// };

// let index = 0;
// while (index < namaMantan.length) {
//     const element = namaMantan[index];
//     console.log(element);
//     index++;
// }

// console.log(
//     namaMantan.map(function(mantan, ke) {
//         return `${mantan} adalah mantan ke ${ke+1}`;
//     }).join(", ")
// );

console.log(
    namaMantan
    .filter(function(mantan, ke) {
        return mantan == "Made";
    })
    .map(function(mantan, ke) {
        return `${mantan} adalah mantan ke ${ke+1}`;
    })
);
// Membuat switch case nama-nama buah

// const foo = "Salak"
// let namaBuah = ""

// Contoh 1
// switch (foo) {
//     case "Papayas":
//         namaBuah = "Papaya";
//         break;

//     case "Salak":
//         namaBuah = "Salak";
//         break;

//     default:
//         namaBuah = "Semangka";
//         break;
// };

const nomor = 1;

function pilihBuah(nomor) {
    switch (nomor) {
        case 1:
            return "Salak";
        
        case 2:
            return "Apel";

        case 3:
            return "Jeruk";
        
        case 4:
            return "Durian";
    
        default:
            return "Semangka";

    }
}

console.log(pilihBuah());
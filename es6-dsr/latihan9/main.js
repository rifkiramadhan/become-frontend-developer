// Mengambil element
const data = document.getElementById('data');

// ES5

// ES6

// Modul untuk member kelas
class Siswa {
    constructor(username, password, nama_kelas) {
        this.username = username;
        this.password = password;
        this.nama_kelas = nama_kelas;
    };

    gabung() {
        console.log(this.username + ' Telah bergabung pada kelas ' + this.nama_kelas);
    };

    hitungMember() {
        console.log("Tersedia 100 Member");
    };
};

// let tambahSiswa = new Siswa('kamuganteng', '123456', 'Web Desain');
// tambahSiswa.gabung();

class Langganan extends Siswa {
    constructor(username, paket) {
        super(username);
        this.paket = paket;
    };

    gabungPaket() {
        console.log('Hi ' + this.username + ' telah berlangganan ' + this.paket);
    };
};

let tambahLangganan = new Langganan('bwastudio', 'Premium');
tambahLangganan.hitungMember();
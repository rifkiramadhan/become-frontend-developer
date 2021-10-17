// Membuat object untuk mengecek berat dan tinggi badan ideal seseorang

const Person = {
    firstName: "Kimi",
    lastName: "Hime",
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;   
    },
    weight: 65,
    height: 172,
    isWeightIdeal: function() {
        const heightMinus100 = this.height - 100
        return heightMinus100 - (heightMinus100 * 10) / 100 < this.weight;
    },
};

console.log(Person.fullName());  
console.log(Person.isWeightIdeal());

const countries = {
    ID: {
        province: ['Bali', 'Jawa Timur', 'Jawa Tengah'],
        city: ['Singaraja', 'Gianyar', 'Negare', 'Badung']
    },
    MY: {},
    TH: {
        province: [],
    },
};

console.log(countries?.TH?.province ?? "Not Found");
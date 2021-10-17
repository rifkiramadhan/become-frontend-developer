// Membuat object untuk mengecek berat dan tinggi badan ideal seseorang

const Person = {
    firstName: "Kimi",
    lastName: "Hime",
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;   
    },

    weight: 65,
    height: 172,
    WeightIdeal: function() {
        const heightMinus100 = this.height - 100
        return heightMinus100 - (heightMinus100 * 10) / 100;
    },

    needDiet: function() {
        const WeightIdeal = this.WeightIdeal()
        if(WeightIdeal - 5 > this.weight)
            return "You need more protein, need more " + (WeightIdeal - this.weight) + " Kg";
        else if(WeightIdeal + 5 < this.weight)
            return "You need a mayo diet, need reduce weight: " + (this.weight - WeightIdeal) + " Kg";
        return "You are in a good shape";
    }
};

console.log(Person.fullName());  
console.log(Person.WeightIdeal());
console.log(Person.needDiet());

// const countries = {
//     ID: {
//         province: ['Bali', 'Jawa Timur', 'Jawa Tengah'],
//         city: ['Singaraja', 'Gianyar', 'Negare', 'Badung']
//     },
//     MY: {},
//     TH: {
//         province: [],
//     },
// };

// console.log(countries?.TH?.province ?? "Not Found");
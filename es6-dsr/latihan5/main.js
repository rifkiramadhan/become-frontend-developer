// Mengambil element
const card_items = document.getElementById('user');

// ES5
// function addProduct(name, category) {
//     return {
//         name: name,
//         category: category
//     }
// }

// var getProduct = addProduct("iPhone 11", "Gadget");
// console.log(getProduct);

// ES6
function addProduct(name, category) {
    return {
        name,
        category
    }
}

var getProduct = addProduct("iPhone 11", "Gadget");
console.log(getProduct);
card_items.innerHTML = `Product: ${getProduct.name}, Category: ${getProduct.category}`;
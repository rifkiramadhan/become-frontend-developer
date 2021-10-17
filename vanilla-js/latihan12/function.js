// function foo(x = 0) {
//     return x + 1;
// };
// console.log(foo(1));

// Function Expression
// (function(x = 0) {
//     console.log(x + 1);
// })();

// Arrow Function
// const foo = (x = 0) => {
//     return x +  1;
// };
// console.log(foo(1));

// Function Bersarang
// function addSquare(a, b) {
//     function square(x) {
//         return x * x;
//     };

//     return square(a) + square(b);
// };
// console.log(addSquare(1, 2));

// Function Rekursif
function loop(x) {
    if(x >= 10)
        return;
    console.log(x);
    loop(x + 1);
};
loop(1);
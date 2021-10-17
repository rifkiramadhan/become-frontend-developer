// Mengambil element
const user_palace = document.getElementById('user');

// ES5
// const user_logged = "Tony";
// user_palace.innerHTML = "Hi, " + user_logged + " " + "Apa kabar ?";

// ES6
const user_logged = "Tony";
user_palace.innerHTML = `Hi ${user_logged}. Apa kabar ?`;
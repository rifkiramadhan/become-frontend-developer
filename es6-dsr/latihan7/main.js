// Mengambil element
const skills_holder = document.getElementById('skills');

// ES5

// ES6
const yourSkills = ['UX Design', 'Web Development', 'Video Editor'];

// Filter Data
const myPrimarySkill = yourSkills.filter(skill => {
    return skill === "Video Editor";
});

skills_holder.innerHTML = myPrimarySkill;

// console.log(yourSkills[0]);
// skills_holder.innerHTML = yourSkills[0];

// // Menambahkan item kepada array
// yourSkills.push('DevOps');

// yourSkills.forEach((skill) => {
//     console.log(`${skill}`);
// });

// // Lebih cepat daripada foreach tapi fungsinya sebetulnya sama saja
// const printSkills = yourSkills.map(skill => {
//     return skill;
// });

// skills_holder.innerHTML = printSkills;
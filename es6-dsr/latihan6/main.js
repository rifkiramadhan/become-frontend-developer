// Mengambil element
const skills_holder = document.getElementById('skills');

// ES5

// ES6
const yourSkills = ['UX Design', 'Web Development', 'Video Editor'];
// console.log(yourSkills[0]);
// skills_holder.innerHTML = yourSkills[0];

// Menambahkan item kepada array
yourSkills.push('DevOps');

let parent = '<ul>';

yourSkills.forEach((skill) => {
    parent += '<li>' + skill + '</li>';
    console.log(`${skill}`);
});

parent += '</ul>';
skills_holder.innerHTML = parent;
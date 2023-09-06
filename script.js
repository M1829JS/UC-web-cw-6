let score = 0;
let scoreHTML = document.getElementById('score');
function increase() {
    score = score + 1;
    scoreHTML.innerHTML = score;
};
let name = prompt('What is your username?');
document.getElementById('title').innerText = `Welcome ${name} to COOOKIEE CLICKEEERRR!!!!`;

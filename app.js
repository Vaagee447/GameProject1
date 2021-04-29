// Тоглогчийн ээлжийг хадгалах, 1r toglogvh 0 , 2r toglogch 1 gj temdeglene
var activePlayer = 0;
var deactivePlayer= 1;


//toglogchiin eekjiin oniig hadgalah
var score= [0, 0];


//idewtei toglogchiin onoog hadgalah
var roundScore= 0;


//shoo ali talaaram buusniig hadagalah function 1-6 ali  buusniig hadgalah 
var dice = Math.floor(Math.random() * 6)+1;

window.document.querySelector(`#score-0`).textContent=0;

window.document.querySelector(`#score-1`).textContent=0;

window.document.querySelector(`#current-0`).textContent=0;
window.document.querySelector(`#current-1`).textContent=0;


document.querySelector(`.dice`).style.display = "none";


console.log(`Шоо ` +dice);

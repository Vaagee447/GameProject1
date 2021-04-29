// Тоглогчийн ээлжийг хадгалах, 1r toglogvh 0 , 2r toglogch 1 gj temdeglene
var activePlayer = 1;


//toglogchiin eekjiin oniig hadgalah
var score= [0, 0];


//idewtei toglogchiin onoog hadgalah
var roundScore= 0;


//shoo ali talaaram buusniig hadagalah function 1-6 ali  buusniig hadgalah 
var diceNumber = Math.floor(Math.random() * 6)+1;


window.document.getElementById("score-0").textContent=`0`;
window.document.getElementById("score-1").textContent=`0`;
window.document.getElementById("current-0").textContent=`0`;
window.document.getElementById("current-1").textContent=`0`;

var diceDom = document.querySelector(`.dice`);
diceDom.style.display = "none";
document.querySelector(".btn-roll").addEventListener("click", function (){
    var diceNumber = Math.floor(Math.random() * 6)+1;
    diceDom.style.display = "block";
    diceDom.src = `dice-` + diceNumber + `.png`;
});



console.log(`Шоо ` +dice);

// Тоглогчийн ээлжийг хадгалах, 1r toglogvh 0 , 2r toglogch 1 gj temdeglene
var activePlayer = 0;


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
    //1-6 dotor sanamsargui too gargaj awna
    var diceNumber = Math.floor(Math.random() * 6)+1;
    // shoonii zurgiig gargaj irne
    diceDom.style.display = "block";
    //buusan shoonii zurgiig gargaj iorne 
    diceDom.src = `dice-` + diceNumber + `.png`;
    // buuasn too ni 1eees ylgaatai bol  idewhtei toglogchiin toog nemegduulne toglogchiin eeljiin onoog ugnu
    if(diceNumber !==1 ){
        // 1ees ylgaatai baiwal 
        roundScore = roundScore+ diceNumber;
        document.getElementById(`current-`+ activePlayer).textContent = roundScore;
    } 
    else{
        switchToNextPlayer();
    }

});
document.querySelector(".btn-hold").addEventListener("click", function(){
    
    
    score[activePlayer] = score[activePlayer] + roundScore;
    document.getElementById("score-"+ activePlayer).textContent = score[activePlayer]; 
    if(score[activePlayer] >= 20){
        //Ялагч гэсэн тэкст
        document.getElementById("name-" + activePlayer).textContent = "WINNER!!!"
        document.querySelector(`.player-` + activePlayer +`-panel`).classList.add("winner");
        document.querySelector(`.player-` + activePlayer +`-panel`).classList.remove("active");
    }else{
        switchToNextPlayer();   
    }
    
    
});

function switchToNextPlayer(){ 
    //ээлжийн оноог 0 болгоно
    //1buusan bol toglogchiin eeljiig solino 
        //herew idewhitei toglogch ni 1 baiwl idewhitei toglogchiig 0 bolgo
        roundScore= 0;
        document.getElementById(`current-`+ activePlayer).textContent = 0;  
        activePlayer===0 ? (activePlayer=1): (activePlayer=0);
        //Ulaan tseg haij oloh 
        document.querySelector(`.player-0-panel`).classList.toggle(`active`);
        document.querySelector(`.player-1-panel`).classList.toggle(`active`);
        //Шоог түр алга болгоно 
        diceDom.style.display= "none";
    
}

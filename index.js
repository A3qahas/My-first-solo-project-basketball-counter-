let shEl=document.getElementById("counterHome");
let sgEl=document.getElementById("counterGuest");

let scoreHome=0;
let scoreGuest=0;


function scoreHInc1(){
    scoreHome++;
    shEl.innerText=scoreHome
}

function scoreHInc2(){
    scoreHome+=2;
    shEl.innerText=scoreHome
}

function scoreHInc3(){
    scoreHome+=3;
    shEl.innerText=scoreHome
}

function scoreGInc1(){
    scoreGuest++;
    sgEl.innerText=scoreGuest
}

function scoreGInc2(){
    scoreGuest+=2;
    sgEl.innerText=scoreGuest
}

function scoreGInc3(){
    scoreGuest+=3;
    sgEl.innerText=scoreGuest
}

function newGame(){
    scoreGuest=0;
    sgEl.innerText=scoreGuest
    scoreHome=0;
    shEl.innerText=scoreHome
}
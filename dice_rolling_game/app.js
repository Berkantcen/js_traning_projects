// GAME LOGIC 

const firstDice = document.getElementById("first")
const secondDice = document.getElementById("second")
const heading = document.querySelector("h1")
const btn = document.getElementById("btn")


let firstPlayerName = "Player ONE"
let secondPlayerName = "Player TWO"

const firstPlayer = document.querySelector(".first-player")
const secondPlayer = document.querySelector(".second-player")
const startingNameOne = document.getElementById("starting-name-one")
const startingNameTwo = document.getElementById("starting-name-two")
const nameBtnOne = document.querySelector(".player-name-btn")
const nameBtnTwo = document.querySelector(".second-player button")

function nameSaved(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your name has been set',
        showConfirmButton: false,
        timer: 1500
      })
}

function nameEmpty(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You didnt write any name',
        
      })
}


nameBtnOne.addEventListener("click",()=> {
    firstPlayerName = document.getElementById("first-player-name").value
    if(firstPlayerName ===""){
        nameEmpty()
    }
    else{
        startingNameOne.innerText = firstPlayerName
        firstPlayer.remove()
        nameSaved()
    }

})
nameBtnTwo.addEventListener("click",()=> {
    secondPlayerName = document.getElementById("second-player-name").value
if(secondPlayerName === ""){
    nameEmpty()
}
    else{
        startingNameTwo.innerText = secondPlayerName
        secondPlayer.remove()
        nameSaved()
    }

})


btn.addEventListener("click", rollDices);


function rollDices(){
    let firstRoll = Math.floor(Math.random() * 6 + 1);
    let secondRoll = Math.floor(Math.random() * 6 +1 );
    
    while(firstRoll === secondRoll){
        secondRoll = Math.floor(Math.random() * 6 +1 );
    }

    if(firstRoll > secondRoll){
        heading.innerText =  `${firstPlayerName} crushed ${secondPlayerName}`
    }else{
        heading.innerText = `${secondPlayerName} showed no mercy to  ${firstPlayerName}`
    }                 
    firstDice.setAttribute("src", `/img/dice${firstRoll}.png`)
    secondDice.setAttribute("src", `/img/dice${secondRoll}.png`)

}



// SKOR,SOUND EFFECT,ROTATION ANIMATION,OYUNCU SAYISI SEÇME,LABEL TIKLAYIP ISIM ,WİNNER
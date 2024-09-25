/* 
(function Gameboard(){

   gameboard = [];
   return gameboard;

})()
*/
/* 
function playMove(){

}

playerOne.playMove(eventListener)
 */




/* 
function Game(){
  
} */



function createPlayer(player,token){
  return {
    player,
    token,
  }
}


function storeInput(){
  const inputPlayerOne = document.querySelector("#player-one");
  const inputPlayerTwo = document.querySelector("#player-two");

  const player1 = inputPlayerOne.value;
  const player2 = inputPlayerTwo.value;

  playerInfo.close();

  const playerOne = createPlayer(player1, 'X');
  const playerTwo = createPlayer(player2, 'O');

  Display(player1, player2);

  return playerOne, playerTwo;
}



function Display(player1, player2){

  const playerOne = document.querySelector("#player1name");
  playerOne.innerHTML = player1;


  const playerTwo = document.querySelector("#player2name");
  playerTwo.innerHTML = player2;

  
  const display = document.querySelector(".display");
  const turn = document.createElement("div");
  turn.innerHTML = "Tamara's turn!";
  display.appendChild(turn);
 
  /* 
  const display = document.querySelector(".display");
  const winner = display.createElement('div');
  if (winner === playerOne){
  winner.innerHTML = `${playerOne} wins!`
  } else if (winner === playerTwo) {
  winner.innerHTML = `${playerTwo} wins!`
  } else { winner.innerHTML = "It's a tie!";
    } */
/* 
  const display = document.querySelector(".display");
  const rematchBtn = display.createElement("button");
  rematchBtn.addEventListener("click", Game) */
 }


 
const newGameBtn = document.querySelector("#new-game");
const playerInfo = document.querySelector("#pop-up");

newGameBtn.addEventListener("click", () => {
  playerInfo.showModal();
});

const cancelBtn = playerInfo.querySelector('#cancelBtn')
cancelBtn.addEventListener('click', Close);

function Close(){
  playerInfo.close();
}



const confirmBtn = playerInfo.querySelector('#confirmBtn')

confirmBtn.addEventListener('click', () => {
  storeInput();

  const inputPlayerOne = document.getElementById('player-one');
  const inputPlayerTwo = document.getElementById('player-two');

  inputPlayerOne.value = '';
  inputPlayerTwo.value = '';

});


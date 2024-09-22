
(function Gameboard(){

   gameboard = [];
   return gameboard;

})()



function Player(playerOne, tokenOne, playerTwo, tokenTwo){


  return PLayer Object {player, token}

  display();
}

function storeInput(){
  const input1 = document.getElementById("player-one");
  const token1 = document.querySelector('input[name="read"]:checked').value;

  const input2 = document.getElementById("player-two");
  const token2 = document.querySelector('input[name="read"]:checked').value;

  const playerOne = input1.value;
  const playerTwo = input2.value;
  const tokenOne = token1 === "Token" ? "X" : "O";
  const tokenTwo = token2 === "Token" ? "X" : "O";

  //dialog.close();

  player(playerOne, tokenOne, playerTwo, tokenTwo);

}



function Game(){

}



(function Display(){

  div for player1 name

  div for player2 name

  div for    ´${player} wins!´    OR   "It's a tie!"

  button for REMATCH that calls Game()

  return {};
 })();



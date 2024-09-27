function Gameboard() {
  const fields = [
    document.querySelector(".field1"),
    document.querySelector(".field2"),
    document.querySelector(".field3"),
    document.querySelector(".field4"),
    document.querySelector(".field5"),
    document.querySelector(".field6"),
    document.querySelector(".field7"),
    document.querySelector(".field8"),
    document.querySelector(".field9"),
  ];

  let boardState = Array(9).fill(null);

  return { fields, boardState };
}

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let gameController;

function GameController(playerOne, playerTwo) {

  const board = Gameboard(); 
  const players = [playerOne, playerTwo];
  let activePlayer = players[0];
  let gameActive = true; 


  const checkWinner = () => {
    const boardState = board.boardState;
  
    // Check for winning combinations
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
        return players.find(player => player.token === boardState[a]); // Return the winning player
      }
    }
  
    // Check for a tie
    if (boardState.every(cell => cell)) {
      return "tie"; 
    }
  
    // No winner yet
    return false;
  };

  
  const handleClick = (e, index) => {
    if (!board.boardState[index] && gameActive) {
      board.boardState[index] = activePlayer.token;
      board.fields[index].innerHTML = activePlayer.token; 
      const winner = checkWinner();

      if (winner) {
        endGame(winner); 
      } else {
        switchPlayerTurn();
        displayTurn(); 
      }
    }
  };

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const displayTurn = () => {
    const turnDisplay = document.querySelector("#turnDisplay");
    turnDisplay.innerHTML = `${activePlayer.name}'s turn`; 
  };

  const resetGame = () => {
    gameActive = true; 
    const turnDisplay = document.querySelector("#turnDisplay");
    turnDisplay.innerHTML = '';

    const rematchBtn = document.querySelector("#rematchBtn");
    rematchBtn.style.display = 'none';

    board.boardState.fill(null); 
    board.fields.forEach(field => {
      field.innerHTML = ''; 
    });
    console.log("game is reset")

    displayTurn(); 
  };

  const endGame = (winner) => {
    gameActive = false; 
    const turnDisplay = document.querySelector("#turnDisplay");

    if (winner === "tie") {
      turnDisplay.innerHTML = "It's a tie!";
    } else {
      const winnerPlayer = winner.name;
      turnDisplay.innerHTML = `${winnerPlayer} wins!`;
    }

  const rematchBtn = document.querySelector("#rematchBtn");
    rematchBtn.style.display = 'block';
    rematchBtn.onclick = resetGame; 
  };

  board.fields.forEach((field, index) => {
    field.addEventListener('click', (e) => {
      handleClick(e, index);
    });
  });

  displayTurn(); 

  return {
    resetGame
  };
}



function Display(player1, player2) {
  const playerOne = document.querySelector("#player1name");
  playerOne.innerHTML = player1.name ? player1.name : 'Player 1';

  const playerTwo = document.querySelector("#player2name");
  playerTwo.innerHTML = player2.name ? player2.name : 'Player 2';
}

function createPlayer(name, token) {
  return { name, token };
}

function storeInput() {
  const inputPlayerOne = document.querySelector("#player-one").value;
  const inputPlayerTwo = document.querySelector("#player-two").value;

  const playerOne = createPlayer(inputPlayerOne, 'X');
  const playerTwo = createPlayer(inputPlayerTwo, 'O');

  Display(playerOne, playerTwo);
  playerInfo.close();

  return [playerOne, playerTwo];
}

const newGameBtn = document.querySelector("#new-game");
const playerInfo = document.querySelector("#pop-up");

newGameBtn.addEventListener("click", () => {
  if (gameController) {
    gameController.resetGame(); 
  }
  playerInfo.showModal();
});



const confirmBtn = document.querySelector('#confirmBtn');

confirmBtn.addEventListener('click', () => {
  const [playerOne, playerTwo] = storeInput();
  gameController = GameController(playerOne, playerTwo); 

  const inputPlayerOne = document.querySelector('#player-one');
  const inputPlayerTwo = document.querySelector('#player-two');

  inputPlayerOne.value = '';
  inputPlayerTwo.value = '';
});  



const cancelBtn = playerInfo.querySelector('#cancelBtn');
cancelBtn.addEventListener('click', () => {
  playerInfo.close();
});



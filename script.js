// JavaScript code for the Tic Tac Toe game

// Wait for the DOM content to load

document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const cells = Array.from(document.getElementsByClassName('cell'));
    let currentPlayer = 'X';
    let gameOver = false;
  

    // Add click event listener to each cell
    cells.forEach(cell => {
      cell.addEventListener('click', handleCellClick);
    });
  

    // Function to handle cell click
    function handleCellClick(e) {
      const cell = e.target;
  
      if (gameOver || cell.textContent !== '') return;
  
    // Set the current player's symbol in the clicked cell
      cell.textContent = currentPlayer;

      // Check for a win
      if (checkWin()) {
        gameOver = true;
        highlightWinningCells();
        announceWinner(currentPlayer);
        return;
      }
  
      // Check for a draw
      if (checkDraw()) {
        gameOver = true;
        announceDraw();
        return;
      }
  
      // Switch the current player
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  
    // Function to check for a win
    function checkWin() {
      const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
      ];
  
      // Check each winning combination
      for (const combination of winningCombinations) {
        const [a, b, c] = combination;

        // If all three cells in a combination have the current player's symbol, it's a win
        if (
          cells[a].textContent === currentPlayer &&
          cells[b].textContent === currentPlayer &&
          cells[c].textContent === currentPlayer
        ) {
          return true;
        }
      }
  
      return false;
    }
  
    // Function to highlight the winning cells
    function highlightWinningCells() {
      const winningCells = getWinningCells();
  
      for (const cellIndex of winningCells) {
        cells[cellIndex].classList.add('win');
      }
    }
  
    function getWinningCells() {
      const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
      ];
  
      for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (
          cells[a].textContent === currentPlayer &&
          cells[b].textContent === currentPlayer &&
          cells[c].textContent === currentPlayer
        ) {
          return combination;
        }
      }
  
      return [];
    }
  
    function announceWinner(player) {
      setTimeout(() => {
        alert(`Player ${player} wins!`);
      }, 100);
    }
  
    function checkDraw() {
      return cells.every(cell => cell.textContent !== '');
    }
  
    // Function to announce a draw
    function announceDraw() {
      setTimeout(() => {
        alert("It's a draw!");
      }, 100);
    }
  });
  
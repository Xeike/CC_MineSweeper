const generatePlayerBoard = (numberOfRows,numberOfColumns) => {
  const board = [];

  for (let rows = 0; rows < numberOfRows; rows++) {
    row = [];
    for (let columns = 0; columns < numberOfColumns; columns++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

const generateBombBoard = (numberOfRows,numberOfColumns,numberOfBombs) => {
  const board = [];

  for (let rows = 0; rows < numberOfRows; rows++) {
    const row = [];
    for (let columns = 0; columns < numberOfColumns; columns++) {
      row.push(null);
    }
    board.push(row);
  }

  let numberOfBombsPlaced = 0;

  while (numberOfBombsPlaced < numberOfBombs) {
    // This code has the potential to place bombs on top of bombs, this will be fixed with control flow.
    let randomRowIndex = Math.floor(Math.random() * Math.floor(numberOfRows));
    let randomColumnIndex = Math.floor(Math.random() * Math.floor(numberOfColumns));
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced += 1;
  }
  return board;
};

const printBoard = (board) => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);

console.log('Player Board');
printBoard(playerBoard);
console.log('Bomb Board');
printBoard(bombBoard);

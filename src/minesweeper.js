const generatePlayerBoard (numberOfRows,numberOfColumns) => {
  board = [];
  for (let rows = numberOfRows; rows >= 0; rows--) {
    row = [];
    for (let columns = numberOfColumns; columns >= 0; columns--) {
      row.push(' ');
    };
    board.push(row);
  };
  return board;
};

console.log(generatePlayerBoard(4,4));

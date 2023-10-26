/**
 * this is the function which helps to print the grid pattern
 * @param {Array} some2dGrid A 2-d array which represents the magic square
 */
function printTheGrid(some2dGrid) {

	console.log("-------------")

	for (let i = 0; i < some2dGrid.length; i++) {
		let row = some2dGrid[i]
		let rowString = "" 
		for (let j = 0; j < row.length; j++) {
			rowString += ("| " + row[j]	+ " ")
		}
		console.log(rowString + "|")
		if (i == (some2dGrid.length-1)) {
			console.log("-------------")
		} else {
			console.log("----+---+----")
		}
	}
}
/** This is a helper function stolen from 
 * "https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-136.php"
 * to generate permutations
 * @param {String} str 
 * @returns an array containing all permutations of the string
 */
function stringPermutations(str) {
  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
  return str
    .split('')
    .reduce(
      (acc, letter, i) =>
        acc.concat(stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)),
      []
    );
};
/**
 * this is the function to generate the different matrices and checks that 
 * the matrix is magic square or not
 * @returns Array
 */
function generateMagicSquare() {
  const permutations = stringPermutations("123456789");
  for (const current of permutations) {
    const grid = [];
    for (let i = 0; i < 3; i++) {
      const row = [];
      for (let j = 0; j < 3; j++) {
        row.push(parseInt(current[i * 3 + j]));
      }
      grid.push(row);
    }

    // this function will check if the grid is a magic square.
    if (isMagicSquare(grid)) {
      return grid;
    }
  }
  //if magic square is not found return this.
  return null;
}
/**
 * 
 * @param {Array} grid arr
 * @returns it checks whether the grid is magic square if yes returns true
 * if no returns false.
 */
function isMagicSquare(grid) {
  const magicSum = 15; // The sum of all rows, columns, and diagonals

  // Check the rows.
  for (let i = 0; i < 3; i++) {
    let rowSum = 0;
    for (let j = 0; j < 3; j++) {
      rowSum += grid[i][j];
    }
    if (rowSum !== magicSum) {
      return false;
    }
  }

  // Check the columns.
  for (let j = 0; j < 3; j++) {
    let columnSum = 0;
    for (let i = 0; i < 3; i++) {
      columnSum += grid[i][j];
    }
    if (columnSum !== magicSum) {
      return false;
    }
  }

  // Check the diagonals.
  let diagonalSum1 = grid[0][0] + grid[1][1] + grid[2][2];
  let diagonalSum2 = grid[0][2] + grid[1][1] + grid[2][0];

  if (diagonalSum1 !== magicSum || diagonalSum2 !== magicSum) {
    //if the grid is not a magic square
    return false;
  }

  //if the grid is a magic square
  return true;
}
/**
 * this allocates the grid which returned by generateMagicSquare() 
 * to the magicsquare
 */
const magicSquare = generateMagicSquare();
if (magicSquare) {
    console.log("3*3 Magic Square is :")
    printTheGrid(magicSquare);
} 
else {
  console.log("No magic square found.");
}

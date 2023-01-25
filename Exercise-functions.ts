//function Multiplication table

function printMultiplication(baseNumber: number, limitNumber: number = 10) {
  for (let i = 1; i <= limitNumber; i++) {
    console.log(baseNumber, '*', i, '=', baseNumber * i);
  }
}
printMultiplication(5, 50);

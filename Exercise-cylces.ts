//challenge to write in console the table of 10

// let base = 10;
// let limit = 50;

// for (let i = 1; i <= 5; i++) {
//   base * 1;
//   base = base + 10;
// }

// console.log(10, 'x 1', base - 50);
// console.log(10, 'x 2', base - 40);
// console.log(10, 'x 3', base - 30);
// console.log(10, 'x 4', base - 20);
// console.log(10, 'x 5', limit);

//Optimatized solution

for (let i = 1; i <= limit; i++) {
  console.log(base, '+', i, '=', base * i);
}

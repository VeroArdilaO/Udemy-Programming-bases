//While Cycle

// let gasTank = 50;

// while (gasTank >= 0) {
//   console.log('you have gas', gasTank);

//   gasTank--;
// }

// console.log('there is not more gasTank');

//Do while Cycle, it always execute at least once

// let gasTank = 50;
// do{
//   console.log('you have gas', gasTank);

//   gasTank--;
// } while(gasTank >= 0);

// console.log("there is not mote gasTank");

//For cycle

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log('let i:', i);
  if (i === 5) {
    break;
  }
}

console.log('Fin de programa');

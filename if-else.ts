/* if-else Realizar un programa que muestre la nota del alumno como 
 A >=90, 
 B >= 80 
 C >= 70 
 D >= 60 
 F < 60.
*/

let grade: number = 78;

if (grade >= 90) {
  console.log('Your final grade is A score ' + grade);
} else if (grade >= 80) {
  console.log('Your final grade is B score ' + grade);
} else if (grade >= 70) {
  console.log('Your final grade is C score ' + grade);
} else if (grade >= 60) {
  console.log('Your final grade is D score ' + grade);
} else {
  console.log('Your final grade is F score ' + grade);
}

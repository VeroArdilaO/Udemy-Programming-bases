//Exercise Methods in Class
class Car {
  brand: string;
  doors: number;
  fuelTank: number;
  isRunning: boolean;
  type: string;

  createdAt: number;

  constructor() {
    this.brand = 'No brand';
    this.doors = 0;
    this.fuelTank = 0;
    this.isRunning = false;
    this.type = 'no type';
  }
  /*
    gas: number
    gas > 100, this.fullTank = 100
    gas tiene positivo
    si ya esta lleno, no sobre llenar
    si el tanque es 50 y anado 20, el valor del fuelTank seria 70
    si el fuelTank es 90, y anado 50, fuelTank deberia de ser 100

  */
  //This is my solution
  // fillTank(gas:number){
  //   if (gas === 100){
  //     console.log("el tanque esta en ", this.fuelTank = 100)
  //   }else if(gas < 50){
  //     console.log( "el tanque esta en ", this.fuelTank = gas + 50)
  //   }else if(gas > 100){
  //     console.log("Ya esta lleno, no sobrellenar")
  //   }else if(gas < 90 && gas > 49){
  //     console.log( "el tanque esta en ", this.fuelTank = gas + 90)

  //   }
  //Udemy Solution
  fillTank(gas: number) {
    if (gas <= 0) {
      console.log('El gas tienes que ser positivo');
      return;
    }
    let newFuelTank = this.fuelTank + gas;
    if (newFuelTank >= 100) {
      this.fuelTank = 100;
    } else {
      this.fuelTank = newFuelTank;
    }
  }
  // }
}

let myNissan = new Car();

console.log(myNissan);

myNissan.fillTank(20);
myNissan.fillTank(120);
console.log(myNissan);

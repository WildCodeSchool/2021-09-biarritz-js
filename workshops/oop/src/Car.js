import Vehicle from "./Vehicle.js";

class Car extends Vehicle {
/*Nerea
  constructor (color, name, wheels, doors) {
    super(color, name, wheels);
    this.doors = doors;
  }
  lockDoors() {
    return `and we have ${this.doors} doors`;
  }
  logTypeAndProps() {
    console.log(`Car specs : ${this.getPropsString()} ${this.lockDoors()}`);
*/
  constructor(name, color, numberOfWheels= 4, brand, decapotable){
    super(name, color, numberOfWheels, brand);
    this.decapotable = decapotable;
  }
  lockDoors(){
    console.log('doors are locked');
  }
  logTypeAndProps(){
    console.log('Car specs : ' + this.getPropsString() + this.decapotable);
  }
}

export default Car;

import Vehicle from "./Vehicle.js";

class Car extends Vehicle {
  constructor (color, name, wheels, doors) {
    super(color, name, wheels);
    this.doors = doors;
  }
  lockDoors() {
    return `and we have ${this.doors} doors`;
  }
  logTypeAndProps() {
    console.log(`Car specs : ${this.getPropsString()} ${this.lockDoors()}`);
  }
}

export default Car;

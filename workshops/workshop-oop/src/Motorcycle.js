import Vehicle from "./Vehicle.js";

class Motorcycle extends Vehicle {
  constructor(color, name, wheels) {
    super(color, name, wheels);
  }
  logTypeAndProps() {
    console.log(`Motorcycle specs : ${this.getPropsString()}`);
  }

}

export default Motorcycle;

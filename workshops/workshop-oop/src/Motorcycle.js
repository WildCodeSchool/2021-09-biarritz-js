import Vehicle from "./Vehicle.js";

class Motorcycle extends Vehicle {
  // TODO
  constructor(name, color, numberOfWheels, brand){
    super(name, color, numberOfWheels, brand);
  }
  logTypeAndProps(){
    console.log('Moto specs : ' + this.getPropsString());
  }
  // TODO
}

export default Motorcycle;

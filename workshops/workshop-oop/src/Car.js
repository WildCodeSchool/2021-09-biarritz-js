import Vehicle from "./Vehicle.js";

class Car extends Vehicle {
  // TODO
  constructor(name, color, numberOfWheels, brand){
    super(name, color, numberOfWheels, brand);
  }
  lockDoors(){
    console.log('doors are locked');
  }
  logTypeAndProps(){
    console.log('Car specs : ' + this.getPropsString());
  }
}

export default Car;

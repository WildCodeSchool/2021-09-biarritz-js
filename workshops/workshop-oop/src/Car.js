import Vehicle from "./Vehicle.js";

class Car extends Vehicle {
  // TODO
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

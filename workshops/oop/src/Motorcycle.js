import Vehicle from "./Vehicle.js";
/* Nerea

class Motorcycle extends Vehicle {
  constructor(color, name, wheels) {
    super(color, name, wheels);
  }
  logTypeAndProps() {
    console.log(`Motorcycle specs : ${this.getPropsString()}`);
  }

*/

class Motorcycle extends Vehicle {

  constructor(name, color, numberOfWheels = 2, brand = 'Toyota'){
    super(name, color, numberOfWheels, brand);
  }
  logTypeAndProps(){
    console.log('Moto specs : ' + this.getPropsString());
  }

}

export default Motorcycle;

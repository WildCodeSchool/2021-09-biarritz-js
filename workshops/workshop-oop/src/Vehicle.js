class Vehicle {
/* Nerea
  constructor (name, color, wheels) {
    this.name = name;
    this.color = color;
    this.wheels = wheels;
  }
  getPropsString() {
    return `name has a value of ${this.name}, color has a value of ${this.color}, wheels has a value of ${this.wheels}`;
  }
  logTypeAndProps() {
    console.log(`Vehicle specs : ${this.getPropsString()}`);
*/

  constructor(name, color, numberOfWheels, brand){
    this.name = name;
    this.color = color;
    this.numberOfWheels = numberOfWheels;
    this.brand = brand;
  }
  getPropsString(){
    return `name is ${this.name}, color is ${this.color}, wheels : ${this.numberOfWheels}`;
  }
  logTypeAndProps(){
    console.log('Vehicle specs : ' + this.getPropsString());
  }
}

export default Vehicle;

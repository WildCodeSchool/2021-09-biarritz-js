class Vehicle {
  // TODO
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

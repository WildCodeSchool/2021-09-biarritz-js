import Vehicle from "./Vehicle.js";
import Car from "./Car.js";
import Motorcycle from "./Motorcycle.js";

const myVehicle = new Vehicle("Monocycle", "red", 1);
/*Nerea
myVehicle.logTypeAndProps();

const myCar = new Car("DeLorean DMC-12", "silver", 2, 4);
myCar.logTypeAndProps();

const myMotorcyle = new Motorcycle("Kawasa­ki ZZR 250", "yellow", 1);
*/
console.log(myVehicle);
myVehicle.logTypeAndProps();

const myCar = new Car("DeLorean DMC-12", "silver",4,'Peugeot', true);
myCar.logTypeAndProps();

const myMotorcyle = new Motorcycle("Kawasa­ki ZZR 250", "yellow");

myMotorcyle.logTypeAndProps();

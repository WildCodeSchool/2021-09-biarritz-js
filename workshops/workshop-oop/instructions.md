Write a Vehicle class with

    attributes that represent the color, the name and the number of wheels of the vehicle.
    a method getPropsString that returns a string with all vehicule properties (ex : "key1 has a value of val1, key2 has a value of val2, ...")
    a method logTypeAndProps that logs "Vehicle specs : " followed by the the output of getPropsString.

Then, write the Motorcyle and Car classes that inherit from Vehicle.

In the Car class, write a mehtod that only makes sense for cars and not motorcycles (ex: 'lockDoors').

In Vehicle's derived classes, override the logTypeAndProps method to specify whether the object is an instance of Motorcycle or Car (ex: print "Car specs : ..." or "Motorcycle specs : ..." instead of "Vehicle specs : ...").

class Car is
  Can have GPS, trip computer and various numbers of seats.
  Can be a city car, a sports car, or a cabriolet.

class CarBuilder is
  method getResult() is
      output:  a Car with the right options
    Construct and return the car.

  method setSeats(number) is
      input:  the number of seats the car may have.
    Tell the builder the number of seats.

  method setCityCar() is
    Make the builder remember that the car is a city car.

  method setCabriolet() is
    Make the builder remember that the car is a cabriolet.

  method setSportsCar() is
    Make the builder remember that the car is a sports car.

  method setTripComputer() is
    Make the builder remember that the car has a trip computer.

  method unsetTripComputer() is
    Make the builder remember that the car does not have a trip computer.

  method setGPS() is
    Make the builder remember that the car has a global positioning system.

  method unsetGPS() is
    Make the builder remember that the car does not have a global positioning system.

Construct a CarBuilder called carBuilder
carBuilder.setSeats(2)
carBuilder.setSportsCar()
carBuilder.setTripComputer()
carBuilder.unsetGPS()
car := carBuilder.getResult()
Of course one could dispense with Builder and just do this:

car = new Car();
car.seats = 2;
car.type = CarType.SportsCar;
car.setTripComputer();
car.unsetGPS();
car.isValid();
So this indicates that the Builder pattern is more than just a means to limit constructor proliferation. It removes what could be a complex building process from being the responsibility of the user of the object that is built. It also allows for inserting new implementations of how an object is built without disturbing the client code.
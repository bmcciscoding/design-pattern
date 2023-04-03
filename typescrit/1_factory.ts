enum CarBrand {
  BWM,
  Benz,
  BYD,
}

class Car {
  run() {}
}

class CarFactory {
  constructor() { }
  produce(brand: CarBrand): Car {
    switch (brand) {
      case CarBrand.BWM: return new BMWCar();
      // TODO: more cars
    default: break;
    }
    return new Car();
  }
}

class BMWCar extends Car {
  run(): void {
    console.log('im bwm');
  }
}


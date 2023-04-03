abstract class Factory {
  constructor() {}
  abstract produce(): any;
}

class Rice {}
class RiceFactory extends Factory {
  produce(): Rice {
    return new Rice();
  }
}

class Water {}
class WaterFactory extends Factory {
  produce(): Water {
    return new Water();
  }
}

class FactoryProducer {
  static getFactory(type: string): Factory {
    if (type === "Rice") {
      return new RiceFactory();
    } else {
      return new WaterFactory();
    }
  }
}

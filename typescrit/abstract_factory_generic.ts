abstract class TFactory<T> {
  constructor() {}
  abstract produce(): T;
}

class Cat {}
class CatFactory extends TFactory<Cat> {
  produce(): Cat {
    return new Cat();
  }
}

class Dog {}
class DogFactory extends TFactory<Dog> {
  produce(): Dog {
    return new Dog();
  }
}

// type FactoryType = CatFactory | DogFactory;
type FactoryType = TFactory<Cat> | TFactory<Dog>;
function buildFatory(p: string): FactoryType {
  if (p === "Cat") {
    return new CatFactory();
  } else {
    return new DogFactory();
  }
}

class TFactoryProducer {
  buildFatory(p: string): FactoryType {
    if (p === "Cat") {
      return new CatFactory();
    } else {
      return new DogFactory();
    }
  }
}

// TODO:
type ProduceType = Cat | Dog;
function buildFatory2<T extends ProduceType>(p: string): FactoryType {
  if (p === "Cat") {
    return new CatFactory();
  } else {
    return new DogFactory();
  }
}

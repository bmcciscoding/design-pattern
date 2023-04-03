class Cooker {
  prepred(): Meal {
    let meal = new Meal();
    meal.water = new PureWater(100);
    meal.meat = new Meat(100);
    return new Meal();
  }
}

class Meal {
  water: PureWater;
  meat: Meat;
}

class PureWater {
  volumn: number;
  constructor(v: number) {
    this.volumn = v;
  }
}

class Meat {
  weight: number;
  constructor(w: number) {
    this.weight = w;
  }
}

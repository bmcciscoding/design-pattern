interface Cloneable {
  clone(): this;
}

class Prototype implements Cloneable {
  public property1: string;
  public property2: number;
  public property3: boolean;

  constructor(property1: string, property2: number, property3: boolean) {
    this.property1 = property1;
    this.property2 = property2;
    this.property3 = property3;
  }

  public clone(): this {
    const cloned = Object.create(Prototype.prototype);
    cloned.property1 = this.property1;
    cloned.property2 = this.property2;
    cloned.property3 = this.property3;
    return cloned;
  }
}

const original = new Prototype("foo", 42, true);
const cloned = original.clone();

console.log(cloned.property1); // "foo"
console.log(cloned.property2); // 42
console.log(cloned.property3); // true

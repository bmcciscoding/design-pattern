// Define the interface for the objects that will be decorated
interface Component {
  operation(): string;
}

// Concrete implementation of the Component interface
class ConcreteComponent8 implements Component {
  operation(): string {
    return "ConcreteComponent";
  }
}

// Decorator class that adds additional behavior to the Component
class Decorator8 implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  operation(): string {
    return this.component.operation();
  }
}

// Concrete decorator that adds additional behavior to the Component
class ConcreteDecoratorA8 extends Decorator {
  operation(): string {
    return `ConcreteDecoratorA(${super.operation()})`;
  }
}

// Another concrete decorator that adds additional behavior to the Component
class ConcreteDecoratorB8 extends Decorator {
  operation(): string {
    return `ConcreteDecoratorB(${super.operation()})`;
  }
}

// Usage example
const component: Component = new ConcreteComponent();
const decoratorA: Component = new ConcreteDecoratorA(component);
const decoratorB: Component = new ConcreteDecoratorB(decoratorA);

console.log(decoratorB.operation()); // Output: ConcreteDecoratorB(ConcreteDecoratorA(ConcreteComponent))

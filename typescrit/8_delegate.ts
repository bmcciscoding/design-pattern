// Define the interface for the original class
interface OriginalInterface {
  method1(): void;
  method2(): void;
}

// Implement the original class
class OriginalClass implements OriginalInterface {
  method1() {
    console.log("Original method 1");
  }
  method2() {
    console.log("Original method 2");
  }
}

// Implement the proxy class
class ProxyClass implements OriginalInterface {
  private original: OriginalClass;

  constructor(original: OriginalClass) {
    this.original = original;
  }

  method1() {
    console.log("Proxy method 1");
    this.original.method1();
  }

  method2() {
    console.log("Proxy method 2");
    this.original.method2();
  }
}

// Usage
const original = new OriginalClass();
const proxy = new ProxyClass(original);

proxy.method1(); // Output: "Proxy method 1" followed by "Original method 1"
proxy.method2(); // Output: "Proxy method 2" followed by "Original method 2"

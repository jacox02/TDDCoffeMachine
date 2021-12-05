export class CoffeeMaker {
  coffeeQuantity: number;

  constructor(coffeQty) {
    this.coffeeQuantity = coffeQty;
  }

  public setCoffeeQuantity(coffeeQTY) {
    this.coffeeQuantity = coffeeQTY;
    return this.coffeeQuantity;
  }

  public getCoffeeQuantity() {
    return this.coffeeQuantity;
  }

  public hasCoffee(coffeeQty: number) {
    return this.coffeeQuantity > coffeeQty ? true : false;
  }

  public giveCoffee(coffeeQuantity) {
    if (this.hasCoffee(coffeeQuantity)) {
      this.coffeeQuantity - coffeeQuantity;
      return coffeeQuantity;
    } else {
      return "No enought coffee";
    }
  }
}

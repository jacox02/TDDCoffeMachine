import { CoffeeMachine } from "../src/coffeemachine.controller";
import { Cups } from "../src/cups.controller";

let coffeMachine: CoffeeMachine;
let definedCoffee: number;
beforeEach(() => {
  definedCoffee = 100;
  coffeMachine = new CoffeeMachine(definedCoffee, 10, 10, 10, 10);
});

test("Should return a true if there a defined quantity of coffee!", () => {
  expect(coffeMachine.hasCoffee(1)).toBeTruthy();
});
test("Should return a false if there is no enough quantity of coffee!", () => {
  expect(coffeMachine.hasCoffee(definedCoffee * 2)).toBe(
    "No avaliable coffee!"
  );
});
test("Should substract coffee from the coffee machine!", () => {
  expect(coffeMachine.coffeMaker.giveCoffee(1)).toBeLessThan(definedCoffee);
});

test("Should substract one cup of coffe from the storage!", () => {
  expect(coffeMachine.giveCoffe(10)).toBeLessThan(definedCoffee);
});
test("Should return a small cup of coffee!", () => {
  expect(coffeMachine.getCupType("small")).toBeInstanceOf(Cups);
  expect(coffeMachine.getCupType("small")).toEqual({
    cupContent: undefined,
    cupQuantity: 10,
    cupSize: "3 Oz",
    cupType: "small",
  });
});
test("Should return a medium cup of coffee!", () => {
  expect(coffeMachine.getCupType("medium")).toBeInstanceOf(Cups);
  expect(coffeMachine.getCupType("medium")).toEqual({
    cupContent: undefined,
    cupQuantity: 10,
    cupSize: "5 Oz",
    cupType: "medium",
  });
});

test("Should return a big cup of coffee!", () => {
  expect(coffeMachine.getCupType("big")).toBeInstanceOf(Cups);
  expect(coffeMachine.getCupType("big")).toEqual({
    cupContent: undefined,
    cupQuantity: 10,
    cupSize: "7 Oz",
    cupType: "big",
  });
});

test("Should return a 'No avaliable cups' message!", () => {
  expect(coffeMachine.getCupType("small", 30)).toBe(
    "No enough cups avaliable!"
  );
});

test("Should return a 'No avaliable coffee' message!", () => {
  expect(coffeMachine.hasCoffee(definedCoffee * 6)).toBe(
    "No avaliable coffee!"
  );
});
test("Should return a 'No avaliable suggar' message!", () => {
  expect(coffeMachine.suggarProvider.hasSuggar(30)).toBe(
    "No avaliable suggar!"
  );
});

test("Should return 'Congrats! Your cup is served!' and serve a coffee cup", () => {
  let cupToServe: any = coffeMachine.getCupType("small");
  expect(coffeMachine.getCoffeeCupAndGiveCongrats(cupToServe, 3)).toBe(
    "Congrats! Your cup is served!"
  );
});

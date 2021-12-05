import { CoffeeMachine } from "../src/coffeemachine.controller";
import { CoffeeMaker } from "../src/coffeeMaker.controller";
import { Cups } from "../src/cups.controller";
import { Suggar } from "../src/suggar.controller";

let coffeMachine: CoffeeMachine;
let coffeMaker: CoffeeMaker;
let suggarBowl: Suggar;
let smallCup: Cups;
let midCup: Cups;
let bigCup: Cups;

beforeEach(() => {
  coffeMaker = new CoffeeMaker(10);
  smallCup = new Cups(10, "small");
  midCup = new Cups(10, "medium");
  bigCup = new Cups(10, "big");
  suggarBowl = new Suggar(10);

  coffeMachine = new CoffeeMachine(10, 10, 10, 10, 10);
  coffeMachine.setCoffeMaker(coffeMaker);
  coffeMachine.setSmallCups(smallCup);
  coffeMachine.setMidCups(midCup);
  coffeMachine.setBigCups(bigCup);
  coffeMachine.setSuggarBowl(suggarBowl);
});

test("Should return a small cup!", () => {
  expect(coffeMaker.setCoffeeQuantity(10)).toBeCloseTo(10);
});

test("Should return a medium cup!", () => {
  expect(coffeMaker.setCoffeeQuantity(10)).toBeCloseTo(10);
});
test("Should return a big cup!", () => {
  expect(coffeMaker.setCoffeeQuantity(10)).toBeCloseTo(10);
});

test("Should return the avaliable coffee quantity!", () => {
  expect(coffeMaker.getCoffeeQuantity()).not.toBeNaN();
});

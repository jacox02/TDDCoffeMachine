import { Cups } from "../src/cups.controller";

let cups: Cups;
let definedCups: number;

beforeAll(() => {
  definedCups = 100;
  cups = new Cups(definedCups, "big");
});

test("Should return true if there are cups avaliable!", () => {
  expect(cups.hasVasos(10)).toBeTruthy();
});

test("Should return false if there are no cups avaliable!", () => {
  expect(cups.hasVasos(350)).toBeFalsy();
});

test("Should substract one cup of the cup storage!", () => {
  expect(cups.giveVasos(10)).toBeLessThan(definedCups);
});

test("Should return the cups avaliable quantity!", () => {
  expect(cups.getCupQuantity()).toBeGreaterThan(0);
});

test("Should aumentate the cups quantity and return the total cup quantity!", () => {
  let cupQuantity: number = 10;
  expect(cups.setCupQuantity(cupQuantity)).toBe(cupQuantity);
});

test("Should get the content of the coffee!", () => {
  cups.getContent();
});

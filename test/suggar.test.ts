import { Suggar } from "../src/suggar.controller";

let suggar: Suggar;
let definedSuggar: number;

beforeAll(() => {
  definedSuggar = 100;
  suggar = new Suggar(definedSuggar);
});

test("Should return a true if there a defined quantity of coffee!", () => {
  expect(suggar.hasSuggar(1)).toBeTruthy();
});
test("Should return a false if there is no enough quantity of coffee!", () => {
  expect(suggar.hasSuggar(definedSuggar * 2)).toBe("No avaliable suggar!");
});
test("Should substract one cup of coffe from the storage!", () => {
  expect(suggar.giveSuggar(10)).toBeLessThan(definedSuggar);
});

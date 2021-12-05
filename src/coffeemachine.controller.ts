import { CoffeeMaker } from "./coffeeMaker.controller";
import { Cups } from "./cups.controller";
import { Suggar } from "./suggar.controller";

export class CoffeeMachine {
  smallCups: Cups;
  midCups: Cups;
  bigCups: Cups;
  coffeQuantity: number;
  coffeMaker: CoffeeMaker;
  suggarProvider: Suggar;
  unavaliableCupsMsg: string;

  constructor(
    coffeQuantity: number,
    smallCups: number,
    midCups: number,
    bigCups: number,
    suggarProvider: number
  ) {
    this.unavaliableCupsMsg = "No enough cups avaliable!";
    this.smallCups = new Cups(smallCups, "small");
    this.midCups = new Cups(midCups, "medium");
    this.bigCups = new Cups(bigCups, "big");
    this.suggarProvider = new Suggar(suggarProvider);
    this.coffeMaker = new CoffeeMaker(coffeQuantity);
  }

  public hasCoffee(coffeeQTY: number) {
    return this.coffeQuantity > coffeeQTY
      ? "Avaliable coffee!"
      : "No avaliable coffee!";
  }
  public hasSuggar(suggarQTY: number) {
    return this.suggarProvider.hasSuggar(suggarQTY)
      ? "Avaliable suggarProvider!"
      : "No avaliable suggarProvider!";
  }
  public getCupType(cupType: string, cupQty?: number): Cups | string {
    switch (cupType) {
      case "small":
        if (cupQty > this.smallCups.cupQuantity) {
          return this.unavaliableCupsMsg;
        } else {
          this.smallCups.cupQuantity - cupQty;
          return this.smallCups;
        }

      case "medium":
        if (cupQty > this.midCups.cupQuantity) {
          return this.unavaliableCupsMsg;
        } else {
          this.midCups.cupQuantity - cupQty;
          return this.midCups;
        }

      case "big":
        if (cupQty > this.bigCups.cupQuantity) {
          return this.unavaliableCupsMsg;
        } else {
          this.bigCups.cupQuantity - cupQty;
          return this.bigCups;
        }
    }
  }
  public getCoffeeCup(cup: Cups, suggarQTY: number) {
    switch (cup.cupType) {
      case "small":
        if (this.hasCoffee(3) && this.suggarProvider.hasSuggar(suggarQTY)) {
          this.suggarProvider.hasSuggar(suggarQTY);
          let suggarForCup = this.suggarProvider.giveSuggar(suggarQTY);
          cup.setContent(
            `3 Oz of Coffee and ${suggarForCup} units of suggarProvider`
          );
          return cup;
        } else {
          this.smallCups.cupQuantity - 1;
          return this.smallCups;
        }

      case "medium":
        if (this.hasCoffee(5) && this.suggarProvider.hasSuggar(suggarQTY)) {
          this.suggarProvider.hasSuggar(suggarQTY);
          let suggarForCup = this.suggarProvider.giveSuggar(suggarQTY);
          cup.setContent(
            `5 Oz of Coffee and ${suggarForCup} units of suggarProvider`
          );
          return cup;
        } else {
          this.midCups.cupQuantity - 1;
          return this.midCups;
        }

      case "big":
        if (this.hasCoffee(7) && this.suggarProvider.hasSuggar(suggarQTY)) {
          this.suggarProvider.hasSuggar(suggarQTY);
          let suggarForCup = this.suggarProvider.giveSuggar(suggarQTY);
          cup.setContent(
            `7 Oz of Coffee and ${suggarForCup} units of suggarProvider`
          );
          return cup;
        } else {
          this.midCups.cupQuantity - 1;
          return this.midCups;
        }
    }
  }
  public giveCoffe(coffeeQTY: number) {
    if (this.hasCoffee(coffeeQTY)) {
      this.coffeQuantity = this.coffeQuantity - coffeeQTY;
      return coffeeQTY;
    }
  }
  public setCoffeMaker(coffeMkr: CoffeeMaker) {
    this.coffeMaker = coffeMkr;
  }
  public setSmallCups(smCups: Cups) {
    this.smallCups = smCups;
  }
  public setMidCups(mdCups: Cups) {
    this.midCups = mdCups;
  }
  public setBigCups(bgCups: Cups) {
    this.bigCups = bgCups;
  }
  public setSuggarBowl(sgrBowl: Suggar) {
    this.suggarProvider = sgrBowl;
  }
  public getCoffeeCupAndGiveCongrats(cup: Cups, suggarQTY?: number) {
    this.getCoffeeCup(cup, suggarQTY);
    return "Congrats! Your cup is served!";
  }
}

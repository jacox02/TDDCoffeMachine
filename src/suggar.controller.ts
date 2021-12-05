export class Suggar {
  public suggarQuantity: number;

  constructor(suggarQty: number) {
    this.suggarQuantity = suggarQty;
  }
  public hasSuggar(suggarQTY: number) {
    return this.suggarQuantity > suggarQTY
      ? "Avaliable suggar!"
      : "No avaliable suggar!";
  }

  public giveSuggar(suggarQTY: number) {
    if (this.hasSuggar(suggarQTY)) {
      this.suggarQuantity = this.suggarQuantity - suggarQTY;
      return this.suggarQuantity;
    }
  }
}

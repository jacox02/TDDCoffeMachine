export class Cups {
  public cupQuantity: number;
  public cupContent: string;
  public cupType: string;
  public cupSize: string;

  constructor(cupCuantity: number, cupType: string, cupContent?) {
    this.cupContent = cupContent;
    this.cupQuantity = cupCuantity;
    this.cupType = cupType;
    switch (cupType) {
      case "small":
        this.cupSize = "3 Oz";
        break;
      case "medium":
        this.cupSize = "5 Oz";
        break;
      case "big":
        this.cupSize = "7 Oz";
        break;
      default:
        this.cupSize = "3 Oz";
        break;
    }
  }
  public getCupQuantity(): number {
    return this.cupQuantity;
  }
  public setCupQuantity(quantity: number) {
    this.cupQuantity = quantity;
    return this.cupQuantity;
  }
  public hasVasos(cupQTY: number) {
    return this.cupQuantity > cupQTY ? true : false;
  }
  public giveVasos(cupQuantity: number) {
    if (this.hasVasos(cupQuantity)) {
      this.cupQuantity = this.cupQuantity - cupQuantity;
      return cupQuantity;
    }
  }
  public setContent(contentType: string) {
    this.cupContent = contentType;
  }
  public getContent() {}
}

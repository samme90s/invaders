export class Hitpoint {
      private amount: number

      constructor(amount: number) {
            this.amount = amount
      }

      public getAmount(): number {
            return this.amount
      }

      public reduce(amount: number): void {
            this.amount -= amount
      }
}

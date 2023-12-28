/**
 * @fileoverview Represents a damage value.
 * @author Samuel Svensson
 */

export class Damage {
      private damage: number

      constructor(damage: number) {
            this.set(damage)
      }

      from(): Damage {
            return new Damage(this.damage)
      }

      get(): number {
            return this.damage
      }

      set(damage: number): void {
            if (damage % 1) {
                  throw new Error('damage must be an integer')
            }

            if (damage < 0) {
                  throw new RangeError('damage must be positive or zero')
            }

            this.damage = damage
      }
}

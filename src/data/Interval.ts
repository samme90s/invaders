/**
 * @fileoverview Represents an iteration in a loop.
 * @author Samuel Svensson
 */

export class Interval {
      private interval: number

      constructor(interval: number) {
            this.set(interval)
      }

      from(): Interval {
            return new Interval(this.interval)
      }

      get(): number {
            return this.interval
      }

      set(interval: number): void {
            if (interval % 1) {
                  throw new Error('interval must be an integer')
            }

            if (interval < 0) {
                  throw new RangeError('interval must be positive or zero')
            }

            this.interval = Math.abs(interval)
      }

      hasPassed(): boolean {
            return this.interval <= 0
      }

      reduce(): void {
            this.interval--
      }

      reset(): void {
            this.interval = 0
      }
}

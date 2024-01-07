/**
 * @fileoverview Represents the health of an entity.
 * @author Samuel Svensson
 */

import { Damage } from './Damage'
import { Interval } from './Interval'

export class Hitpoint {
      private readonly total: number
      private actual: number
      private readonly regenRate: number
      private readonly regenDelay: Interval
      private readonly regenClock: Interval
      private readonly timeoutDelay: Interval
      private readonly timeoutClock: Interval

      /**
       * @param regenRate Settings this value to 0 will disable regeneration.
       * Default value is 0.
       * @param regenDelay Amount of intervals between each regeneration.
       * Default value is 10.
       * @param timeoutDelay Amount of intervals before regeneration can start.
       * Default value is 120.
       */
      constructor(
            total: number,
            regenRate: number = 0,
            regenDelay: Interval = new Interval(10),
            timeoutDelay: Interval = new Interval(120)
      ) {
            if (total <= 0) {
                  throw new RangeError('total must be positive')
            }

            if (regenRate < 0) {
                  throw new RangeError(
                        'regeneration rate must be positive or zero'
                  )
            }

            this.total = total
            this.actual = total
            this.regenRate = regenRate
            this.regenDelay = regenDelay
            this.regenClock = new Interval(0)
            this.timeoutDelay = timeoutDelay
            this.timeoutClock = new Interval(0)
      }

      from(): Hitpoint {
            const copy = new Hitpoint(
                  this.total,
                  this.regenRate,
                  this.regenDelay,
                  this.timeoutDelay
            )
            copy.actual = this.actual
            return copy
      }

      isDead(): boolean {
            return this.actual <= 0
      }

      getRatio(): number {
            return this.actual / this.total
      }

      get(): number {
            return this.actual
      }

      reduce(damage: Damage): void {
            if (this.actual - damage.get() < 0) {
                  this.actual = 0
            } else if (this.actual > 0) {
                  this.actual -= damage.get()
            }
      }

      timeoutRegeneration(): void {
            this.timeoutClock.set(this.timeoutDelay.get())
      }

      regenerate(): void {
            this.updateTimeoutClock()
            this.updateRegenClock()
            if (this.canRegenerate()) {
                  if (this.actual + this.regenRate > this.total) {
                        this.actual = this.total
                  } else {
                        this.actual += this.regenRate
                  }

                  this.delayRegeneration()
            }
      }

      private updateTimeoutClock(): void {
            if (!this.timeoutClock.hasPassed()) {
                  this.timeoutClock.reduce()
            }
      }

      private updateRegenClock(): void {
            if (!this.regenClock.hasPassed()) {
                  this.regenClock.reduce()
            }
      }

      private canRegenerate(): boolean {
            return (
                  this.regenRate > 0 &&
                  this.actual < this.total &&
                  this.timeoutClock.hasPassed() &&
                  this.regenClock.hasPassed()
            )
      }

      private delayRegeneration(): void {
            this.regenClock.set(this.regenDelay.get())
      }
}

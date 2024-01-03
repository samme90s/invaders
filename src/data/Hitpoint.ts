/**
 * @fileoverview Represents the health of an entity.
 * @author Samuel Svensson
 */

import { Damage } from './Damage'
import { Interval } from './Interval'

export class Hitpoint {
      private total: number
      private actual: number
      private regenRate: number
      private regenDelay: Interval
      private regenClock: Interval
      private regenTimeout: Interval

      /**
       * @param regenRate Settings this value to 0 will disable regeneration.
       * Default value is 0.
       * @param regenDelay Amount of intervals between each regeneration.
       * Default value is 10.
       */
      constructor(
            total: number,
            regenRate: number = 0,
            regenDelay: Interval = new Interval(10)
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
            this.regenClock = regenDelay
            this.regenTimeout = new Interval(0)
      }

      from(): Hitpoint {
            const copy = new Hitpoint(
                  this.total,
                  this.regenRate,
                  this.regenDelay
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

      setTimeout(interval: Interval): void {
            this.regenTimeout = interval
      }

      regenerate(): void {
            this.updateRegenTimeout()
            this.updateRegenClock()
            if (this.canRegenerate()) {
                  if (this.actual + this.regenRate > this.total) {
                        this.actual = this.total
                  } else {
                        this.actual += this.regenRate
                  }
            }
      }

      private updateRegenTimeout(): void {
            if (!this.regenTimeout.hasPassed()) {
                  this.regenTimeout.reduce()
            }
      }

      private updateRegenClock(): void {
            if (!this.regenClock.hasPassed()) {
                  this.regenClock.reduce()
            } else {
                  this.regenClock = this.regenDelay
            }
      }

      private canRegenerate(): boolean {
            return (
                  this.regenRate > 0 &&
                  this.actual < this.total &&
                  this.regenTimeout.hasPassed() &&
                  this.regenClock.hasPassed()
            )
      }
}

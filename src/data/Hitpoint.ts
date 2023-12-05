/**
 * @fileoverview Represents the health of an entity.
 * @author Samuel Svensson
 */

import { Dimension } from './dimensions/Dimension'
import { Point } from './Point'

export class Hitpoint {
      private total: number
      private actual: number
      private regenRate: number
      /**
       * @param regenDelay In ticks.
       */
      private regenDelay: number
      private regenClock: number
      /**
       * @param regenTimeout In ticks.
       */
      private regenTimeout: number

      // Move this to a view:
      private totalDimension: Dimension
      private actualDimension: Dimension

      /**
       * @param regenRate Settings this value to 0 will disable regeneration.
       */
      constructor(
            total: number = 1,
            regenRate: number = 0,
            regenDelay: number = 10
      ) {
            if (total <= 0) {
                  throw new RangeError('total must be positive')
            }

            if (regenRate < 0) {
                  throw new RangeError(
                        'regeneration rate must be positive or zero'
                  )
            }

            if (regenDelay < 1) {
                  throw new RangeError('regeneration delay must one or more')
            }

            this.total = total
            this.actual = total
            this.regenRate = regenRate
            this.regenDelay = regenDelay
            this.regenClock = regenDelay
            this.regenTimeout = 0

            // Move this to a view:
            this.totalDimension = new Dimension(30, 4)
            this.actualDimension = new Dimension(
                  30,
                  this.totalDimension.getHeight()
            )
      }

      // Move this to a view:
      draw(ctx: CanvasRenderingContext2D, position: Point): void {
            this.regenerate()

            // Positioning of bar:
            const x = position.x - this.totalDimension.getWidth() / 2
            const yOffset = 8
            const y = position.y + this.actualDimension.getHeight() + yOffset

            ctx.fillStyle = '#fff'
            ctx.fillRect(
                  x,
                  y,
                  this.totalDimension.getWidth(),
                  this.actualDimension.getHeight()
            )

            ctx.fillStyle = '#f00'
            ctx.fillRect(
                  x,
                  y,
                  this.totalDimension.getWidth() * this.getRatio(),
                  this.actualDimension.getHeight()
            )
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

      getRatio(): number {
            return this.actual / this.total
      }

      getActual(): number {
            return this.actual
      }

      reduce(amount: number): void {
            if (this.actual - amount < 0) {
                  this.actual = 0
            } else if (this.actual > 0) {
                  this.actual -= amount
            }
      }

      setTimeout(ticks: number): void {
            this.regenTimeout = ticks
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
            if (this.regenTimeout > 0) {
                  this.regenTimeout--
            }
      }

      private updateRegenClock(): void {
            if (this.regenClock > 0) {
                  this.regenClock--
            } else {
                  this.regenClock = this.regenDelay
            }
      }

      private canRegenerate(): boolean {
            return (
                  this.regenRate > 0 &&
                  this.actual < this.total &&
                  this.regenTimeout <= 0 &&
                  this.regenClock <= 0
            )
      }
}

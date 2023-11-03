/**
 * @fileoverview Represents the health of an entity.
 * @author Samuel Svensson
 */

import { Dimension } from './Dimension'
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
      // Used for drawing:
      private totalDimension
      private actualDimension

      /**
       * @param regenRate Settings this value to 0 will disable regeneration.
       */
      constructor(total: number = 1, regenRate: number = 0) {
            if (total <= 0) {
                  throw new RangeError('total must be positive')
            }

            if (regenRate < 0) {
                  throw new RangeError('regeneration rate must be positive or zero')
            }

            this.total = total
            this.actual = total
            this.regenRate = regenRate
            // Magic number here?
            this.regenDelay = 10
            this.regenClock = 0
            this.regenTimeout = 0
            // Used for drawing:
            this.totalDimension = new Dimension(30, 4)
            this.actualDimension = new Dimension(30, this.totalDimension.getHeight())
      }

      draw(ctx: CanvasRenderingContext2D, position: Point): void {
            this.regenerate()
            this.drawDimension(ctx, position)
      }

      private drawDimension(ctx: CanvasRenderingContext2D, position: Point): void {
            const x = position.x - this.totalDimension.getWidth() / 2
            const y = position.y + this.actualDimension.getHeight() + 8 // Offset.

            ctx.fillStyle = '#fff'
            ctx.fillRect(x, y, this.totalDimension.getWidth(), this.actualDimension.getHeight())

            ctx.fillStyle = '#f00'
            ctx.fillRect(
                  x,
                  y,
                  this.totalDimension.getWidth() * this.getRatio(),
                  this.actualDimension.getHeight()
            )
      }

      from(): Hitpoint {
            const copy = new Hitpoint(this.total)
            copy.actual = this.actual
            return copy
      }

      getTotal(): number {
            return this.total
      }

      getActual(): number {
            return this.actual
      }

      getRatio(): number {
            return this.actual / this.total
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

      // Simplify this method:
      private regenerate(): void {
            if (this.regenRate <= 0) {
                  return
            }

            if (this.regenTimeout > 0) {
                  this.regenTimeout--
                  return
            }

            this.regenClock--
            if (this.regenClock <= 0) {
                  if (this.actual < this.total) {
                        if (this.actual + this.regenRate > this.total) {
                              this.actual = this.total
                        } else {
                              this.actual += this.regenRate
                        }
                  }
                  this.regenClock = this.regenDelay
            }
      }
}

/**
 * @fileoverview
 * @author Samuel Svensson
 */

import { Dimension } from '../data-types/Dimension'
import { Point } from '../data-types/Point'

export class Bullet {
      public position: Point
      private speed: number = 1
      private dimensions: Dimension = new Dimension(2, 10)

      constructor(position: Point, speed: number) {
            this.position = position
            this.speed = speed
      }

      draw(ctx: CanvasRenderingContext2D): void {
            ctx.fillStyle = '#f00'
            ctx.fillRect(
                  this.position.x,
                  this.position.y,
                  this.dimensions.width,
                  this.dimensions.height
            )

            // Moves the bullet upwards.
            this.position.y -= this.speed
      }
}

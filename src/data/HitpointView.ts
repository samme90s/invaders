/**
 * @fileoverview Represents the view of a hitpoint instance.
 * @author Samuel Svensson
 */

import { Dimension } from './dimensions/Dimension'
import { Hitpoint } from './Hitpoint'
import { Point } from './Point'

export class HitpointView {
      private hitpoint: Hitpoint
      private totalDimension
      private actualDimension

      constructor(hitpoint: Hitpoint) {
            this.hitpoint = hitpoint
            this.totalDimension = new Dimension(30, 4)
            this.actualDimension = new Dimension(
                  30,
                  this.totalDimension.getHeight()
            )
      }

      draw(ctx: CanvasRenderingContext2D, position: Point): void {
            this.hitpoint.regenerate()

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
                  this.totalDimension.getWidth() * this.hitpoint.getRatio(),
                  this.actualDimension.getHeight()
            )
      }
}

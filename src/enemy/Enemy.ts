/**
 * @fileoverview Defines an enemy.
 * @author Samuel Svensson
 */

import { Dimension } from '../data-types/Dimension'
import { Point } from '../data-types/Point'

export class Enemy {
      public position: Point
      public dimension: Dimension = new Dimension(20, 20)

      constructor(position: Point) {
            this.position = position
      }

      draw(ctx: CanvasRenderingContext2D): void {
            ctx.fillStyle = '#00f'
            ctx.fillRect(
                  this.position.x,
                  this.position.y,
                  this.dimension.width,
                  this.dimension.height
            )
      }
}

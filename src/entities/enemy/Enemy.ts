/**
 * @fileoverview Defines an enemy.
 * @author Samuel Svensson
 */

import { Dimension } from '../../data-types/Dimension'
import { Hitpoint } from '../../data-types/Hitpoint'
import { Point } from '../../data-types/Point'
import { Entity } from '../Entity'

export class Enemy extends Entity {
      constructor(position: Point, dimension: Dimension, hitpoint: Hitpoint, speed: number) {
            super(position, dimension, hitpoint, speed)
      }

      draw(ctx: CanvasRenderingContext2D): void {
            ctx.fillStyle = '#00f'
            ctx.fillRect(
                  this.position.x,
                  this.position.y,
                  this.dimension.getWidth(),
                  this.dimension.getHeight()
            )
      }
}

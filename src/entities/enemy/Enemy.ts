/**
 * @fileoverview Defines an enemy.
 * @author Samuel Svensson
 */

import { Dimension } from '../../data-types/Dimension'
import { Point } from '../../data-types/Point'
import { Entity } from '../Entity'

export class Enemy extends Entity {
      constructor(position: Point, dimension: Dimension, hitpoints: number, speed: number) {
            super(position, dimension, hitpoints, speed)
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

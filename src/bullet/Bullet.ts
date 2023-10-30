/**
 * @fileoverview
 * @author Samuel Svensson
 */

import { Dimension } from '../data-types/Dimension'
import { Point } from '../data-types/Point'
import { Vector } from '../data-types/Vector'
import { Enemy } from '../entities/enemy/Enemy'

export class Bullet {
      private position: Point
      private dimensions: Dimension
      private vector: Vector

      constructor(position: Point, dimension: Dimension, vector: Vector) {
            this.position = position
            this.dimensions = dimension
            this.vector = vector
      }

      getPosition(): Point {
            return new Point(this.position.x, this.position.y)
      }

      draw(ctx: CanvasRenderingContext2D): void {
            ctx.fillStyle = '#f00'
            ctx.fillRect(
                  this.position.x,
                  this.position.y,
                  this.dimensions.getWidth(),
                  this.dimensions.getHeight()
            )

            this.position.y -= this.vector.yMagnitude
            this.position.x += this.vector.xMagnitude
      }

      isCollidingWith(enemy: Enemy): boolean {
            if (
                  this.position.x < enemy.getPosition().x + enemy.getDimension().getWidth() &&
                  this.position.x + this.dimensions.getWidth() > enemy.getPosition().x &&
                  this.position.y < enemy.getPosition().y + enemy.getDimension().getHeight() &&
                  this.position.y + this.dimensions.getHeight() > enemy.getPosition().y
            ) {
                  return true
            }

            return false
      }
}

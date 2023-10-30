/**
 * @fileoverview
 * @author Samuel Svensson
 */

import { Dimension } from '../data-types/Dimension'
import { Point } from '../data-types/Point'
import { Vector } from '../data-types/Vector'
import { Enemy } from '../entities/enemy/Enemy'

export class Bullet {
      private _position: Point
      private dimensions: Dimension
      private vector: Vector

      constructor(position: Point, dimension: Dimension, vector: Vector) {
            this._position = position
            this.dimensions = dimension
            this.vector = vector
      }

      get position(): Point {
            return new Point(this._position.x, this._position.y)
      }

      draw(ctx: CanvasRenderingContext2D): void {
            ctx.fillStyle = '#f00'
            ctx.fillRect(
                  this._position.x,
                  this._position.y,
                  this.dimensions.width,
                  this.dimensions.height
            )

            this._position.y -= this.vector.yMagnitude
            this._position.x += this.vector.xMagnitude
      }

      isCollidingWith(enemy: Enemy): boolean {
            if (
                  this._position.x < enemy.position.x + enemy.dimension.width &&
                  this._position.x + this.dimensions.width > enemy.position.x &&
                  this._position.y < enemy.position.y + enemy.dimension.height &&
                  this._position.y + this.dimensions.height > enemy.position.y
            ) {
                  return true
            }

            return false
      }
}

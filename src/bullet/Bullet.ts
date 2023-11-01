/**
 * @fileoverview Defines a bullet.
 * @author Samuel Svensson
 */

import { CartesianVector } from '../data-types/CartesianVector'
import { Dimension } from '../data-types/Dimension'
import { Point } from '../data-types/Point'
import { PolarVector } from '../data-types/PolarVector'
import { Enemy } from '../entities/enemy/Enemy'

export class Bullet {
      private position: Point
      private dimensions: Dimension
      private vector: CartesianVector

      constructor(position: Point, dimension: Dimension, vector: PolarVector) {
            this.position = position
            this.dimensions = dimension
            // This may be odd because the vector is already normalized
            // and multiplied when created in as a PolarVector.
            this.vector = vector.toCartesian()
      }

      getPosition(): Point {
            return this.position.from()
      }

      draw(ctx: CanvasRenderingContext2D): void {
            ctx.fillStyle = '#f00'
            ctx.fillRect(
                  this.position.x,
                  this.position.y,
                  this.dimensions.getWidth(),
                  this.dimensions.getHeight()
            )

            this.position.y -= this.vector.getY()
            this.position.x += this.vector.getX()
      }

      isCollidingWith(enemy: Enemy): boolean {
            return (
                  this.position.x < enemy.getPosition().x + enemy.getDimension().getWidth() &&
                  this.position.x + this.dimensions.getWidth() > enemy.getPosition().x &&
                  this.position.y < enemy.getPosition().y + enemy.getDimension().getHeight() &&
                  this.position.y + this.dimensions.getHeight() > enemy.getPosition().y
            )
      }
}

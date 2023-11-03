/**
 * @fileoverview Defines a bullet.
 * @author Samuel Svensson
 */

import { CartesianVector } from '../data/vectors/CartesianVector'
import { Dimension } from '../data/Dimension'
import { Point } from '../data/Point'
import { PolarVector } from '../data/vectors/PolarVector'
import { Enemy } from '../entities/enemy/Enemy'

export class Bullet {
      private position: Point
      private dimension: Dimension
      private vector: CartesianVector

      constructor(position: Point, vector: PolarVector) {
            this.position = position

            // This may be odd because the vector is already normalized
            // and multiplied when created in as a PolarVector.
            this.vector = vector.toCartesian()

            // Variable dimension depending on the vector.
            // Maybe use this as a default if no dimension is provided?
            // Otherwise check bullet angle and set dimension accordingly
            // based of the dimension passed in.
            this.dimension = new Dimension(
                  Math.max(1, Math.abs(this.vector.getX())),
                  Math.max(1, Math.abs(this.vector.getY()))
            )

            this.offsetBullet()
            
      }

      private offsetBullet(): void {
            this.position.x -= this.dimension.getWidth() / 2
            this.position.y -= this.dimension.getHeight() / 2
            // Further offset the bullet's position so that the edge of the
            // bullet is at the player's position
            this.position.x += this.vector.getX()
            this.position.y -= this.vector.getY()
      }

      getPosition(): Point {
            return this.position.from()
      }

      draw(ctx: CanvasRenderingContext2D): void {
            ctx.fillStyle = '#f00'
            ctx.fillRect(
                  this.position.x,
                  this.position.y,
                  this.dimension.getWidth(),
                  this.dimension.getHeight()
            )

            this.position.x += this.vector.getX()
            this.position.y -= this.vector.getY()
      }

      isCollidingWith(enemy: Enemy): boolean {
            return (
                  this.position.x < enemy.getPosition().x + enemy.getDimension().getWidth() &&
                  this.position.x + this.dimension.getWidth() > enemy.getPosition().x &&
                  this.position.y < enemy.getPosition().y + enemy.getDimension().getHeight() &&
                  this.position.y + this.dimension.getHeight() > enemy.getPosition().y
            )
      }
}

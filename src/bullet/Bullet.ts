/**
 * @fileoverview
 * @author Samuel Svensson
 */

import { Dimension } from '../data-types/Dimension'
import { Point } from '../data-types/Point'
import { Enemy } from '../entities/enemy/Enemy'

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

      isCollidingWith(enemy: Enemy): boolean {
            if (
                  this.position.x < enemy.position.x + enemy.dimension.width &&
                  this.position.x + this.dimensions.width > enemy.position.x &&
                  this.position.y < enemy.position.y + enemy.dimension.height &&
                  this.position.y + this.dimensions.height > enemy.position.y
            ) {
                  return true
            }

            return false
      }
}

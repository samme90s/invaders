/**
 * @fileoverview Defines an enemy.
 * @author Samuel Svensson
 */

import { CartesianVector } from '../../data-types/CartesianVector'
import { Dimension } from '../../data-types/Dimension'
import { Hitpoint } from '../../data-types/Hitpoint'
import { Point } from '../../data-types/Point'
import { Entity } from '../Entity'
import { Player } from '../player/Player'

export class Enemy extends Entity {
      private knockbackForce: number

      constructor(position: Point, dimension: Dimension, hitpoint: Hitpoint, speed: number) {
            super(position, dimension, hitpoint, speed)
      }

      draw(ctx: CanvasRenderingContext2D, player: Player): void {
            ctx.fillStyle = '#00f'
            ctx.fillRect(
                  this.position.x,
                  this.position.y,
                  this.dimension.getWidth(),
                  this.dimension.getHeight()
            )

            this.move(player)
      }

      private move(player: Player): void {
            const vector = new CartesianVector(
                  player.getPosition().x - this.position.x,
                  player.getPosition().y - this.position.y
            )
                  .normalize()
                  .multiply(this.speed)

            // Remove magic number here:
            if (this.isCollidingWith(player)) {
                  player.reduceHitpoint(1)
                  player.timeoutHitpoint(120)
                  this.knockbackForce = 10
            }

            if (this.knockbackForce > 0) {
                  const knockbackVector = vector.multiply(-this.knockbackForce)
                  this.position.x += knockbackVector.getX()
                  this.position.y += knockbackVector.getY()
                  this.knockbackForce--
            } else {
                  this.position.x += vector.getX()
                  this.position.y += vector.getY()
            }
      }

      private isCollidingWith(player: Player) {
            return (
                  player.getPosition().x < this.position.x + this.dimension.getWidth() &&
                  player.getPosition().x + player.getDimension().getWidth() > this.position.x &&
                  player.getPosition().y < this.position.y + this.dimension.getHeight() &&
                  player.getPosition().y + player.getDimension().getHeight() > this.position.y
            )
      }
}

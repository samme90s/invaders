/**
 * @fileoverview Defines an enemy.
 * @author Samuel Svensson
 */

import { Dimension } from '../../data/Dimension'
import { Hitpoint } from '../../data/Hitpoint'
import { Point } from '../../data/Point'
import { Sprite } from '../../data/Sprite'
import { CartesianVector } from '../../data/vectors/CartesianVector'
import { Entity } from '../Entity'
import { Player } from '../player/Player'

export class Enemy extends Entity {
      private knockbackForce: number

      constructor(
            position: Point,
            dimension: Dimension,
            sprite: Sprite,
            hitpoint: Hitpoint,
            speed: number
      ) {
            super(position, dimension, sprite, hitpoint, speed)
      }

      draw(ctx: CanvasRenderingContext2D, player: Player): void {
            this.move(player)
            this.sprite.draw(ctx, this.position, this.dimension)
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

      private isCollidingWith(player: Player): boolean {
            return (
                  this.isCollidingWithTopEdge(player) &&
                  this.isCollidingWithRightEdge(player) &&
                  this.isCollidingWithBottomEdge(player) &&
                  this.isCollidingWithLeftEdge(player)
            )
      }

      private isCollidingWithTopEdge(player: Player): boolean {
            return (
                  player.getPosition().y - player.getDimension().getHeight() / 2 <
                  this.position.y + this.dimension.getHeight() / 2
            )
      }

      private isCollidingWithRightEdge(player: Player): boolean {
            return (
                  player.getPosition().x + player.getDimension().getWidth() / 2 >
                  this.position.x - this.dimension.getWidth() / 2
            )
      }

      private isCollidingWithBottomEdge(player: Player): boolean {
            return (
                  player.getPosition().y + player.getDimension().getHeight() / 2 >
                  this.position.y - this.dimension.getHeight() / 2
            )
      }

      private isCollidingWithLeftEdge(player: Player): boolean {
            return (
                  player.getPosition().x - player.getDimension().getWidth() / 2 <
                  this.position.x + this.dimension.getWidth() / 2
            )
      }
}

/**
 * @fileoverview Defines an enemy.
 * @author Samuel Svensson
 */

import { Hitbox } from '../../data/dimensions/Hitbox'
import { Hitpoint } from '../../data/Hitpoint'
import { Sprite } from '../../data/Sprite'
import { CartesianVector } from '../../data/vectors/CartesianVector'
import { Entity } from '../Entity'
import { Player } from '../player/Player'

export class Enemy extends Entity {
      private knockbackForce: number

      constructor(
            hitbox: Hitbox,
            sprite: Sprite,
            hitpoint: Hitpoint,
            speed: number
      ) {
            super(hitbox, sprite, hitpoint, speed)
      }

      draw(ctx: CanvasRenderingContext2D, player: Player): void {
            this.move(player)
            this.sprite.draw(ctx, this.hitbox)
      }

      private move(player: Player): void {
            const vector = new CartesianVector(
                  player.getHitbox().getPosition().x - this.hitbox.getPosition().x,
                  player.getHitbox().getPosition().y - this.hitbox.getPosition().y
            )
                  .normalize()
                  .multiply(this.speed)

            // Remove magic number here:
            if (this.hitbox.isCollidingWith(player.getHitbox())) {
                  player.reduceHitpoint(1)
                  player.timeoutHitpoint(120)
                  this.knockbackForce = 10
            }

            if (this.knockbackForce > 0) {
                  const knockbackVector = vector.multiply(-this.knockbackForce)
                  this.hitbox.getMutablePosition().x += knockbackVector.getX()
                  this.hitbox.getMutablePosition().y += knockbackVector.getY()
                  this.knockbackForce--
            } else {
                  this.hitbox.getMutablePosition().x += vector.getX()
                  this.hitbox.getMutablePosition().y += vector.getY()
            }
      }
}

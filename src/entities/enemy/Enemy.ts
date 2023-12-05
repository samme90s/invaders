/**
 * @fileoverview Defines an enemy.
 * @author Samuel Svensson
 */

import { Hitbox } from '../../data/dimensions/Hitbox'
import { Hitpoint } from '../../data/Hitpoint'
import { Speed } from '../../data/Speed'
import { Sprite } from '../../data/Sprite'
import { CartesianVector } from '../../data/vectors/CartesianVector'
import { Entity } from '../Entity'
import { Player } from '../player/Player'

export class Enemy extends Entity {
      constructor(
            hitbox: Hitbox,
            sprite: Sprite,
            hitpoint: Hitpoint,
            speed: Speed
      ) {
            super(hitbox, sprite, hitpoint, speed)
      }

      // Move this to a view:
      draw(ctx: CanvasRenderingContext2D, player: Player): void {
            this.move(player)
            this.sprite.draw(ctx, this.getHitbox())
      }

      move(player: Player): void {
            if (!this.vector.onInversionCooldown()) {
                  this.vector = new CartesianVector(
                        player.getHitbox().getPosition().x -
                              this.hitbox.getPosition().x,
                        player.getHitbox().getPosition().y -
                              this.hitbox.getPosition().y
                  )
                        .normalize()
                        .multiply(this.speed.getValue())
            } else {
                  this.vector.reduceInversionCooldown()
            }

            // Remove magic number here:
            if (this.hitbox.isCollidingWith(player.getHitbox())) {
                  player.reduceHitpoint(1)
                  player.timeoutHitpoint(120)
                  this.vector.invert()
            }

            this.hitbox.getMutablePosition().x += this.vector.getX()
            this.hitbox.getMutablePosition().y += this.vector.getY()
      }
}

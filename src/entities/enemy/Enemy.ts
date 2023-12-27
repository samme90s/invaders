/**
 * @fileoverview Defines an enemy.
 * @author Samuel Svensson
 */

import { Hitbox } from '../../data/dimensions/Hitbox'
import { Hitpoint } from '../../data/Hitpoint'
import { Speed } from '../../data/Speed'
import { Entity } from '../Entity'
import { Player } from '../player/Player'

export class Enemy extends Entity {
      constructor(hitbox: Hitbox, hitpoint: Hitpoint, speed: Speed) {
            super(hitbox, hitpoint, speed)
      }

      moveTowards(player: Player): void {
            // TODO: Remove magic number here
            if (this.hitbox.isCollidingWith(player.getHitbox())) {
                  player.reduceHitpoint(1)
                  player.timeoutHitpoint(120)
            }

            this.hitbox.setDirection(
                  this.hitbox
                        .getPoint()
                        .directionTo(player.getHitbox().getPoint())
            )

            this.hitbox.move(this.speed)
      }
}

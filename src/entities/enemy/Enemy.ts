/**
 * @fileoverview Defines an enemy.
 * @author Samuel Svensson
 */

import { Damage } from '../../data/Damage'
import { Hitbox } from '../../data/dimensions/Hitbox'
import { Hitpoint } from '../../data/Hitpoint'
import { Interval } from '../../data/Interval'
import { Speed } from '../../data/Speed'
import { Entity } from '../Entity'
import { Player } from '../player/Player'

export class Enemy extends Entity {
      private damage: Damage

      constructor(
            hitbox: Hitbox,
            hitpoint: Hitpoint,
            speed: Speed,
            damage: Damage
      ) {
            super(hitbox, hitpoint, speed)
            this.damage = damage
      }

      moveTowards(player: Player): void {
            // TODO: Remove magic number here
            if (this.hitbox.isCollidingWith(player.getHitbox())) {
                  player.reduceHitpoint(this.damage)
                  player.timeoutHitpoint(new Interval(120))
            }

            this.hitbox.setDirection(
                  this.hitbox
                        .getPoint()
                        .directionTo(player.getHitbox().getPoint())
            )

            this.hitbox.move(this.speed)
      }
}

/**
 * @fileoverview Defines an enemy.
 * @author Samuel Svensson
 */

import { Damage } from '../../data/Damage'
import { Dimension } from '../../data/dimensions/Dimension'
import { Hitpoint } from '../../data/Hitpoint'
import { Interval } from '../../data/Interval'
import { Speed } from '../../data/Speed'
import { Vector2 } from '../../data/Vector2'
import { Entity } from '../Entity'
import { Player } from '../player/Player'

export class Enemy extends Entity {
      private damage: Damage

      constructor(
            point: Vector2,
            direction: Vector2,
            dimension: Dimension,
            hitpoint: Hitpoint,
            speed: Speed,
            damage: Damage
      ) {
            super(point, direction, dimension, hitpoint, speed)
            this.damage = damage
      }

      moveTowards(player: Player): void {
            // TODO: Remove magic number here
            if (this.isCollidingWith(player)) {
                  player.hitpoint.reduce(this.damage)
                  player.hitpoint.setTimeout(new Interval(120))
            }

            this._direction = this._point.directionTo(player.point)
            this.move()
      }
}

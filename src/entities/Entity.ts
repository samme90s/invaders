/**
 * @fileoverview Represents an abstract entity.
 * @author Samuel Svensson
 */

import { Damage } from '../data/Damage'
import { Hitbox } from '../data/dimensions/Hitbox'
import { Hitpoint } from '../data/Hitpoint'
import { Interval } from '../data/Interval'
import { Speed } from '../data/Speed'

export abstract class Entity {
      protected hitbox: Hitbox
      protected hitpoint: Hitpoint
      protected speed: Speed

      constructor(hitbox: Hitbox, hitpoint: Hitpoint, speed: Speed) {
            this.hitbox = hitbox
            this.hitpoint = hitpoint
            this.speed = speed
      }

      getHitbox(): Hitbox {
            return this.hitbox
      }

      getHitpoint(): Hitpoint {
            return this.hitpoint
      }

      reduceHitpoint(damage: Damage): void {
            this.hitpoint.reduce(damage)
      }

      timeoutHitpoint(interval: Interval): void {
            this.hitpoint.setTimeout(interval)
      }
}

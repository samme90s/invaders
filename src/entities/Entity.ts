/**
 * @fileoverview Represents an abstract entity.
 * @author Samuel Svensson
 */

import { Hitbox } from '../data/dimensions/Hitbox'
import { Hitpoint } from '../data/Hitpoint'
import { Speed } from '../data/Speed'
import { Sprite } from '../data/Sprite'

export abstract class Entity {
      protected sprite: Sprite
      protected hitbox: Hitbox
      protected hitpoint: Hitpoint
      protected speed: Speed

      constructor(
            hitbox: Hitbox,
            sprite: Sprite,
            hitpoint: Hitpoint,
            speed: Speed
      ) {
            this.hitbox = hitbox
            this.sprite = sprite
            this.hitpoint = hitpoint
            this.speed = speed
      }

      /**
       * @returns a deep copy.
       */
      getHitbox(): Hitbox {
            return this.hitbox.from()
      }

      /**
       * @returns a deep copy.
       */
      getHitpoint(): Hitpoint {
            return this.hitpoint.from()
      }

      reduceHitpoint(amount: number): void {
            this.hitpoint.reduce(amount)
      }

      timeoutHitpoint(ticks: number): void {
            this.hitpoint.setTimeout(ticks)
      }
}

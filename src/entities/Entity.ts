/**
 * @fileoverview Represents an abstract entity.
 * @author Samuel Svensson
 */

import { Hitbox } from '../data/dimensions/Hitbox'
import { Hitpoint } from '../data/Hitpoint'
import { Sprite } from '../data/Sprite'

export abstract class Entity {
      protected sprite: Sprite
      protected hitbox: Hitbox
      protected hitpoint: Hitpoint
      protected speed: number = 1

      constructor(
            hitbox: Hitbox,
            sprite: Sprite,
            hitpoint: Hitpoint,
            speed: number
      ) {
            if (this.speed < 0) {
                  throw new Error('speed must be positive or zero')
            }

            this.hitbox = hitbox
            this.sprite = sprite
            this.hitpoint = hitpoint
            this.speed = speed
      }

      getHitbox(): Hitbox {
            return this.hitbox.from()
      }

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

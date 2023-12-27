/**
 * @fileoverview Defines a bullet.
 * @author Samuel Svensson
 */

import { Hitbox } from '../data/dimensions/Hitbox'
import { Speed } from '../data/Speed'

export class Bullet {
      private hitbox: Hitbox
      private speed: Speed
      private timeToLive: number

      /**
       * @param timeToLive Ticks the bullet will live. Default value is 100.
       */
      constructor(hitbox: Hitbox, speed: Speed, timeToLive: number = 100) {
            this.hitbox = hitbox
            this.speed = speed
            this.timeToLive = timeToLive
      }

      move(): void {
            this.hitbox.move(this.speed)
            this.reduceTimeToLive()
      }

      private reduceTimeToLive(): void {
            this.timeToLive--
      }

      isDead(): boolean {
            return this.timeToLive <= 0
      }

      kill(): void {
            this.timeToLive = 0
      }

      getHitbox(): Hitbox {
            return this.hitbox.from()
      }

      isCollidingWith(hitbox: Hitbox): boolean {
            return this.hitbox.isCollidingWith(hitbox)
      }
}

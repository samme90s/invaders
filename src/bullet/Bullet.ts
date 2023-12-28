/**
 * @fileoverview Defines a bullet.
 * @author Samuel Svensson
 */

import { Damage } from '../data/Damage'
import { Hitbox } from '../data/dimensions/Hitbox'
import { Interval } from '../data/Interval'
import { Speed } from '../data/Speed'

export class Bullet {
      private hitbox: Hitbox
      private speed: Speed
      private damage: Damage
      private timeToLive: Interval

      /**
       * @param timeToLive Amount of intervals the bullet
       * will live. Default value is 100.
       */
      constructor(
            hitbox: Hitbox,
            speed: Speed,
            damage: Damage,
            timeToLive: Interval = new Interval(100)
      ) {
            this.hitbox = hitbox
            this.speed = speed
            this.damage = damage
            this.timeToLive = timeToLive
      }

      move(): void {
            this.hitbox.move(this.speed)
            this.reduceTimeToLive()
      }

      private reduceTimeToLive(): void {
            this.timeToLive.reduce()
      }

      isDead(): boolean {
            return this.timeToLive.get() <= 0
      }

      kill(): void {
            this.timeToLive.reset()
      }

      getHitbox(): Hitbox {
            return this.hitbox.from()
      }

      getDamage(): Damage {
            return this.damage.from()
      }

      isCollidingWith(hitbox: Hitbox): boolean {
            return this.hitbox.isCollidingWith(hitbox)
      }
}

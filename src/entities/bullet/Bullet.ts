/**
 * @fileoverview Defines a bullet.
 * @author Samuel Svensson
 */

import { Damage } from '../../data/Damage'
import { Dimension } from '../../data/dimensions/Dimension'
import { Hitpoint } from '../../data/Hitpoint'
import { Interval } from '../../data/Interval'
import { Speed } from '../../data/Speed'
import { Vector2 } from '../../data/Vector2'
import { Entity } from '../Entity'

export class Bullet extends Entity {
      private readonly _damage: Damage
      private readonly timeToLive: Interval

      /**
       * @param timeToLive Amount of intervals the
       * bullet will live. Default value is 100.
       */
      constructor(
            point: Vector2,
            direction: Vector2,
            dimension: Dimension,
            hitpoint: Hitpoint,
            speed: Speed,
            damage: Damage,
            timeToLive: Interval = new Interval(100)
      ) {
            super(point, direction, dimension, hitpoint, speed)
            this._damage = damage
            this.timeToLive = timeToLive
      }

      update(): void {
            this.move()
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

      /**
       * @returns Immutable object.
       */
      get damage(): Damage {
            return this._damage.from()
      }
}

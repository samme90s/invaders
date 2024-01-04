/**
 * @fileoverview Defines a controller that handles bullet instances and
 * simulate their behavior.
 * @author Samuel Svensson
 */

import { Interval } from '../../data/Interval'
import { Vector2 } from '../../data/Vector2'
import { Entity } from '../Entity'
import { Bullet } from './Bullet'
import { BulletFactory } from './factory/BulletFactory'

export class BulletController {
      private bullets: Bullet[] = []
      private shootDelay: Interval
      private shootClock: Interval

      /**
       * @param shootDelay Amount of intervals between each shot, this
       * value is always positive or zero. Default value is 1.
       */
      constructor(shootDelay: Interval = new Interval(1)) {
            this.shootDelay = shootDelay
            this.shootClock = new Interval(0)
      }

      update(): void {
            for (let bIx = 0; bIx < this.bullets.length; bIx++) {
                  this.bullets[bIx].move()
            }
      }

      shoot(point: Vector2): void {
            this.shootClock.reduce()
            if (this.shootClock.hasPassed()) {
                  this.addBullet(point)
                  this.shootClock = this.shootDelay
            }
      }

      private addBullet(point: Vector2): void {
            this.bullets.push(BulletFactory.createFastBullet(point))
      }

      removeDeadBullets(): void {
            for (let bIx = 0; bIx < this.bullets.length; bIx++) {
                  if (this.bullets[bIx].isDead()) {
                        this.bullets.splice(bIx, 1)
                  }
            }
      }

      checkCollisions(entities: Entity[]): void {
            for (let bIx = 0; bIx < this.bullets.length; bIx++) {
                  for (let eIx = 0; eIx < entities.length; eIx++) {
                        if (this.bullets[bIx].isCollidingWith(entities[eIx])) {
                              entities[eIx].hitpoint.reduce(
                                    this.bullets[bIx].damage
                              )
                              this.bullets[bIx].kill()
                        }
                  }
            }
      }
}

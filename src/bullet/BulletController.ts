/**
 * @fileoverview Defines a controller that handles bullet instances and
 * simulate their behaviour.
 * @author Samuel Svensson
 */

import { Vector2 } from '../data/Vector2'
import { Entity } from '../entities/Entity'
import { Bullet } from './Bullet'
import { BulletFactory } from './factory/BulletFactory'

export class BulletController {
      private bullets: Bullet[] = []
      private shootDelay: number
      private shootClock: number

      /**
       * @param shootDelay Ticks between each shot, this value is
       * always positive or zero. Default value is 1.
       */
      constructor(shootDelay: number = 1) {
            this.shootDelay = Math.abs(shootDelay)
            this.shootClock = 0
      }

      update(): void {
            for (let bIx = 0; bIx < this.bullets.length; bIx++) {
                  this.bullets[bIx].move()
            }
      }

      shoot(point: Vector2): void {
            this.shootClock--
            if (this.shootClock <= 0) {
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
                        if (
                              this.bullets[bIx].isCollidingWith(
                                    entities[eIx].getHitbox()
                              )
                        ) {
                              entities[eIx].reduceHitpoint(1)
                              this.bullets[bIx].kill()
                        }
                  }
            }
      }
}

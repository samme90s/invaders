/**
 * @fileoverview Defines a controller that handles bullet instances and
 * simulate their behaviour.
 * @author Samuel Svensson
 */

import { Vector2 } from '../data/Vector2'
import { Entity } from '../entities/Entity'
import { Bullet } from './Bullet'
import { BulletCreationStrategy } from './strategy/BulletCreationStrategy'

export class BulletController {
      private bulletCreationStrategy: BulletCreationStrategy
      private bullets: Bullet[] = []
      private shootDelay: number
      private shootClock: number

      /**
       * @param shootDelay Ticks between each shot, this value is
       * always positive or zero. Default value is 1.
       */
      constructor(
            bulletCreationStrategy: BulletCreationStrategy,
            shootDelay: number = 1
      ) {
            this.bulletCreationStrategy = bulletCreationStrategy
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
                  this.addBullets(point)
                  this.shootClock = this.shootDelay
            }
      }

      private addBullets(point: Vector2): void {
            const bullets = this.bulletCreationStrategy.get(point)
            for (let bIx = 0; bIx < bullets.length; bIx++) {
                  this.bullets.push(bullets[bIx])
            }
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

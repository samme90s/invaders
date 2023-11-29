/**
 * @fileoverview Defines a controller that handles bullet instances and
 * simulate their behaviour.
 * @author Samuel Svensson
 */

import { Angle } from '../data/angles/Angle'
import { ClipSpace } from '../data/dimensions/ClipSpace'
import { Point } from '../data/Point'
import { Enemy } from '../entities/enemy/Enemy'
import { Bullet } from './Bullet'
import { BulletCreationStrategy } from './strategy/BulletCreationStrategy'

export class BulletController {
      private bulletCreationStrategy: BulletCreationStrategy
      private bullets: Bullet[] = []
      private shootDelay: number
      private shootClock: number

      /**
       * @param shootDelay Clock ticks between each shot, this value is
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

      draw(ctx: CanvasRenderingContext2D, clipSpace: ClipSpace): void {
            for (let bIx = 0; bIx < this.bullets.length; bIx++) {
                  // Remove bullet if it is off screen.
                  if (clipSpace.isOutside(this.bullets[bIx].getHitbox())) {
                        this.bullets.splice(bIx, 1)
                        continue
                  }

                  this.bullets[bIx].draw(ctx)
            }
      }

      shoot(origin: Point, angle: Angle): void {
            this.shootClock--
            if (this.shootClock <= 0) {
                  this.createBullets(origin, angle)
                  this.shootClock = this.shootDelay
            }
      }

      private createBullets(origin: Point, originAngle: Angle): void {
            const bullets = this.bulletCreationStrategy.getBullets(
                  origin,
                  originAngle
            )
            for (let bIx = 0; bIx < bullets.length; bIx++) {
                  this.bullets.push(bullets[bIx])
            }
      }

      isCollidingWith(enemies: Enemy[]): boolean {
            for (let bIx = 0; bIx < this.bullets.length; bIx++) {
                  for (let eIx = 0; eIx < enemies.length; eIx++) {
                        if (
                              this.bullets[bIx].isCollidingWith(
                                    enemies[eIx].getHitbox()
                              )
                        ) {
                              enemies[eIx].reduceHitpoint(1)
                              // Make sure to update this if return is removed.
                              // Otherwise modifying the array while iterating
                              // will cause problems.
                              this.bullets.splice(bIx, 1)
                              return true
                        }
                  }
            }

            return false
      }
}

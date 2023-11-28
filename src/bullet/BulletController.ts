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

      constructor(
            bulletCreationStrategy: BulletCreationStrategy,
            shootDelay: number = 1
      ) {
            this.bulletCreationStrategy = bulletCreationStrategy
            this.shootDelay = shootDelay
            this.shootClock = 0
      }

      get count(): number {
            return this.bullets.length
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

      private shoot(origin: Point, originAngle: Angle): void {
            this.shootClock--
            if (this.shootClock <= 0) {
                  const bullets = this.bulletCreationStrategy.getBullets(
                        origin,
                        originAngle
                  )
                  for (let bIx = 0; bIx < bullets.length; bIx++) {
                        this.bullets.push(bullets[bIx])
                  }
                  this.shootClock = this.shootDelay
            }
      }

      shootUp(origin: Point): void {
            this.shoot(origin, new Angle(90))
      }

      shootLeft(origin: Point): void {
            this.shoot(origin, new Angle(180))
      }

      shootDown(origin: Point): void {
            this.shoot(origin, new Angle(270))
      }

      shootRight(origin: Point): void {
            this.shoot(origin, new Angle(0))
      }

      isCollidingWith(enemies: Enemy[]): boolean {
            return this.bullets.some(bullet => {
                  for (let eIx = 0; eIx < enemies.length; eIx++) {
                        if (bullet.isCollidingWith(enemies[eIx].getHitbox())) {
                              enemies[eIx].reduceHitpoint(1)
                              this.bullets.splice(
                                    this.bullets.indexOf(bullet),
                                    1
                              )
                              return true
                        }
                  }

                  return false
            })
      }
}

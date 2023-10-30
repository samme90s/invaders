/**
 * @fileoverview Defines a controller that handles bullet instances and simulate their behaviour.
 * @author Samuel Svensson
 */

import { Point } from '../data-types/Point'
import { Enemy } from '../entities/enemy/Enemy'
import { Bullet } from './Bullet'
import { BulletCreationStrategy } from './strategy/BulletCreationStrategy'

export class BulletController {
      private bulletCreationStrategy: BulletCreationStrategy
      private bullets: Bullet[] = []
      private delay: number = 1
      private actualDelay: number = 0

      constructor(bulletCreationStrategy: BulletCreationStrategy, delay: number) {
            this.bulletCreationStrategy = bulletCreationStrategy
            this.delay = delay
      }

      get count(): number {
            return this.bullets.length
      }

      draw(ctx: CanvasRenderingContext2D): void {
            for (let bIx = 0; bIx < this.bullets.length; bIx++) {
                  // Remove bullet if it is off screen.
                  if (this.isBulletOffScreen(this.bullets[bIx])) {
                        this.bullets.splice(bIx, 1)
                        continue
                  }

                  this.bullets[bIx].draw(ctx)
            }
      }

      shoot(origin: Point): void {
            this.actualDelay--
            if (this.actualDelay <= 0) {
                  this.bullets.push(...this.bulletCreationStrategy.getBullets(origin))
                  this.actualDelay = this.delay
            }
      }

      isCollidingWith(enemies: Enemy[]): boolean {
            return this.bullets.some(bullet => {
                  for (let eIx = 0; eIx < enemies.length; eIx++) {
                        if (bullet.isCollidingWith(enemies[eIx])) {
                              enemies[eIx].reduceHitpoint(1)
                              this.bullets.splice(this.bullets.indexOf(bullet), 1)
                              return true
                        }
                  }

                  return false
            })
      }

      isBulletOffScreen(bullet: Bullet): boolean {
            // Optionally check if the bullet is off screen to the sides as well.
            return bullet.getPosition().y < 0
      }
}

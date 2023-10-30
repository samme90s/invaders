/**
 * @fileoverview Defines a controller that handles bullet instances and simulate their behaviour.
 * @author Samuel Svensson
 */

import { Dimension } from '../data-types/Dimension'
import { Point } from '../data-types/Point'
import { Vector } from '../data-types/Vector'
import { Enemy } from '../entities/enemy/Enemy'
import { Bullet } from './Bullet'

export class BulletController {
      private bullets: Bullet[] = []
      private bulletDelay: number = 1

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

      shoot(position: Point, delay: number): void {
            this.bulletDelay--
            if (this.bulletDelay <= 0) {
                  this.bullets.push(
                        new Bullet(
                              new Point(position.x, position.y),
                              new Dimension(2, 2),
                              new Vector(1.5, 1, 1)
                        )
                  )
                  this.bullets.push(
                        new Bullet(
                              new Point(position.x, position.y),
                              new Dimension(2, 2),
                              new Vector(1.5, 0, 1)
                        )
                  )
                  this.bullets.push(
                        new Bullet(
                              new Point(position.x, position.y),
                              new Dimension(2, 2),
                              new Vector(1.5, -1, 1)
                        )
                  )

                  this.bulletDelay = delay
            }
      }

      isCollidingWith(enemies: Enemy[]): boolean {
            return this.bullets.some(bullet => {
                  for (let eIx = 0; eIx < enemies.length; eIx++) {
                        if (bullet.isCollidingWith(enemies[eIx])) {
                              enemies[eIx].reduceHitpoints(1)
                              this.bullets.splice(this.bullets.indexOf(bullet), 1)
                              return true
                        }
                  }

                  return false
            })
      }

      isBulletOffScreen(bullet: Bullet): boolean {
            return bullet.position.y < 0
      }
}

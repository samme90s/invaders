/**
 * @fileoverview Defines a controller that handles bullet instances and simulate their behaviour.
 * @author Samuel Svensson
 */

import { Point } from '../data-types/Point'
import { Bullet } from './Bullet'

export class BulletController {
      private bullets: Bullet[] = []
      private bulletDelay: number = 0

      constructor() {}

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

      shoot(position: Point, speed: number, delay: number): void {
            this.bulletDelay--
            if (this.bulletDelay <= 0) {
                  this.bullets.push(new Bullet(position, speed))
                  this.bulletDelay = delay
            }
      }

      isBulletOffScreen(bullet: Bullet): boolean {
            return bullet.position.y < 0
      }
}

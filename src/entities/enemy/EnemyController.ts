/**
 * @fileoverview Defines a controller that handles enemy instances and simulate their behaviour.
 * @author Samuel Svensson
 */

import { Dimension } from '../../data-types/Dimension'
import { Point } from '../../data-types/Point'
import { Enemy } from './Enemy'

export class EnemyController {
      #enemies: Enemy[] = []

      constructor() {}

      get enemies(): Enemy[] {
            return Array.from(this.#enemies)
      }

      get count(): number {
            return this.#enemies.length
      }

      draw(ctx: CanvasRenderingContext2D): void {
            for (let eIx = 0; eIx < this.#enemies.length; eIx++) {
                  this.#enemies[eIx].draw(ctx)
            }
      }

      removeDeadEnemies(): void {
            for (let eIx = 0; eIx < this.#enemies.length; eIx++) {
                  if (this.#enemies[eIx].hitpoints <= 0) {
                        this.#enemies.splice(eIx, 1)
                  }
            }
      }

      generateEnemiesOnRandomPosition(amount: number, dimension: Dimension): void {
            for (let eIx = 0; eIx < amount; eIx++) {
                  const randomX = Math.floor(Math.random() * dimension.width)
                  const randomY = Math.floor(Math.random() * dimension.height)
                  const randomPoint = new Point(randomX, randomY)

                  this.#enemies.push(new Enemy(randomPoint, new Dimension(10, 10), 1, 1))
            }
      }
}

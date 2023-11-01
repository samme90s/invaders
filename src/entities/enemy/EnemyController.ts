/**
 * @fileoverview Defines a controller that handles enemy instances and simulate their behaviour.
 * @author Samuel Svensson
 */

import { Dimension } from '../../data-types/Dimension'
import { Hitpoint } from '../../data-types/Hitpoint'
import { Point } from '../../data-types/Point'
import { Player } from '../player/Player'
import { Enemy } from './Enemy'

export class EnemyController {
      private enemies: Enemy[] = []
      private spawnrate: number = 1

      constructor() {
            setInterval(() => this.increaseSpawnrate(), 2000)
      }

      getEnemies(): Enemy[] {
            return Array.from(this.enemies)
      }

      getEnemiesCount(): number {
            return this.enemies.length
      }

      draw(ctx: CanvasRenderingContext2D, clipSpace: Dimension, player: Player): void {
            this.spawnEnemies(clipSpace)

            for (let eIx = 0; eIx < this.enemies.length; eIx++) {
                  this.enemies[eIx].draw(ctx, player)
            }
      }

      removeDeadEnemies(): void {
            for (let eIx = 0; eIx < this.enemies.length; eIx++) {
                  if (this.enemies[eIx].getHitpoint().getAmount() <= 0) {
                        this.enemies.splice(eIx, 1)
                  }
            }
      }

      private increaseSpawnrate(): void {
            this.spawnrate++
      }

      private spawnEnemies(clipSpace: Dimension): void {
            while (this.enemies.length < this.spawnrate) {
                  this.enemies.push(
                        new Enemy(
                              this.generateRandomPointOutsideClipSpace(clipSpace, 200),
                              new Dimension(5, 5),
                              new Hitpoint(1),
                              1
                        )
                  )
            }
      }

      private generateRandomPointOutsideClipSpace(clipSpace: Dimension, maxOffset: number): Point {
            const randomOffset = Math.floor(Math.random() * maxOffset)
            const randomHeight = Math.floor(Math.random() * clipSpace.getHeight())
            const randomWidth = Math.floor(Math.random() * clipSpace.getWidth())
            const random = Math.floor(Math.random() * 4)
            if (random === 0) {
                  return new Point(randomWidth, -randomOffset) // top
            } else if (random === 1) {
                  return new Point(clipSpace.getWidth() + randomOffset, randomHeight) // right
            } else if (random === 2) {
                  return new Point(randomWidth, clipSpace.getHeight() + randomOffset) // bottom
            } else if (random === 3) {
                  return new Point(-randomOffset, randomHeight) // left
            }

            throw new Error('could not generate random point')
      }
}

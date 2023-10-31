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

      getEnemies(): Enemy[] {
            return Array.from(this.enemies)
      }

      getEnemiesCount(): number {
            return this.enemies.length
      }

      draw(ctx: CanvasRenderingContext2D, player: Player): void {
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

      generateEnemiesOnRandomPosition(amount: number, clipSpace: Dimension): void {
            for (let eIx = 0; eIx < amount; eIx++) {
                  const randomX = Math.floor(Math.random() * clipSpace.getWidth())
                  const randomY = Math.floor(Math.random() * clipSpace.getHeight())
                  const randomPoint = new Point(randomX, randomY)

                  this.enemies.push(
                        new Enemy(randomPoint, new Dimension(10, 10), new Hitpoint(1), 1)
                  )
            }
      }
}

/**
 * @fileoverview Defines a controller that handles enemy instances and simulate their behaviour.
 * @author Samuel Svensson
 */

import { ClipSpace } from '../../data/dimensions/ClipSpace'
import { Hitbox } from '../../data/dimensions/Hitbox'
import { Hitpoint } from '../../data/Hitpoint'
import { Point } from '../../data/Point'
import { Sprite } from '../../data/Sprite'
import { Player } from '../player/Player'
import { Enemy } from './Enemy'

export class EnemyController {
      private enemies: Enemy[] = []
      private spawnrate: number = 1

      /**
       * @param spawnrateInterval In millieseconds.
       */
      constructor(spawnrateInterval: number = 10000) {
            setInterval(() => this.increaseSpawnrate(), spawnrateInterval)
      }

      getEnemies(): Enemy[] {
            return Array.from(this.enemies)
      }

      getEnemiesCount(): number {
            return this.enemies.length
      }

      draw(ctx: CanvasRenderingContext2D, clipSpace: ClipSpace, player: Player): void {
            this.spawnEnemies(clipSpace)

            for (let eIx = 0; eIx < this.enemies.length; eIx++) {
                  this.enemies[eIx].draw(ctx, player)
            }
      }

      removeDeadEnemies(): void {
            for (let eIx = 0; eIx < this.enemies.length; eIx++) {
                  if (this.enemies[eIx].getHitpoint().getActual() <= 0) {
                        this.enemies.splice(eIx, 1)
                  }
            }
      }

      private increaseSpawnrate(): void {
            this.spawnrate++
      }

      private spawnEnemies(clipSpace: ClipSpace): void {
            while (this.enemies.length < this.spawnrate) {
                  this.enemies.push(
                        new Enemy(
                              new Hitbox(
                                    this.generateRandomPointOutsideClipSpace(clipSpace, 200),
                                    8,
                                    8
                              ),
                              new Sprite(new URL('../../../public/invader.png', import.meta.url)),
                              new Hitpoint(1, 0),
                              1
                        )
                  )
            }
      }

      private generateRandomPointOutsideClipSpace(clipSpace: ClipSpace, maxOffset: number): Point {
            const random = Math.floor(Math.random() * 4)
            if (random === 0) {
                  return this.generateRandomPointOnTopEdge(clipSpace, maxOffset)
            } else if (random === 1) {
                  return this.generateRandomPointOnRightEdge(clipSpace, maxOffset)
            } else if (random === 2) {
                  return this.generateRandomPointOnBottomEdge(clipSpace, maxOffset)
            } else if (random === 3) {
                  return this.generateRandomPointOnLeftEdge(clipSpace, maxOffset)
            }

            throw new Error('could not generate random point')
      }

      private generateRandomPointOnTopEdge(clipSpace: ClipSpace, maxOffset: number): Point {
            const randomOffset = Math.floor(Math.random() * maxOffset)
            const randomWidth = Math.floor(Math.random() * clipSpace.getWidth())
            return new Point(randomWidth, -randomOffset)
      }

      private generateRandomPointOnRightEdge(clipSpace: ClipSpace, maxOffset: number): Point {
            const randomOffset = Math.floor(Math.random() * maxOffset)
            const randomHeight = Math.floor(Math.random() * clipSpace.getHeight())
            return new Point(clipSpace.getWidth() + randomOffset, randomHeight)
      }

      private generateRandomPointOnBottomEdge(clipSpace: ClipSpace, maxOffset: number): Point {
            const randomOffset = Math.floor(Math.random() * maxOffset)
            const randomWidth = Math.floor(Math.random() * clipSpace.getWidth())
            return new Point(randomWidth, clipSpace.getHeight() + randomOffset)
      }

      private generateRandomPointOnLeftEdge(clipSpace: ClipSpace, maxOffset: number): Point {
            const randomOffset = Math.floor(Math.random() * maxOffset)
            const randomHeight = Math.floor(Math.random() * clipSpace.getHeight())
            return new Point(-randomOffset, randomHeight)
      }
}

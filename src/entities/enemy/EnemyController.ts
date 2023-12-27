/**
 * @fileoverview Defines a controller that handles
 * enemy instances and simulate their behaviour.
 * @author Samuel Svensson
 */

import { Enemy } from './Enemy'
import { EnemySpawnStrategy } from './strategy/spawn/EnemySpawnStrategy'

export class EnemyController {
      private enemies: Enemy[] = []
      private spawnStrategy: EnemySpawnStrategy
      private spawnInterval: NodeJS.Timeout

      constructor(
            spawnStrategy: EnemySpawnStrategy,
            spawnIntervalDelay: number
      ) {
            this.spawnStrategy = spawnStrategy
            this.spawnInterval = setInterval(
                  () => this.spawnStrategy.spawnEnemies(this.enemies),
                  spawnIntervalDelay
            )
      }

      getEnemies(): Enemy[] {
            return Array.from(this.enemies)
      }

      removeDeadEnemies(): void {
            for (let eIx = 0; eIx < this.enemies.length; eIx++) {
                  if (this.enemies[eIx].getHitpoint().isDead()) {
                        this.enemies.splice(eIx, 1)
                  }
            }
      }

      clearSpawnInterval(): void {
            clearInterval(this.spawnInterval)
      }
}

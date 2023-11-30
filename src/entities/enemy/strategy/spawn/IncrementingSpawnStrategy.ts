/**
 * @fileoverview Spawn strategy that spawns enemies in a linear fashion.
 * @author Samuel Svensson
 */

import { Enemy } from '../../Enemy'
import { EnemyFactory } from '../../factory/EnemyFactory'
import { EnemySpawnPointStrategy } from '../spawnpoint/EnemySpawnPointStrategy'
import { EnemySpawnStrategy } from './EnemySpawnStrategy'

export class IncrementingSpawnStrategy implements EnemySpawnStrategy {
      private spawnPointStrategy: EnemySpawnPointStrategy
      private maxAmount: number

      /**
       * @param incrementDelay In milliseconds.
       */
      constructor(
            spawnPointStrategy: EnemySpawnPointStrategy,
            initialAmount: number
      ) {
            this.spawnPointStrategy = spawnPointStrategy
            this.maxAmount = initialAmount
      }

      spawnEnemies(enemies: Enemy[]): void {
            while (enemies.length < this.maxAmount) {
                  enemies.push(
                        EnemyFactory.createBasicEnemy(
                              this.spawnPointStrategy.getSpawnPoint()
                        )
                  )
            }

            // Side effect but an expected one.
            this.incrementMaxAmount()
      }

      private incrementMaxAmount(): void {
            this.maxAmount++
      }
}

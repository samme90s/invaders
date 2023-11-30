/**
 * @fileoverview Spawn strategy that spawns enemies in a linear fashion.
 * @author Samuel Svensson
 */

import { Hitbox } from '../../../data/dimensions/Hitbox'
import { Hitpoint } from '../../../data/Hitpoint'
import { Speed } from '../../../data/Speed'
import { Sprite } from '../../../data/Sprite'
import { Enemy } from '../Enemy'
import { EnemySpawnPointStrategy } from './EnemySpawnPointStrategy'
import { EnemySpawnStrategy } from './EnemySpawnStrategy'

export class IncrementingSpawnStrategy implements EnemySpawnStrategy {
      private spawnPointStrategy: EnemySpawnPointStrategy
      private maxAmount: number

      /**
       * @param incrementDelay In milliseconds.
       */
      constructor(
            spawnPointStrategy: EnemySpawnPointStrategy,
            initialAmount: number,
      ) {
            this.spawnPointStrategy = spawnPointStrategy
            this.maxAmount = initialAmount
      }

      spawnEnemies(enemies: Enemy[]): void {
            while (enemies.length < this.maxAmount) {
                  enemies.push(
                        new Enemy(
                              new Hitbox(
                                    this.spawnPointStrategy.getSpawnPoint(),
                                    8,
                                    8
                              ),
                              new Sprite(
                                    new URL(
                                          '../../../../public/invader.png',
                                          import.meta.url
                                    )
                              ),
                              new Hitpoint(1, 0, 10),
                              new Speed(1)
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

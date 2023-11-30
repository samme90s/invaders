/**
 * @fileoverview Defines a strategy for spawning enemies.
 * @author Samuel Svensson
 */

import { Enemy } from '../../Enemy'

export interface EnemySpawnStrategy {
      spawnEnemies(enemies: Enemy[]): void
}

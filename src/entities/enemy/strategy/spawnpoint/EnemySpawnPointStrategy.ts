/**
 * @fileoverview Defines a strategy for selecting a spawn point for an enemy.
 * @author Samuel Svensson
 */

import { Vector2 } from '../../../../data/Vector2'

export interface EnemySpawnPointStrategy {
      get(): Vector2
}

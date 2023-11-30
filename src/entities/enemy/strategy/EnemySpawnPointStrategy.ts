/**
 * @fileoverview Defines a strategy for selecting a spawn point for an enemy.
 * @author Samuel Svensson
 */

import { Point } from '../../../data/Point'

export interface EnemySpawnPointStrategy {
      getSpawnPoint(): Point
}

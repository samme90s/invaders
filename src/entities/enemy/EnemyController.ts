/**
 * @fileoverview Defines a controller that handles
 * enemy instances and simulate their behaviour.
 * @author Samuel Svensson
 */

import { Enemy } from './Enemy'

export class EnemyController {
      private enemies: Enemy[] = []

      constructor() {}

      getEnemies(): Enemy[] {
            return Array.from(this.enemies)
      }

      removeDeadEnemies(): void {
            for (let eIx = 0; eIx < this.enemies.length; eIx++) {
                  if (this.enemies[eIx].hitpoint.isDead()) {
                        this.enemies.splice(eIx, 1)
                  }
            }
      }
}

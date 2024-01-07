/**
 * @fileoverview Defines a controller that handles
 * enemy instances and simulate their behavior.
 * @author Samuel Svensson
 */

import { Player } from '../player/Player'
import { Enemy } from './Enemy'

export class EnemyController {
      private _enemies: Enemy[]

      /**
       * @param enemies Array of enemies.
       * Default value is an empty array.
       */
      constructor(enemies: Enemy[] = []) {
            this._enemies = enemies
      }

      get enemies(): Enemy[] {
            return Array.from(this._enemies)
      }

      update(player: Player): void {
            for (let eIx = 0; eIx < this._enemies.length; eIx++) {
                  this._enemies[eIx].moveTowards(player)
            }
      }

      addEnemies(enemies: Enemy[]): void {
            for (let eIx = 0; eIx < enemies.length; eIx++) {
                  this._enemies.push(enemies[eIx])
            }
      }

      removeDeadEnemies(): void {
            for (let eIx = 0; eIx < this._enemies.length; eIx++) {
                  if (this._enemies[eIx].hitpoint.isDead()) {
                        this._enemies.splice(eIx, 1)
                  }
            }
      }
}

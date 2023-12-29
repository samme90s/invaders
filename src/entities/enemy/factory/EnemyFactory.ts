/**
 * @fileoverview Represents a factory for creating different types of enemies.
 * @author Samuel Svensson
 */

import { Damage } from '../../../data/Damage'
import { Hitbox } from '../../../data/dimensions/Hitbox'
import { Hitpoint } from '../../../data/Hitpoint'
import { Speed } from '../../../data/Speed'
import { Vector2 } from '../../../data/Vector2'
import { Enemy } from '../Enemy'

export class EnemyFactory {
      static createBasicEnemy(point: Vector2): Enemy {
            return new Enemy(
                  new Hitbox(point, new Vector2(0, 0), 1, 1),
                  new Hitpoint(1),
                  new Speed(1),
                  new Damage(1)
            )
      }
}

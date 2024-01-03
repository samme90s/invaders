/**
 * @fileoverview Represents a factory for creating different types of enemies.
 * @author Samuel Svensson
 */

import { Damage } from '../../../data/Damage'
import { Dimension } from '../../../data/dimensions/Dimension'
import { Hitpoint } from '../../../data/Hitpoint'
import { Speed } from '../../../data/Speed'
import { Vector2 } from '../../../data/Vector2'
import { Enemy } from '../Enemy'

export class EnemyFactory {
      static createBasicEnemy(point: Vector2): Enemy {
            return new Enemy(
                  point,
                  new Vector2(0, 0),
                  new Dimension(1, 1),
                  new Hitpoint(1),
                  new Speed(1),
                  new Damage(1)
            )
      }
}

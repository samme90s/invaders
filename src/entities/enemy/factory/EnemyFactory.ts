/**
 * @fileoverview Represents a factory for creating different types of enemies.
 * @author Samuel Svensson
 */

import { Hitbox } from '../../../data/dimensions/Hitbox'
import { Hitpoint } from '../../../data/Hitpoint'
import { Point } from '../../../data/Point'
import { Speed } from '../../../data/Speed'
import { Sprite } from '../../../data/Sprite'
import { Enemy } from '../Enemy'

export class EnemyFactory {
      static createBasicEnemy(point: Point): Enemy {
            return new Enemy(
                  new Hitbox(point, 8, 8),
                  new Sprite(
                        new URL(
                              '../../../../public/invader.png',
                              import.meta.url
                        )
                  ),
                  new Hitpoint(1, 0, 10),
                  new Speed(1)
            )
      }
}

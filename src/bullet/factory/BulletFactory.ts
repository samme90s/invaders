/**
 * @fileoverview Represents a factory for creating different types of bullets.
 * @author Samuel Svensson
 */

import { Hitbox } from '../../data/dimensions/Hitbox'
import { Speed } from '../../data/Speed'
import { Vector2 } from '../../data/Vector2'
import { Bullet } from '../Bullet'

export class BulletFactory {
      static createFastBullet(point: Vector2): Bullet {
            return new Bullet(
                  new Hitbox(point, new Vector2(0, 1), 1, 1),
                  new Speed(5)
            )
      }

      // Add more bullet variations here...
}

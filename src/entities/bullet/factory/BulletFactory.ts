/**
 * @fileoverview Represents a factory for creating different types of bullets.
 * @author Samuel Svensson
 */

import { Damage } from '../../../data/Damage'
import { Dimension } from '../../../data/dimensions/Dimension'
import { Hitpoint } from '../../../data/Hitpoint'
import { Interval } from '../../../data/Interval'
import { Speed } from '../../../data/Speed'
import { Vector2 } from '../../../data/Vector2'
import { Bullet } from '../Bullet'

export class BulletFactory {
      static createFastBullet(point: Vector2): Bullet {
            return new Bullet(
                  point,
                  new Vector2(0, 1),
                  new Dimension(1, 1),
                  new Hitpoint(1),
                  new Speed(5),
                  new Damage(1),
                  new Interval(100)
            )
      }

      // Add more bullet variations here...
}

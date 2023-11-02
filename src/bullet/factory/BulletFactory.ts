/**
 * @fileoverview Represents a factory for creating different types of bullets.
 * @author Samuel Svensson
 */

import { Angle } from '../../data-types/Angle'
import { Point } from '../../data-types/Point'
import { PolarVector } from '../../data-types/PolarVector'
import { Bullet } from '../Bullet'

export class BulletFactory {
      static createFastBullet(origin: Point, angle: Angle): Bullet {
            return new Bullet(new Point(origin.x, origin.y), new PolarVector(10, angle))
      }

      // Add more bullet variations here...
}

/**
 * @fileoverview Represents a factory for creating different types of bullets.
 * @author Samuel Svensson
 */

import { Angle } from '../../data/angles/Angle'
import { Point } from '../../data/Point'
import { PolarVector } from '../../data/vectors/PolarVector'
import { Bullet } from '../Bullet'

export class BulletFactory {
      static createFastBullet(origin: Point, angle: Angle): Bullet {
            return new Bullet(new Point(origin.x, origin.y), new PolarVector(10, angle))
      }

      // Add more bullet variations here...
}

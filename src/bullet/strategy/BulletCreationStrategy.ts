/**
 * @fileoverview Represents an interface for bullet creation strategies.
 * @author Samuel Svensson
 */

import { Angle } from '../../data-types/Angle'
import { Point } from '../../data-types/Point'
import { Bullet } from '../Bullet'

export interface BulletCreationStrategy {
      getBullets(origin: Point, originAngle: Angle): Bullet[]
}

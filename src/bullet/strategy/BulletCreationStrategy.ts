/**
 * @fileoverview Represents an interface for bullet creation strategies.
 * @author Samuel Svensson
 */

import { Angle } from '../../data/angles/Angle'
import { Point } from '../../data/Point'
import { Bullet } from '../Bullet'

export interface BulletCreationStrategy {
      getBullets(origin: Point, originAngle: Angle): Bullet[]
}

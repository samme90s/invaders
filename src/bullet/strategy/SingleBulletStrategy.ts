/**
 * @fileoverview Represents a concrete bullet creation strategy that creates
 * a single bullet.
 * @author Samuel Svensson
 */

import { Angle } from '../../data/angles/Angle'
import { Point } from '../../data/Point'
import { Bullet } from '../Bullet'
import { BulletFactory } from '../factory/BulletFactory'
import { BulletCreationStrategy } from './BulletCreationStrategy'

export class SingleBulletStrategy implements BulletCreationStrategy {
      getBullets(origin: Point, originAngle: Angle): Bullet[] {
            return [BulletFactory.createFastBullet(origin, originAngle)]
      }
}
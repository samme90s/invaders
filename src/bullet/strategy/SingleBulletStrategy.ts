/**
 * @fileoverview Represents a concrete bullet creation strategy that creates
 * a single bullet.
 * @author Samuel Svensson
 */

import { Vector2 } from '../../data/Vector2'
import { Bullet } from '../Bullet'
import { BulletFactory } from '../factory/BulletFactory'
import { BulletCreationStrategy } from './BulletCreationStrategy'

export class SingleBulletStrategy implements BulletCreationStrategy {
      get(point: Vector2): Bullet[] {
            return [BulletFactory.createFastBullet(point)]
      }
}

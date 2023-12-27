/**
 * @fileoverview Represents an interface for bullet creation strategies.
 * @author Samuel Svensson
 */

import { Vector2 } from '../../data/Vector2'
import { Bullet } from '../Bullet'

export interface BulletCreationStrategy {
      /**
       * @param point The point where the bullet is created.
       * @returns An array of bullet(s).
       */
      get(point: Vector2): Bullet[]
}

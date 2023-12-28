/**
 * @fileoverview Defines the size of the clip space.
 * @author Samuel Svensson
 */

import { Vector2 } from '../Vector2'
import { Dimension } from './Dimension'
import { Hitbox } from './Hitbox'

export class ClipSpace extends Dimension {
      constructor(width: number, height: number) {
            super(width, height)
      }

      getOrigo(): Vector2 {
            return new Vector2(this.width / 2, this.height / 2)
      }

      isOutside(hitbox: Hitbox): boolean {
            return (
                  this.isOutsideTop(hitbox) ||
                  this.isOutsideRight(hitbox) ||
                  this.isOutsideDown(hitbox) ||
                  this.isOutsideLeft(hitbox)
            )
      }

      isOutsideTop(hitbox: Hitbox): boolean {
            return hitbox.getPoint().y < 0
      }

      isOutsideRight(hitbox: Hitbox): boolean {
            return hitbox.getPoint().x > this.width - hitbox.getWidth()
      }

      isOutsideDown(hitbox: Hitbox): boolean {
            return hitbox.getPoint().y > this.height - hitbox.getHeight()
      }

      isOutsideLeft(hitbox: Hitbox): boolean {
            return hitbox.getPoint().x < 0
      }
}

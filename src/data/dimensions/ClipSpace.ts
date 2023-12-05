/**
 * @fileoverview Defines the size of the clip space.
 * @author Samuel Svensson
 */

import { Dimension } from './Dimension'
import { Hitbox } from './Hitbox'

export class ClipSpace extends Dimension {
      constructor(width: number, height: number) {
            super(width, height)
      }

      // Use methods below?
      isOutside(hitbox: Hitbox): boolean {
            return (
                  hitbox.getPosition().y > this.height ||
                  hitbox.getPosition().x > this.width ||
                  hitbox.getPosition().y < 0 ||
                  hitbox.getPosition().x < 0
            )
      }

      isOutsideTop(hitbox: Hitbox): boolean {
            return hitbox.getPosition().y < 0
      }

      isOutsideLeft(hitbox: Hitbox): boolean {
            return hitbox.getPosition().x < 0
      }

      isOutsideDown(hitbox: Hitbox): boolean {
            return hitbox.getPosition().y > this.height - hitbox.getHeight()
      }

      isOutsideRight(hitbox: Hitbox): boolean {
            return hitbox.getPosition().x > this.width - hitbox.getWidth()
      }
}

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

      isOutside(hitbox: Hitbox) {
            return (
                  hitbox.getPosition().y > this.height ||
                  hitbox.getPosition().x > this.width ||
                  hitbox.getPosition().y < 0 ||
                  hitbox.getPosition().x < 0
            )
      }
}

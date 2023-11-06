/**
 * @fileoverview Defines a bullet.
 * @author Samuel Svensson
 */

import { Hitbox } from '../data/dimensions/Hitbox'
import { Point } from '../data/Point'
import { CartesianVector } from '../data/vectors/CartesianVector'
import { PolarVector } from '../data/vectors/PolarVector'

export class Bullet {
      private hitbox: Hitbox
      private vector: CartesianVector

      constructor(position: Point, vector: PolarVector) {
            // This may be odd because the vector is already normalized
            // and multiplied when created in as a PolarVector.
            this.vector = vector.toCartesian()

            // Variable hitbox depending on the vector.
            // Maybe use this as a default if no hitbox is provided?
            // Otherwise check bullet angle and set hitbox accordingly
            // based of the hitbox passed in.
            this.hitbox = new Hitbox(
                  position,
                  Math.max(1, Math.abs(this.vector.getX())),
                  Math.max(1, Math.abs(this.vector.getY()))
            )

            // Add some offset depending on the vector.
      }

      draw(ctx: CanvasRenderingContext2D): void {
            ctx.fillStyle = '#f00'
            ctx.fillRect(
                  this.hitbox.getTopLeftPosition().x,
                  this.hitbox.getTopLeftPosition().y,
                  this.hitbox.getWidth(),
                  this.hitbox.getHeight()
            )

            this.hitbox.getMutablePosition().x += this.vector.getX()
            this.hitbox.getMutablePosition().y -= this.vector.getY()
      }

      getHitbox(): Hitbox {
            return this.hitbox.from()
      }

      isCollidingWith(hitbox: Hitbox): boolean {
            return this.hitbox.isCollidingWith(hitbox)
      }
}

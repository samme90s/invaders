/**
 * @fileoverview Represents an angle in radians.
 * @author Samuel Svensson
 */

import { Angle } from './Angle'

export class RadianAngle {
      private angle: number

      /**
       * @param angle In radians. Will be normalized to the range 0 - 2π.
       */
      constructor(angle: number) {
            this.setAngle(angle)
      }

      getValue(): number {
            return this.angle
      }

      /**
       * Calculates the modulus of the angle with 2π to handle angles
       * greater than 2π. If the angle is negative, it adds 2π to make it
       * positive, then takes the modulus again to ensure the result is within the
       * range of 0 to 2π.
       */
      setAngle(angle: number): void {
            this.angle = ((angle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)
      }

      toDegrees(): Angle {
            return new Angle(this.angle * (180 / Math.PI))
      }
}

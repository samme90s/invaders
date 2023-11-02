/**
 * @fileoverview Represents an angle in degrees.
 * @author Samuel Svensson
 */

import { RadianAngle } from './RadianAngle'

export class Angle {
      private angle: number

      /**
       * @param angle In degrees. Will be normalized to the range 0 - 359.
       */
      constructor(angle: number) {
            this.setAngle(angle)
      }

      getValue(): number {
            return this.angle
      }

      /**
       * Calculates the modulus of the angle with 360 to handle angles
       * greater than 360 degrees. If the angle is negative, it adds 360 to make it
       * positive, then takes the modulus again to ensure the result is within the
       * range of 0 to 359 degrees.
       */
      setAngle(angle: number): void {
            this.angle = ((angle % 360) + 360) % 360
      }

      toRadians(): RadianAngle {
            return new RadianAngle(this.angle * (Math.PI / 180))
      }
}

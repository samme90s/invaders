/**
 * @fileoverview Defines a vector.
 * @author Samuel Svensson
 */

export class Vector {
      private magnitude: number = 0
      private angle: number = 0

      constructor(magnitude: number, angle: number) {
            if (magnitude <= 0) {
                  throw new RangeError('magnitude must be positive')
            }

            if (angle < 0 || angle > 2 * Math.PI) {
                  throw new RangeError('angle must be between 0 and 2*PI')
            }

            this.magnitude = magnitude
            this.angle = angle
      }

      static angleToRadians(angle: number): number {
            return angle * (Math.PI / 180)
      }

      get xMagnitude(): number {
            return this.magnitude * Math.cos(this.angle)
      }

      get yMagnitude(): number {
            return this.magnitude * Math.sin(this.angle)
      }
}

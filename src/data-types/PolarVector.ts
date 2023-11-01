/**
 * @fileoverview Defines a vector in Polar coordinates.
 * @author Samuel Svensson
 */

import { CartesianVector } from './CartesianVector'

export class PolarVector {
      private magnitude: number
      private angle: number

      constructor(magnitude: number, angle: number) {
            if (magnitude < 0) {
                  throw new RangeError('magnitude must be positive or zero')
            }

            if (angle < 0 || angle > 360) {
                  throw new RangeError('angle must be between 0 and 360')
            }

            angle = this.angleToRadians(angle)

            // This could be removed, but I'm keeping it to make sure
            // that the angle error handling is correct.
            if (angle < 0 || angle > 2 * Math.PI) {
                  throw new RangeError('angle must be between 0 and 2*PI')
            }

            this.magnitude = magnitude
            this.angle = angle
      }

      toCartesian(): CartesianVector {
            const x = this.magnitude * Math.cos(this.angle)
            const y = this.magnitude * Math.sin(this.angle)
            return new CartesianVector(x, y)
      }

      private angleToRadians(angle: number): number {
            return angle * (Math.PI / 180)
      }
}

/**
 * @fileoverview Defines a vector in Polar coordinates.
 * @author Samuel Svensson
 */

import { Angle } from '../angles/Angle'
import { CartesianVector } from './CartesianVector'
import { RadianAngle } from '../angles/RadianAngle'

export class PolarVector {
      private magnitude: number
      private angle: RadianAngle

      constructor(magnitude: number, angle: Angle) {
            if (magnitude < 0) {
                  throw new RangeError('magnitude must be positive or zero')
            }

            this.angle = angle.toRadians()
            this.magnitude = magnitude
      }

      toCartesian(): CartesianVector {
            const x = this.magnitude * Math.cos(this.angle.getValue())
            const y = this.magnitude * Math.sin(this.angle.getValue())
            return new CartesianVector(x, y)
      }
}

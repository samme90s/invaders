/**
 * @fileoverview Defines a vector in Cartesian coordinates.
 * @author Samuel Svensson
 */

import { RadianAngle } from '../angles/RadianAngle'
import { PolarVector } from './PolarVector'

export class CartesianVector {
      private x: number
      private y: number

      constructor(x: number, y: number) {
            this.x = x
            this.y = y
      }

      getX(): number {
            return this.x
      }

      getY(): number {
            return this.y
      }

      toPolar(): PolarVector {
            const magnitude = Math.sqrt(this.x ** 2 + this.y ** 2)
            const angle = new RadianAngle(
                  Math.atan2(this.y, this.x)
            ).toDegrees()
            return new PolarVector(magnitude, angle)
      }

      normalize(): CartesianVector {
            const magnitude = Math.sqrt(this.x ** 2 + this.y ** 2)
            return new CartesianVector(this.x / magnitude, this.y / magnitude)
      }

      multiply(scalar: number): CartesianVector {
            return new CartesianVector(this.x * scalar, this.y * scalar)
      }
}

/**
 * @fileoverview Defines a vector in Cartesian coordinates.
 * @author Samuel Svensson
 */

import { RadianAngle } from '../angles/RadianAngle'
import { PolarVector } from './PolarVector'

export class CartesianVector {
      private inversionCooldown: number = 0
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

      invert(): void {
            this.inversionCooldown = 10
            this.x = -this.x
            this.y = -this.y
      }

      onInversionCooldown(): boolean {
            return this.inversionCooldown > 0
      }

      reduceInversionCooldown(): void {
            this.inversionCooldown--
      }

      toPolar(): PolarVector {
            const angle = new RadianAngle(
                  Math.atan2(this.y, this.x)
            ).toDegrees()
            return new PolarVector(this.getMagnitude(), angle)
      }

      normalize(): CartesianVector {
            return new CartesianVector(
                  this.x / this.getMagnitude(),
                  this.y / this.getMagnitude()
            )
      }

      private getMagnitude(): number {
            return Math.sqrt(this.x ** 2 + this.y ** 2)
      }

      multiply(scalar: number): CartesianVector {
            return new CartesianVector(this.x * scalar, this.y * scalar)
      }
}

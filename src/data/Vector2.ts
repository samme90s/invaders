/**
 * @fileoverview Defines a two dimensional vector in Cartesian
 * coordinates representing a point and direction in space.
 * @author Samuel Svensson
 */

import { RadianAngle } from './angles/RadianAngle'

export class Vector2 {
      x: number
      y: number

      constructor(x: number, y: number) {
            this.x = x
            this.y = y
      }

      from(): Vector2 {
            return new Vector2(this.x, this.y)
      }

      add(other: Vector2): Vector2 {
            return new Vector2(this.x + other.x, this.y + other.y)
      }

      subtract(other: Vector2): Vector2 {
            return new Vector2(this.x - other.x, this.y - other.y)
      }

      angleTo(other: Vector2): RadianAngle {
            return new RadianAngle(
                  Math.acos(
                        this.dotProduct(other) /
                              (this.magnitude() * other.magnitude())
                  )
            )
      }

      directionTo(other: Vector2): Vector2 {
            return other.subtract(this).normalize()
      }

      dotProduct(other: Vector2): number {
            return this.x * other.x + this.y * other.y
      }

      multiply(scalar: number): Vector2 {
            return new Vector2(this.x * scalar, this.y * scalar)
      }

      magnitude(): number {
            return Math.sqrt(this.x ** 2 + this.y ** 2)
      }

      normalize(): Vector2 {
            return this.divide(this.magnitude())
      }

      private divide(scalar: number): Vector2 {
            return new Vector2(this.x / scalar, this.y / scalar)
      }
}

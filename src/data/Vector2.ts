/**
 * @fileoverview Defines a two dimensional vector in Cartesian
 * coordinates representing a point and direction in space.
 * @author Samuel Svensson
 */

import { RadianAngle } from './angles/RadianAngle'

export class Vector2 {
      private _x: number
      private _y: number

      constructor(x: number, y: number) {
            this._x = x
            this._y = y
      }

      get x(): number {
            return this._x
      }

      get y(): number {
            return this._y
      }

      from(): Vector2 {
            return new Vector2(this._x, this._y)
      }

      move(direction: Vector2, scalar: number): void {
            const moved = this.add(direction.multiply(scalar))
            this._x = moved.x
            this._y = moved.y
      }

      add(other: Vector2): Vector2 {
            return new Vector2(this._x + other.x, this._y + other.y)
      }

      multiply(scalar: number): Vector2 {
            return new Vector2(this._x * scalar, this._y * scalar)
      }

      /**
       * Normalizes the vector and sets each respective coordinate.
       */
      direction(direction: Vector2): void {
            const normalized = direction.normalize()
            this._x = normalized.x
            this._y = normalized.y
      }

      directionTo(other: Vector2): Vector2 {
            return other.subtract(this).normalize()
      }

      subtract(other: Vector2): Vector2 {
            return new Vector2(this._x - other.x, this._y - other.y)
      }

      normalize(): Vector2 {
            return this.divide(this.magnitude())
      }

      private divide(scalar: number): Vector2 {
            return new Vector2(this._x / scalar, this._y / scalar)
      }

      angleTo(other: Vector2): RadianAngle {
            return new RadianAngle(
                  Math.acos(
                        this.dotProduct(other) /
                              (this.magnitude() * other.magnitude())
                  )
            )
      }

      dotProduct(other: Vector2): number {
            return this._x * other.x + this._y * other.y
      }

      magnitude(): number {
            return Math.sqrt(this._x ** 2 + this._y ** 2)
      }
}

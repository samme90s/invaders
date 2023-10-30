/**
 * @fileoverview Represents an abstract entity.
 * @author Samuel Svensson
 */

import { Dimension } from '../data-types/Dimension'
import { Point } from '../data-types/Point'

export abstract class Entity {
      protected _position: Point
      protected _dimension: Dimension
      protected _hitpoints: number
      protected _speed: number = 1

      constructor(position: Point, dimension: Dimension, hitpoints: number, speed: number) {
            this._position = position
            this._dimension = dimension
            this._hitpoints = hitpoints
            this._speed = speed
      }

      get position(): Point {
            return new Point(this._position.x, this._position.y)
      }

      get dimension(): Dimension {
            return new Dimension(this._dimension.width, this._dimension.height)
      }

      get hitpoints(): number {
            return this._hitpoints
      }

      reduceHitpoints(amount: number): void {
            this._hitpoints -= amount
      }

      abstract draw(ctx: CanvasRenderingContext2D, bounds: Dimension): void
}

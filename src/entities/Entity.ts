/**
 * @fileoverview Represents an abstract entity.
 * @author Samuel Svensson
 */

import { Dimension } from '../data/dimensions/Dimension'
import { Hitpoint } from '../data/Hitpoint'
import { Speed } from '../data/Speed'
import { Vector2 } from '../data/Vector2'

export abstract class Entity {
      protected _point: Vector2
      protected _direction: Vector2
      protected _dimension: Dimension
      protected _hitpoint: Hitpoint
      protected speed: Speed

      constructor(
            point: Vector2,
            direction: Vector2,
            dimension: Dimension,
            hitpoint: Hitpoint,
            speed: Speed
      ) {
            this._point = point
            this._direction = direction
            this._dimension = dimension
            this._hitpoint = hitpoint
            this.speed = speed
      }

      /**
       * @returns Immutable object.
       */
      get point(): Vector2 {
            return this._point.from()
      }

      /**
       * @returns Immutable object.
       */
      get direction(): Vector2 {
            return this._direction.from()
      }

      get dimension(): Dimension {
            return this._dimension
      }

      get hitpoint(): Hitpoint {
            return this._hitpoint
      }

      isCollidingWith(entity: Entity): boolean {
            return (
                  this.isCollidingWithTopEdge(entity) &&
                  this.isCollidingWithRightEdge(entity) &&
                  this.isCollidingWithBottomEdge(entity) &&
                  this.isCollidingWithLeftEdge(entity)
            )
      }

      private isCollidingWithTopEdge(entity: Entity): boolean {
            return (
                  this._point.y - this.dimension.height / 2 <=
                  entity.point.y + entity.dimension.height / 2
            )
      }

      private isCollidingWithRightEdge(entity: Entity): boolean {
            return (
                  this._point.x + this.dimension.width / 2 >=
                  entity.point.x - entity.dimension.width / 2
            )
      }

      private isCollidingWithBottomEdge(entity: Entity): boolean {
            return (
                  this._point.y + this.dimension.height / 2 >=
                  entity.point.y - entity.dimension.height / 2
            )
      }

      private isCollidingWithLeftEdge(entity: Entity): boolean {
            return (
                  this._point.x - this.dimension.width / 2 <=
                  entity.point.x + entity.dimension.width / 2
            )
      }

      protected move(): void {
            this._point.move(this._direction, this.speed.get())
      }
}

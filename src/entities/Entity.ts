/**
 * @fileoverview Represents an abstract entity.
 * @author Samuel Svensson
 */

import { Dimension } from '../data-types/Dimension'
import { Hitpoint } from '../data-types/Hitpoint'
import { Point } from '../data-types/Point'

export abstract class Entity {
      protected position: Point
      protected dimension: Dimension
      protected hitpoint: Hitpoint
      protected speed: number = 1

      constructor(position: Point, dimension: Dimension, hitpoint: Hitpoint, speed: number) {
            this.position = position
            this.dimension = dimension
            this.hitpoint = hitpoint
            this.speed = speed
      }

      getPosition(): Point {
            return new Point(this.position.x, this.position.y)
      }

      getDimension(): Dimension {
            return new Dimension(this.dimension.getWidth(), this.dimension.getHeight())
      }

      getHitpoint(): Hitpoint {
            return new Hitpoint(this.hitpoint.getAmount())
      }

      reduceHitpoint(amount: number): void {
            this.hitpoint.reduce(amount)
      }

      // Do something about this abstract method:
      // abstract draw(ctx: CanvasRenderingContext2D): void
}

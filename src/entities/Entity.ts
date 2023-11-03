/**
 * @fileoverview Represents an abstract entity.
 * @author Samuel Svensson
 */

import { Dimension } from '../data/Dimension'
import { Hitpoint } from '../data/Hitpoint'
import { Point } from '../data/Point'

export abstract class Entity {
      protected position: Point
      protected dimension: Dimension
      protected hitpoint: Hitpoint
      protected speed: number = 1

      constructor(position: Point, dimension: Dimension, hitpoint: Hitpoint, speed: number) {
            if (this.speed < 0) {
                  throw new Error('speed must be positive or zero')
            }

            this.position = position
            this.dimension = dimension
            this.hitpoint = hitpoint
            this.speed = speed
      }

      getPosition(): Point {
            return this.position.from()
      }

      getDimension(): Dimension {
            return this.dimension.from()
      }

      getHitpoint(): Hitpoint {
            return this.hitpoint.from()
      }

      reduceHitpoint(amount: number): void {
            this.hitpoint.reduce(amount)
      }

      timeoutHitpoint(ticks: number): void {
            this.hitpoint.setTimeout(ticks)
      }
}

/**
 * @fileoverview Defines the size of the clip space.
 * @author Samuel Svensson
 */

import { Entity } from '../../entities/Entity'
import { Vector2 } from '../Vector2'
import { Dimension } from './Dimension'

export class ClipSpace extends Dimension {
      constructor(width: number, height: number) {
            super(width, height)
      }

      getOrigo(): Vector2 {
            return new Vector2(this.width / 2, this.height / 2)
      }

      isOutside(entity: Entity): boolean {
            return (
                  this.isOutsideTop(entity) ||
                  this.isOutsideRight(entity) ||
                  this.isOutsideDown(entity) ||
                  this.isOutsideLeft(entity)
            )
      }

      isOutsideTop(entity: Entity): boolean {
            return entity.point.y < 0
      }

      isOutsideRight(entity: Entity): boolean {
            return entity.point.x > this.width - entity.dimension.width
      }

      isOutsideDown(entity: Entity): boolean {
            return entity.point.y > this.height - entity.dimension.height
      }

      isOutsideLeft(entity: Entity): boolean {
            return entity.point.x < 0
      }
}

/**
 * @fileoverview Defines a hitbox that can be used to detect
 * collisions between two objects in a two dimensional space.
 * @author Samuel Svensson
 */

import { Speed } from '../Speed'
import { Vector2 } from '../Vector2'
import { Dimension } from './Dimension'

export class Hitbox extends Dimension {
      private point: Vector2
      private direction: Vector2

      constructor(
            point: Vector2,
            direction: Vector2,
            width: number,
            height: number
      ) {
            super(width, height)
            this.point = point.from()
            this.direction = direction.from()
      }

      from(): Hitbox {
            return new Hitbox(
                  this.point,
                  this.direction,
                  this.width,
                  this.height
            )
      }

      move(speed: Speed): void {
            this.point = this.point.add(this.direction.multiply(speed.get()))
      }

      /**
       * @returns Immutable point.
       */
      getPoint(): Vector2 {
            return this.point.from()
      }

      getTopLeftPoint(): Vector2 {
            return new Vector2(
                  this.point.x - this.width / 2,
                  this.point.y - this.height / 2
            )
      }

      /**
       * @returns Immutable direction.
       */
      getDirection(): Vector2 {
            return this.direction.from()
      }

      setDirection(direction: Vector2): void {
            this.direction = direction.from().normalize()
      }

      isCollidingWith(hitbox: Hitbox): boolean {
            return (
                  this.isCollidingWithTopEdge(hitbox) &&
                  this.isCollidingWithRightEdge(hitbox) &&
                  this.isCollidingWithBottomEdge(hitbox) &&
                  this.isCollidingWithLeftEdge(hitbox)
            )
      }

      private isCollidingWithTopEdge(hitbox: Hitbox): boolean {
            return (
                  this.point.y - this.height / 2 <=
                  hitbox.point.y + hitbox.getHeight() / 2
            )
      }

      private isCollidingWithRightEdge(hitbox: Hitbox): boolean {
            return (
                  this.point.x + this.width / 2 >=
                  hitbox.point.x - hitbox.getWidth() / 2
            )
      }

      private isCollidingWithBottomEdge(hitbox: Hitbox): boolean {
            return (
                  this.point.y + this.height / 2 >=
                  hitbox.point.y - hitbox.getHeight() / 2
            )
      }

      private isCollidingWithLeftEdge(hitbox: Hitbox): boolean {
            return (
                  this.point.x - this.width / 2 <=
                  hitbox.point.x + hitbox.getWidth() / 2
            )
      }
}

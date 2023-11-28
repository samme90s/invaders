/**
 * @fileoverview Defines a hitbox that can be used to detect collisions between
 * two objects in a 2D space.
 * @author Samuel Svensson
 */

import { Point } from '../Point'
import { Dimension } from './Dimension'

export class Hitbox extends Dimension {
      private position: Point

      constructor(position: Point, width: number, height: number) {
            super(width, height)
            this.position = position.from()
      }

      /**
       * For debugging purposes.
       */
      draw(ctx: CanvasRenderingContext2D): void {
            ctx.fillStyle = '#00f'
            ctx.fillRect(
                  this.getTopLeftPosition().x,
                  this.getTopLeftPosition().y,
                  this.width,
                  this.height
            )
      }

      from(): Hitbox {
            return new Hitbox(this.position, this.width, this.height)
      }

      getPosition(): Point {
            return this.position.from()
      }

      getMutablePosition(): Point {
            return this.position
      }

      getTopLeftPosition(): Point {
            return new Point(
                  this.position.x - this.width / 2,
                  this.position.y - this.height / 2
            )
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
                  this.position.y - this.height / 2 <=
                  hitbox.getPosition().y + hitbox.getHeight() / 2
            )
      }

      private isCollidingWithRightEdge(hitbox: Hitbox): boolean {
            return (
                  this.position.x + this.width / 2 >=
                  hitbox.getPosition().x - hitbox.getWidth() / 2
            )
      }

      private isCollidingWithBottomEdge(hitbox: Hitbox): boolean {
            return (
                  this.position.y + this.height / 2 >=
                  hitbox.getPosition().y - hitbox.getHeight() / 2
            )
      }

      private isCollidingWithLeftEdge(hitbox: Hitbox): boolean {
            return (
                  this.position.x - this.width / 2 <=
                  hitbox.getPosition().x + hitbox.getWidth() / 2
            )
      }
}

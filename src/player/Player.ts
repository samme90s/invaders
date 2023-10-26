/**
 * @fileoverview Defines a player.
 * @author Samuel Svensson
 */

import { Dimension } from '../data-types/Dimension'
import { Point } from '../data-types/Point'
import { Vector } from '../data-types/Vector'

export class Player {
      private position: Point
      private vector: Vector
      private width: number = 5
      private height: number = 5

      constructor(position: Point, movementSpeed: number) {
            this.position = position
            this.vector = new Vector(movementSpeed)

            document.addEventListener('keydown', event => this.keydown(event))
            document.addEventListener('keyup', event => this.keyup(event))
      }

      public draw(ctx: CanvasRenderingContext2D, dimensions: Dimension): void {
            this.move(dimensions)
            ctx.fillStyle = '#0f0'
            ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
      }

      private move(dimensions: Dimension): void {
            if (this.vector.up && this.position.y > 0 + this.height) {
                  this.position.y -= this.vector.size
            }
            if (this.vector.left && this.position.x > 0 + this.width) {
                  this.position.x -= this.vector.size
            }
            if (this.vector.down && this.position.y < dimensions.height - this.height) {
                  this.position.y += this.vector.size
            }
            if (this.vector.right && this.position.x < dimensions.width - this.width) {
                  this.position.x += this.vector.size
            }
      }

      private keydown(event: KeyboardEvent): void {
            if (event.code === 'KeyW') {
                  this.vector.up = true
            }
            if (event.code === 'KeyA') {
                  this.vector.left = true
            }
            if (event.code === 'KeyS') {
                  this.vector.down = true
            }
            if (event.code === 'KeyD') {
                  this.vector.right = true
            }
      }

      private keyup(event: KeyboardEvent): void {
            if (event.code === 'KeyW') {
                  this.vector.up = false
            }
            if (event.code === 'KeyA') {
                  this.vector.left = false
            }
            if (event.code === 'KeyS') {
                  this.vector.down = false
            }
            if (event.code === 'KeyD') {
                  this.vector.right = false
            }
      }
}

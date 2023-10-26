/**
 * @fileoverview Defines a player.
 * @author Samuel Svensson
 */

import { BulletController } from '../bullet/BulletController'
import { Dimension } from '../data-types/Dimension'
import { Point } from '../data-types/Point'
import { Vector } from '../data-types/Vector'

export class Player {
      private position: Point
      private vector: Vector
      private isShooting: boolean = false
      private dimensions: Dimension = new Dimension(5, 5)
      private bulletController: BulletController

      constructor(bulletController: BulletController, position: Point, movementSpeed: number) {
            this.bulletController = bulletController
            this.position = position
            this.vector = new Vector(movementSpeed)

            document.addEventListener('keydown', event => this.keydown(event))
            document.addEventListener('keyup', event => this.keyup(event))
      }

      public draw(ctx: CanvasRenderingContext2D, dimensions: Dimension): void {
            ctx.fillStyle = '#0f0'
            ctx.fillRect(
                  this.position.x,
                  this.position.y,
                  this.dimensions.width,
                  this.dimensions.height
            )

            this.move(dimensions)
            this.shoot()
      }

      private move(dimensions: Dimension): void {
            if (this.vector.up && this.position.y > 0 + this.dimensions.height) {
                  this.position.y -= this.vector.size
            }
            if (this.vector.left && this.position.x > 0 + this.dimensions.width) {
                  this.position.x -= this.vector.size
            }
            if (this.vector.down && this.position.y < dimensions.height - this.dimensions.height) {
                  this.position.y += this.vector.size
            }
            if (this.vector.right && this.position.x < dimensions.width - this.dimensions.width) {
                  this.position.x += this.vector.size
            }
      }

      private shoot(): void {
            if (this.isShooting) {
                  this.bulletController.shoot(new Point(this.position.x, this.position.y), 10, 4)
            }
      }

      private keydown(event: KeyboardEvent): void {
            // Movement
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

            // Shooting
            if (event.code === 'Space') {
                  this.isShooting = true
            }
      }

      private keyup(event: KeyboardEvent): void {
            // Movement
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

            // Shooting
            if (event.code === 'Space') {
                  this.isShooting = false
            }
      }
}

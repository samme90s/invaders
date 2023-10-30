/**
 * @fileoverview Defines a player.
 * @author Samuel Svensson
 */

import { BulletController } from '../../bullet/BulletController'
import { Dimension } from '../../data-types/Dimension'
import { Point } from '../../data-types/Point'
import { Vector } from '../../data-types/Vector'
import { Entity } from '../Entity'

export class Player extends Entity {
      private vector: Vector
      private isShooting: boolean = false
      private bulletController: BulletController

      constructor(
            position: Point,
            dimension: Dimension,
            hitpoints: number,
            speed: number,
            bulletController: BulletController
      ) {
            super(position, dimension, hitpoints, speed)
            this.vector = new Vector(speed)
            this.bulletController = bulletController

            document.addEventListener('keydown', event => this.keydown(event))
            document.addEventListener('keyup', event => this.keyup(event))
      }

      public draw(ctx: CanvasRenderingContext2D, bounds: Dimension): void {
            ctx.fillStyle = '#0f0'
            ctx.fillRect(
                  this.position.x,
                  this.position.y,
                  this.dimension.width,
                  this.dimension.height
            )

            this.move(bounds)
            this.shoot()
      }

      private move(bounds: Dimension): void {
            if (this.vector.up && this.position.y > 0 + this.dimension.height) {
                  this.position.y -= this.vector.size
            }
            if (this.vector.left && this.position.x > 0 + this.dimension.width) {
                  this.position.x -= this.vector.size
            }
            if (this.vector.down && this.position.y < bounds.height - this.dimension.height) {
                  this.position.y += this.vector.size
            }
            if (this.vector.right && this.position.x < bounds.width - this.dimension.width) {
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

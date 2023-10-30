/**
 * @fileoverview Defines a player.
 * @author Samuel Svensson
 */

import { BulletController } from '../../bullet/BulletController'
import { Dimension } from '../../data-types/Dimension'
import { Point } from '../../data-types/Point'
import { Entity } from '../Entity'

export class Player extends Entity {
      public moveUp: boolean = false
      public moveLeft: boolean = false
      public moveDown: boolean = false
      public moveRight: boolean = false
      private doShoot: boolean = false
      private bulletController: BulletController

      constructor(
            position: Point,
            dimension: Dimension,
            hitpoints: number,
            speed: number,
            bulletController: BulletController
      ) {
            super(position, dimension, hitpoints, speed)
            this.bulletController = bulletController

            document.addEventListener('keydown', event => this.keyDown(event))
            document.addEventListener('keyup', event => this.keyUp(event))
      }

      public draw(ctx: CanvasRenderingContext2D, bounds: Dimension): void {
            ctx.fillStyle = '#0f0'
            ctx.fillRect(
                  this._position.x,
                  this._position.y,
                  this._dimension.width,
                  this._dimension.height
            )

            this.move(bounds)
            this.shoot()
      }

      private move(bounds: Dimension): void {
            if (this.moveUp && this._position.y > 0 + this._dimension.height) {
                  this._position.y -= this._speed
            }
            if (this.moveLeft && this._position.x > 0 + this._dimension.width) {
                  this._position.x -= this._speed
            }
            if (this.moveDown && this._position.y < bounds.height - this._dimension.height) {
                  this._position.y += this._speed
            }
            if (this.moveRight && this._position.x < bounds.width - this._dimension.width) {
                  this._position.x += this._speed
            }
      }

      private shoot(): void {
            if (this.doShoot) {
                  // Use strategy pattern to allow for different bullet patterns.
                  // Pass in the strategy here to the bullet controller.
                  this.bulletController.shoot(this._position, 2)
            }
      }

      private keyDown(event: KeyboardEvent): void {
            if (event.key === 'w' || event.key === 'ArrowUp') {
                  this.moveUp = true
            }

            if (event.key === 'a' || event.key === 'ArrowLeft') {
                  this.moveLeft = true
            }

            if (event.key === 's' || event.key === 'ArrowDown') {
                  this.moveDown = true
            }

            if (event.key === 'd' || event.key === 'ArrowRight') {
                  this.moveRight = true
            }

            if (event.code === 'Space') {
                  this.doShoot = true
            }
      }

      private keyUp(event: KeyboardEvent): void {
            if (event.key === 'w' || event.key === 'ArrowUp') {
                  this.moveUp = false
            }

            if (event.key === 'a' || event.key === 'ArrowLeft') {
                  this.moveLeft = false
            }

            if (event.key === 's' || event.key === 'ArrowDown') {
                  this.moveDown = false
            }

            if (event.key === 'd' || event.key === 'ArrowRight') {
                  this.moveRight = false
            }

            if (event.code === 'Space') {
                  this.doShoot = false
            }
      }
}

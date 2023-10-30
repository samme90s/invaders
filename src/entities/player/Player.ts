/**
 * @fileoverview Defines a player.
 * @author Samuel Svensson
 */

import { BulletController } from '../../bullet/BulletController'
import { Dimension } from '../../data-types/Dimension'
import { Hitpoint } from '../../data-types/Hitpoint'
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
            hitpoint: Hitpoint,
            speed: number,
            bulletController: BulletController
      ) {
            super(position, dimension, hitpoint, speed)
            this.bulletController = bulletController

            document.addEventListener('keydown', event => this.keyDown(event))
            document.addEventListener('keyup', event => this.keyUp(event))
      }

      public draw(ctx: CanvasRenderingContext2D, clipSpace: Dimension): void {
            ctx.fillStyle = '#0f0'
            ctx.fillRect(
                  this.position.x,
                  this.position.y,
                  this.dimension.getWidth(),
                  this.dimension.getHeight()
            )

            this.move(clipSpace)
            this.shoot()
      }

      private move(clipSpace: Dimension): void {
            if (this.moveUp && this.position.y > 0 + this.dimension.getHeight()) {
                  this.position.y -= this.speed
            }
            if (this.moveLeft && this.position.x > 0 + this.dimension.getWidth()) {
                  this.position.x -= this.speed
            }
            if (
                  this.moveDown &&
                  this.position.y < clipSpace.getHeight() - this.dimension.getHeight()
            ) {
                  this.position.y += this.speed
            }
            if (
                  this.moveRight &&
                  this.position.x < clipSpace.getWidth() - this.dimension.getWidth()
            ) {
                  this.position.x += this.speed
            }
      }

      private shoot(): void {
            if (this.doShoot) {
                  this.bulletController.shoot(this.position)
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

/**
 * @fileoverview Defines a player.
 * @author Samuel Svensson
 */

import { BulletController } from '../../bullet/BulletController'
import { Dimension } from '../../data-types/Dimension'
import { Hitpoint } from '../../data-types/Hitpoint'
import { Point } from '../../data-types/Point'
import { Entity } from '../Entity'
import { ActionController } from './ActionController'

export class Player extends Entity {
      private bulletController: BulletController
      private actionController: ActionController

      constructor(
            position: Point,
            dimension: Dimension,
            hitpoint: Hitpoint,
            speed: number,
            bulletController: BulletController,
            actionController: ActionController
      ) {
            super(position, dimension, hitpoint, speed)
            this.bulletController = bulletController
            this.actionController = actionController
      }

      draw(ctx: CanvasRenderingContext2D, clipSpace: Dimension): void {
            this.move(clipSpace)
            this.shoot()
            this.drawDimension(ctx)
            this.hitpoint.draw(ctx, this.position)
      }

      private drawDimension(ctx: CanvasRenderingContext2D): void {
            ctx.fillStyle = '#0f0'
            ctx.fillRect(
                  this.position.x - this.dimension.getWidth() / 2,
                  this.position.y - this.dimension.getHeight() / 2,
                  this.dimension.getWidth(),
                  this.dimension.getHeight()
            )
      }

      private move(clipSpace: Dimension): void {
            if (this.actionController.up) {
                  this.moveUp()
            }

            if (this.actionController.left) {
                  this.moveLeft()
            }

            if (this.actionController.down) {
                  this.moveDown(clipSpace)
            }

            if (this.actionController.right) {
                  this.moveRight(clipSpace)
            }
      }

      private moveUp(): void {
            if (!this.isOutsideTop()) {
                  this.position.y -= this.speed
            }
      }

      private isOutsideTop(): boolean {
            return this.position.y < 0
      }

      private moveLeft(): void {
            if (!this.isOutsideLeft()) {
                  this.position.x -= this.speed
            }
      }

      private isOutsideLeft(): boolean {
            return this.position.x < 0
      }

      private moveDown(clipSpace: Dimension): void {
            if (!this.isOutsideDown(clipSpace)) {
                  this.position.y += this.speed
            }
      }

      private isOutsideDown(clipSpace: Dimension): boolean {
            return this.position.y > clipSpace.getHeight() - this.dimension.getHeight()
      }

      private moveRight(clipSpace: Dimension): void {
            if (!this.isOutsideRight(clipSpace)) {
                  this.position.x += this.speed
            }
      }

      private isOutsideRight(clipSpace: Dimension): boolean {
            return this.position.x > clipSpace.getWidth() - this.dimension.getWidth()
      }

      private shoot(): void {
            if (this.actionController.shootUp) {
                  this.bulletController.shootUp(this.position)
            }

            if (this.actionController.shootLeft) {
                  this.bulletController.shootLeft(this.position)
            }

            if (this.actionController.shootDown) {
                  this.bulletController.shootDown(this.position)
            }

            if (this.actionController.shootRight) {
                  this.bulletController.shootRight(this.position)
            }
      }
}

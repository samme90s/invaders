/**
 * @fileoverview Defines a player.
 * @author Samuel Svensson
 */

import { BulletController } from '../../bullet/BulletController'
import { Dimension } from '../../data/Dimension'
import { Hitpoint } from '../../data/Hitpoint'
import { Point } from '../../data/Point'
import { Sprite } from '../../data/Sprite'
import { Entity } from '../Entity'
import { PlayerController } from './PlayerController'

export class Player extends Entity {
      private bulletController: BulletController
      private playerController: PlayerController

      constructor(
            position: Point,
            dimension: Dimension,
            sprite: Sprite,
            hitpoint: Hitpoint,
            speed: number,
            bulletController: BulletController,
            playerController: PlayerController
      ) {
            super(position, dimension, sprite, hitpoint, speed)
            this.bulletController = bulletController
            this.playerController = playerController
      }

      draw(ctx: CanvasRenderingContext2D, clipSpace: Dimension): void {
            this.move(clipSpace)
            this.shoot()
            this.drawDimension(ctx)
            this.hitpoint.draw(ctx, this.position)
      }

      private drawDimension(ctx: CanvasRenderingContext2D): void {
            ctx.drawImage(
                  this.sprite.getImg(),
                  this.position.x - this.dimension.getWidth() / 2,
                  this.position.y - this.dimension.getWidth() / 2,
                  this.dimension.getWidth(),
                  this.dimension.getHeight()
            )
      }

      private move(clipSpace: Dimension): void {
            if (this.playerController.up) {
                  this.moveUp()
            }

            if (this.playerController.left) {
                  this.moveLeft()
            }

            if (this.playerController.down) {
                  this.moveDown(clipSpace)
            }

            if (this.playerController.right) {
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
            if (this.playerController.shootUp) {
                  this.bulletController.shootUp(this.position)
            }

            if (this.playerController.shootLeft) {
                  this.bulletController.shootLeft(this.position)
            }

            if (this.playerController.shootDown) {
                  this.bulletController.shootDown(this.position)
            }

            if (this.playerController.shootRight) {
                  this.bulletController.shootRight(this.position)
            }
      }
}

/**
 * @fileoverview Defines a player.
 * @author Samuel Svensson
 */

import { BulletController } from '../../bullet/BulletController'
import { ClipSpace } from '../../data/dimensions/ClipSpace'
import { Hitbox } from '../../data/dimensions/Hitbox'
import { Hitpoint } from '../../data/Hitpoint'
import { Sprite } from '../../data/Sprite'
import { Entity } from '../Entity'
import { PlayerController } from './PlayerController'

export class Player extends Entity {
      private bulletController: BulletController
      private playerController: PlayerController

      constructor(
            hitbox: Hitbox,
            sprite: Sprite,
            hitpoint: Hitpoint,
            speed: number,
            bulletController: BulletController,
            playerController: PlayerController
      ) {
            super(hitbox, sprite, hitpoint, speed)
            this.bulletController = bulletController
            this.playerController = playerController
      }

      draw(ctx: CanvasRenderingContext2D, clipSpace: ClipSpace): void {
            this.move(clipSpace)
            this.shoot()
            this.sprite.draw(ctx, this.hitbox)
            this.hitpoint.draw(ctx, this.hitbox.getPosition())
      }

      private move(clipSpace: ClipSpace): void {
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
                  this.hitbox.getMutablePosition().y -= this.speed
            }
      }

      private isOutsideTop(): boolean {
            return this.hitbox.getPosition().y < 0
      }

      private moveLeft(): void {
            if (!this.isOutsideLeft()) {
                  this.hitbox.getMutablePosition().x -= this.speed
            }
      }

      private isOutsideLeft(): boolean {
            return this.hitbox.getPosition().x < 0
      }

      private moveDown(clipSpace: ClipSpace): void {
            if (!this.isOutsideDown(clipSpace)) {
                  this.hitbox.getMutablePosition().y += this.speed
            }
      }

      private isOutsideDown(clipSpace: ClipSpace): boolean {
            return this.hitbox.getPosition().y > clipSpace.getHeight() - this.hitbox.getHeight()
      }

      private moveRight(clipSpace: ClipSpace): void {
            if (!this.isOutsideRight(clipSpace)) {
                  this.hitbox.getMutablePosition().x += this.speed
            }
      }

      private isOutsideRight(clipSpace: ClipSpace): boolean {
            return this.hitbox.getPosition().x > clipSpace.getWidth() - this.hitbox.getWidth()
      }

      private shoot(): void {
            if (this.playerController.shootUp) {
                  this.bulletController.shootUp(this.hitbox.getPosition())
            }

            if (this.playerController.shootLeft) {
                  this.bulletController.shootLeft(this.hitbox.getPosition())
            }

            if (this.playerController.shootDown) {
                  this.bulletController.shootDown(this.hitbox.getPosition())
            }

            if (this.playerController.shootRight) {
                  this.bulletController.shootRight(this.hitbox.getPosition())
            }
      }
}

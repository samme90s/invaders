/**
 * @fileoverview Defines a player.
 * @author Samuel Svensson
 */

import { BulletController } from '../../bullet/BulletController'
import { Angle } from '../../data/angles/Angle'
import { ClipSpace } from '../../data/dimensions/ClipSpace'
import { Hitbox } from '../../data/dimensions/Hitbox'
import { Hitpoint } from '../../data/Hitpoint'
import { Speed } from '../../data/Speed'
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
            speed: Speed,
            bulletController: BulletController,
            playerController: PlayerController
      ) {
            super(hitbox, sprite, hitpoint, speed)
            this.bulletController = bulletController
            this.playerController = playerController
      }

      draw(ctx: CanvasRenderingContext2D, clipSpace: ClipSpace): void {
            throw new Error('move this draw method to seperate class')
            this.move(clipSpace)
            this.shoot()
            this.sprite.draw(ctx, this.hitbox)
            this.hitpoint.draw(ctx, this.hitbox.getPosition())
      }

      private shoot(): void {
            if (this.playerController.shootUp) {
                  this.bulletController.shoot(
                        this.hitbox.getPosition(),
                        new Angle(90)
                  )
                  return
            }

            if (this.playerController.shootLeft) {
                  this.bulletController.shoot(
                        this.hitbox.getPosition(),
                        new Angle(180)
                  )
                  return
            }

            if (this.playerController.shootDown) {
                  this.bulletController.shoot(
                        this.hitbox.getPosition(),
                        new Angle(270)
                  )
                  return
            }

            if (this.playerController.shootRight) {
                  this.bulletController.shoot(
                        this.hitbox.getPosition(),
                        new Angle(0)
                  )
                  return
            }
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
                  this.hitbox.getMutablePosition().y -= this.speed.getValue()
            }
      }

      private isOutsideTop(): boolean {
            return this.hitbox.getPosition().y < 0
      }

      private moveLeft(): void {
            if (!this.isOutsideLeft()) {
                  this.hitbox.getMutablePosition().x -= this.speed.getValue()
            }
      }

      private isOutsideLeft(): boolean {
            return this.hitbox.getPosition().x < 0
      }

      private moveDown(clipSpace: ClipSpace): void {
            if (!this.isOutsideDown(clipSpace)) {
                  this.hitbox.getMutablePosition().y += this.speed.getValue()
            }
      }

      private isOutsideDown(clipSpace: ClipSpace): boolean {
            return (
                  this.hitbox.getPosition().y >
                  clipSpace.getHeight() - this.hitbox.getHeight()
            )
      }

      private moveRight(clipSpace: ClipSpace): void {
            if (!this.isOutsideRight(clipSpace)) {
                  this.hitbox.getMutablePosition().x += this.speed.getValue()
            }
      }

      private isOutsideRight(clipSpace: ClipSpace): boolean {
            return (
                  this.hitbox.getPosition().x >
                  clipSpace.getWidth() - this.hitbox.getWidth()
            )
      }
}

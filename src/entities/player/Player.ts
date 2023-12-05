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
            this.move(clipSpace)
            this.shoot()
            this.sprite.draw(ctx, this.getHitbox())
            this.hitpoint.draw(ctx, this.getHitbox().getPosition())
      }

      shoot(): void {
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

      move(clipSpace: ClipSpace): void {
            if (this.playerController.up) {
                  this.moveUp(clipSpace)
            }

            if (this.playerController.left) {
                  this.moveLeft(clipSpace)
            }

            if (this.playerController.down) {
                  this.moveDown(clipSpace)
            }

            if (this.playerController.right) {
                  this.moveRight(clipSpace)
            }
      }

      private moveUp(clipSpace: ClipSpace): void {
            if (!clipSpace.isOutsideTop(this.hitbox)) {
                  this.hitbox.getMutablePosition().y -= this.speed.getValue()
            }
      }

      private moveLeft(clipSpace: ClipSpace): void {
            if (!clipSpace.isOutsideLeft(this.hitbox)) {
                  this.hitbox.getMutablePosition().x -= this.speed.getValue()
            }
      }

      private moveDown(clipSpace: ClipSpace): void {
            if (!clipSpace.isOutsideDown(this.hitbox)) {
                  this.hitbox.getMutablePosition().y += this.speed.getValue()
            }
      }

      private moveRight(clipSpace: ClipSpace): void {
            if (!clipSpace.isOutsideRight(this.hitbox)) {
                  this.hitbox.getMutablePosition().x += this.speed.getValue()
            }
      }
}

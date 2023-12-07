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
      private playerController: PlayerController
      private bulletController: BulletController

      // Make ClipSpace a static class?
      constructor(
            hitbox: Hitbox,
            sprite: Sprite,
            hitpoint: Hitpoint,
            speed: Speed,
            bulletController: BulletController,
            clipSpace: ClipSpace
      ) {
            super(hitbox, sprite, hitpoint, speed)
            this.playerController = new PlayerController(this, clipSpace)
            this.bulletController = bulletController
      }

      draw(ctx: CanvasRenderingContext2D): void {
            this.sprite.draw(ctx, this.getHitbox())
            this.hitpoint.draw(ctx, this.getHitbox().getPosition())
      }

      getPlayerController(): PlayerController {
            return this.playerController
      }

      shootUp(): void {
            this.bulletController.shoot(
                  this.hitbox.getPosition(),
                  new Angle(90)
            )
      }

      shootLeft(): void {
            this.bulletController.shoot(
                  this.hitbox.getPosition(),
                  new Angle(180)
            )
      }

      shootDown(): void {
            this.bulletController.shoot(
                  this.hitbox.getPosition(),
                  new Angle(270)
            )
      }

      shootRight(): void {
            this.bulletController.shoot(this.hitbox.getPosition(), new Angle(0))
      }

      moveUp(clipSpace: ClipSpace): void {
            if (!clipSpace.isOutsideTop(this.hitbox)) {
                  this.hitbox.getMutablePosition().y -= this.speed.getValue()
            }
      }

      moveLeft(clipSpace: ClipSpace): void {
            if (!clipSpace.isOutsideLeft(this.hitbox)) {
                  this.hitbox.getMutablePosition().x -= this.speed.getValue()
            }
      }

      moveDown(clipSpace: ClipSpace): void {
            if (!clipSpace.isOutsideDown(this.hitbox)) {
                  this.hitbox.getMutablePosition().y += this.speed.getValue()
            }
      }

      moveRight(clipSpace: ClipSpace): void {
            if (!clipSpace.isOutsideRight(this.hitbox)) {
                  this.hitbox.getMutablePosition().x += this.speed.getValue()
            }
      }
}

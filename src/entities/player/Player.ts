/**
 * @fileoverview Defines a player.
 * @author Samuel Svensson
 */

import { BulletController } from '../../bullet/BulletController'
import { Hitbox } from '../../data/dimensions/Hitbox'
import { Hitpoint } from '../../data/Hitpoint'
import { Speed } from '../../data/Speed'
import { Vector2 } from '../../data/Vector2'
import { Entity } from '../Entity'
import { PlayerController } from './PlayerController'

export class Player extends Entity {
      private playerController: PlayerController
      private bulletController: BulletController

      constructor(
            hitbox: Hitbox,
            hitpoint: Hitpoint,
            speed: Speed,
            bulletController: BulletController
      ) {
            super(hitbox, hitpoint, speed)
            this.playerController = new PlayerController(this)
            this.bulletController = bulletController
      }

      getPlayerController(): PlayerController {
            return this.playerController
      }

      shoot(): void {
            this.bulletController.shoot(this.hitbox.getPoint())
      }

      moveUp(): void {
            this.hitbox.setDirection(new Vector2(0, -1))
            this.hitbox.move(this.speed)
      }

      moveLeft(): void {
            this.hitbox.setDirection(new Vector2(-1, 0))
            this.hitbox.move(this.speed)
      }

      moveDown(): void {
            this.hitbox.setDirection(new Vector2(0, 1))
            this.hitbox.move(this.speed)
      }

      moveRight(): void {
            this.hitbox.setDirection(new Vector2(1, 0))
            this.hitbox.move(this.speed)
      }
}

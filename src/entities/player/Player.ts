/**
 * @fileoverview Defines a player.
 * @author Samuel Svensson
 */

import { Dimension } from '../../data/dimensions/Dimension'
import { Hitpoint } from '../../data/Hitpoint'
import { Speed } from '../../data/Speed'
import { Vector2 } from '../../data/Vector2'
import { BulletController } from '../bullet/BulletController'
import { Entity } from '../Entity'
import { PlayerController } from './PlayerController'

export class Player extends Entity {
      private playerController: PlayerController
      private bulletController: BulletController

      constructor(
            point: Vector2,
            direction: Vector2,
            dimension: Dimension,
            hitpoint: Hitpoint,
            speed: Speed,
            bulletController: BulletController
      ) {
            super(point, direction, dimension, hitpoint, speed)
            this.playerController = new PlayerController(this)
            this.bulletController = bulletController
      }

      getPlayerController(): PlayerController {
            return this.playerController
      }

      shoot(): void {
            this.bulletController.shoot(this.point)
      }

      moveUp(): void {
            this._direction = new Vector2(0, -1)
            this.move()
      }

      moveLeft(): void {
            this._direction = new Vector2(-1, 0)
            this.move()
      }

      moveDown(): void {
            this._direction = new Vector2(0, 1)
            this.move()
      }

      moveRight(): void {
            this._direction = new Vector2(1, 0)
            this.move()
      }
}

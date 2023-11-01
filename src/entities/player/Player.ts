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
            if (this.actionController.up && !this.isOutsideTop()) {
                  this.position.y -= this.speed
            }
            if (this.actionController.left && !this.isOutsideLeft()) {
                  this.position.x -= this.speed
            }
            if (this.actionController.down && !this.isOutsideBottom(clipSpace)) {
                  this.position.y += this.speed
            }
            if (this.actionController.right && !this.isOutsideRight(clipSpace)) {
                  this.position.x += this.speed
            }
      }

      private isOutsideTop(): boolean {
            return this.position.y < 0
      }

      private isOutsideRight(clipSpace: Dimension): boolean {
            return this.position.x > clipSpace.getWidth() - this.dimension.getWidth()
      }

      private isOutsideBottom(clipSpace: Dimension): boolean {
            return this.position.y > clipSpace.getHeight() - this.dimension.getHeight()
      }

      private isOutsideLeft(): boolean {
            return this.position.x < 0
      }

      private shoot(): void {
            if (this.actionController.shoot) {
                  this.bulletController.shoot(this.position)
            }
      }
}

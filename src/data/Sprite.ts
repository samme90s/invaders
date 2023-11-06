/**
 * @fileoverview Defines a sprite that can be drawn on a canvas context.
 * @author Samuel Svensson
 */

import { Hitbox } from './dimensions/Hitbox'

export class Sprite {
      private img: HTMLImageElement = new Image()

      constructor(src: URL) {
            this.img.src = src.toString()
      }

      draw(ctx: CanvasRenderingContext2D, hitbox: Hitbox): void {
            ctx.drawImage(
                  this.img,
                  hitbox.getTopLeftPosition().x,
                  hitbox.getTopLeftPosition().y,
                  hitbox.getWidth(),
                  hitbox.getHeight()
            )
      }
}

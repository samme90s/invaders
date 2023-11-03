/**
 * @fileoverview Defines a sprite that can be drawn on a canvas context.
 * @author Samuel Svensson
 */

import { Dimension } from './Dimension'
import { Point } from './Point'

export class Sprite {
      private img: HTMLImageElement = new Image()

      constructor(src: URL) {
            this.img.src = src.toString()
      }

      draw(ctx: CanvasRenderingContext2D, position: Point, dimension: Dimension): void {
            ctx.drawImage(
                  this.img,
                  position.x - dimension.getWidth() / 2,
                  position.y - dimension.getWidth() / 2,
                  dimension.getWidth(),
                  dimension.getHeight()
            )
      }
}

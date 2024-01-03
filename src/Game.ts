/**
 * @fileoverview This file is the entry point of the game.
 * @author Samuel Svensson
 */

/* eslint-disable max-len */
import { ClipSpace } from './data/dimensions/ClipSpace'
/* eslint-enable max-len */

export class Game {
      private clipSpace: ClipSpace
      private ctx: CanvasRenderingContext2D

      constructor(clipSpace: ClipSpace, ctx: CanvasRenderingContext2D) {
            this.clipSpace = clipSpace
            this.ctx = ctx
      }

      run() {
            this.clear()

            window.requestAnimationFrame(this.run.bind(this))
      }

      private clear() {
            this.ctx.fillStyle = '#00f'
            this.ctx.fillRect(0, 0, this.clipSpace.width, this.clipSpace.height)
      }
}

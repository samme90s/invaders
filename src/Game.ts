/**
 * @fileoverview This file is the entry point of the game.
 * @author Samuel Svensson
 */

import { ClipSpace } from './data/dimensions/ClipSpace'

export class Game {
      private readonly clipSpace: ClipSpace
      private readonly ctx: CanvasRenderingContext2D

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

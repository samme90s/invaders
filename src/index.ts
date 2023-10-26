/**
 * @fileoverview The main entry point of the application.
 * @author Samuel Svensson
 */

import './index.css'

import { BulletController } from './bullet/BulletController'
import { Dimension } from './data-types/Dimension'
import { Point } from './data-types/Point'
import { Player } from './player/Player'

const canvas = document.querySelector('canvas')
if (!canvas) {
      throw new Error('canvas not found')
}

const dimensions = new Dimension(512, 512)
canvas.width = dimensions.width
canvas.height = dimensions.height

const ctx = canvas.getContext('2d')
if (!ctx) {
      throw new Error('context not found')
}

const bulletController = new BulletController()
const player = new Player(
      bulletController,
      new Point(dimensions.width / 2, dimensions.height / 2),
      10
)

function run() {
      // Background
      ctx.fillStyle = '#000'
      ctx.fillRect(0, 0, dimensions.width, dimensions.height)

      player.draw(ctx, dimensions)
      bulletController.draw(ctx)
}

setInterval(run, 1000 / 60)

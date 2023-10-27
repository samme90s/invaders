/**
 * @fileoverview The main entry point of the application.
 * @author Samuel Svensson
 */

import './index.css'

import { BulletController } from './bullet/BulletController'
import { Dimension } from './data-types/Dimension'
import { Point } from './data-types/Point'
import { Enemy } from './enemy/enemy'
import { Player } from './player/Player'

const canvas = document.querySelector('canvas')
if (!canvas) {
      throw new Error('canvas not found')
}

const dimension = new Dimension(512, 512)
canvas.width = dimension.width
canvas.height = dimension.height

const ctx = canvas.getContext('2d')
if (!ctx) {
      throw new Error('context not found')
}

const bulletController = new BulletController()
const player = new Player(
      bulletController,
      new Point(dimension.width / 2, dimension.height / 2),
      10
)
const enemy = new Enemy(new Point(dimension.width / 2 - 10, dimension.height / 3))

function run() {
      // Background
      ctx.fillStyle = '#000'
      ctx.fillRect(0, 0, dimension.width, dimension.height)

      player.draw(ctx, dimension)
      bulletController.draw(ctx)
      enemy.draw(ctx)

      bulletController.isCollidingWith(enemy)
}

setInterval(run, 1000 / 60)

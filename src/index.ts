/**
 * @fileoverview The main entry point of the application.
 * @author Samuel Svensson
 */

import './index.css'

import { BulletController } from './bullet/BulletController'
import { Dimension } from './data-types/Dimension'
import { Hitpoint } from './data-types/Hitpoint'
import { Point } from './data-types/Point'
import { EnemyController } from './entities/enemy/EnemyController'
import { Player } from './entities/player/Player'

function setupCanvas(dimension: Dimension): CanvasRenderingContext2D {
      const canvas = document.querySelector('canvas')
      if (!canvas) {
            throw new Error('canvas not found')
      }
      canvas.width = dimension.getWidth()
      canvas.height = dimension.getHeight()

      const ctx = canvas.getContext('2d')
      if (!ctx) {
            throw new Error('context not found')
      }

      return ctx
}

function run() {
      clear()

      player.draw(ctx, clipSpace)
      bulletController.draw(ctx)
      if (enemyController.getEnemiesCount() > 0) {
            enemyController.removeDeadEnemies()
            enemyController.draw(ctx)
            bulletController.isCollidingWith(enemyController.getEnemies())
      }
}

function clear() {
      ctx.fillStyle = '#000'
      ctx.fillRect(0, 0, clipSpace.getWidth(), clipSpace.getHeight())
}

const clipSpace = new Dimension(512, 512)
const ctx = setupCanvas(clipSpace)

const bulletController = new BulletController()
const enemyController = new EnemyController()
const player = new Player(
      new Point(clipSpace.getWidth() / 2, clipSpace.getHeight() / 2),
      new Dimension(5, 5),
      new Hitpoint(1),
      2,
      bulletController
)

enemyController.generateEnemiesOnRandomPosition(5, clipSpace)

setInterval(run, 1000 / 60)

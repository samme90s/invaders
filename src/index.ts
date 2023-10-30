/**
 * @fileoverview The main entry point of the application.
 * @author Samuel Svensson
 */

import './index.css'

import { BulletController } from './bullet/BulletController'
import { Dimension } from './data-types/Dimension'
import { Point } from './data-types/Point'
import { EnemyController } from './entities/enemy/EnemyController'
import { Player } from './entities/player/Player'

function setupCanvas(dimension: Dimension): CanvasRenderingContext2D {
      const canvas = document.querySelector('canvas')
      if (!canvas) {
            throw new Error('canvas not found')
      }
      canvas.width = dimension.width
      canvas.height = dimension.height

      const ctx = canvas.getContext('2d')
      if (!ctx) {
            throw new Error('context not found')
      }

      return ctx
}

function run() {
      clear()

      player.draw(ctx, dimension)
      bulletController.draw(ctx)
      if (enemyController.count > 0) {
            enemyController.removeDeadEnemies()
            enemyController.draw(ctx)
            bulletController.isCollidingWith(enemyController.enemies)
      }
}

function clear() {
      ctx.fillStyle = '#000'
      ctx.fillRect(0, 0, dimension.width, dimension.height)
}

const dimension = new Dimension(512, 512)
const ctx = setupCanvas(dimension)

const bulletController = new BulletController()
const enemyController = new EnemyController()
const player = new Player(
      new Point(dimension.width / 2, dimension.height / 2),
      new Dimension(5, 5),
      1,
      1,
      bulletController
)

enemyController.generateEnemiesOnRandomPosition(5, dimension)

setInterval(run, 1000 / 60)

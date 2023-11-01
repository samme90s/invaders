/**
 * @fileoverview The main entry point of the application.
 * @author Samuel Svensson
 */

import './index.css'

import { BulletController } from './bullet/BulletController'
import { ThreeBulletSpreadStrategy } from './bullet/strategy/concrete/ThreeBulletSpreadStrategy'
import { Dimension } from './data-types/Dimension'
import { Hitpoint } from './data-types/Hitpoint'
import { Point } from './data-types/Point'
import { EnemyController } from './entities/enemy/EnemyController'
import { ActionController } from './entities/player/ActionController'
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
      playerBulletController.draw(ctx, clipSpace)
      enemyController.removeDeadEnemies()
      enemyController.draw(ctx, clipSpace, player)
      playerBulletController.isCollidingWith(enemyController.getEnemies())
}

function clear() {
      ctx.fillStyle = '#000'
      ctx.fillRect(0, 0, clipSpace.getWidth(), clipSpace.getHeight())
}

const clipSpace = new Dimension(512, 512)
const ctx = setupCanvas(clipSpace)

const playerBulletDelay = 2
const playerBulletCreationStrategy = new ThreeBulletSpreadStrategy()
const playerBulletController = new BulletController(playerBulletCreationStrategy, playerBulletDelay)
const playerActionController = new ActionController()

const spawnrateInterval = 2000
const enemyController = new EnemyController(spawnrateInterval)

const clipSpaceCenterPoint = new Point(clipSpace.getWidth() / 2, clipSpace.getHeight() / 2)
const playerSpeed = 5
const player = new Player(
      clipSpaceCenterPoint,
      new Dimension(5, 5),
      new Hitpoint(100, 10),
      playerSpeed,
      playerBulletController,
      playerActionController
)

setInterval(run, 1000 / 60)

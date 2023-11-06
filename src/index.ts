/**
 * @fileoverview The main entry point of the application.
 * @author Samuel Svensson
 */

import './index.css'

import { BulletController } from './bullet/BulletController'
import { SingleBulletStrategy } from './bullet/strategy/concrete/SingleBulletStrategy'
import { ClipSpace } from './data/dimensions/ClipSpace'
import { Hitbox } from './data/dimensions/Hitbox'
import { Hitpoint } from './data/Hitpoint'
import { Point } from './data/Point'
import { Sprite } from './data/Sprite'
import { EnemyController } from './entities/enemy/EnemyController'
import { Player } from './entities/player/Player'
import { PlayerController } from './entities/player/PlayerController'

function setupCanvas(clipSpace: ClipSpace): CanvasRenderingContext2D {
      const canvas = document.querySelector('canvas')
      if (!canvas) {
            throw new Error('canvas not found')
      }
      canvas.width = clipSpace.getWidth()
      canvas.height = clipSpace.getHeight()

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

const clipSpace = new ClipSpace(512, 512)
const ctx = setupCanvas(clipSpace)

const playerBulletDelay = 2
const playerBulletCreationStrategy = new SingleBulletStrategy()
const playerBulletController = new BulletController(playerBulletCreationStrategy, playerBulletDelay)
const playerController = new PlayerController()

const spawnrateInterval = 2000
const enemyController = new EnemyController(spawnrateInterval)

const clipSpaceOrigo = new Point(clipSpace.getWidth() / 2, clipSpace.getHeight() / 2)
const playerSpeed = 5
const player = new Player(
      new Hitbox(clipSpaceOrigo, 16, 16),
      new Sprite(new URL('../public/ship.png', import.meta.url)),
      new Hitpoint(100, 10),
      playerSpeed,
      playerBulletController,
      playerController
)

setInterval(run, 1000 / 60)

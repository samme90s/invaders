/**
 * @fileoverview The main entry point of the application.
 * @author Samuel Svensson
 */

import './index.css'

/* eslint-disable max-len */
import { BulletController } from './bullet/BulletController'
import { SingleBulletStrategy } from './bullet/strategy/SingleBulletStrategy'
import { ClipSpace } from './data/dimensions/ClipSpace'
import { Hitbox } from './data/dimensions/Hitbox'
import { Hitpoint } from './data/Hitpoint'
import { Point } from './data/Point'
import { Speed } from './data/Speed'
import { Sprite } from './data/Sprite'
import { EnemyController } from './entities/enemy/EnemyController'
import { IncrementingSpawnStrategy } from './entities/enemy/strategy/IncrementingSpawnStrategy'
import { SurroundingSpaceSpawnPointStrategy } from './entities/enemy/strategy/SurroundingSpaceSpawnPointStrategy'
import { Player } from './entities/player/Player'
import { PlayerController } from './entities/player/PlayerController'
/* eslint-enable max-len */

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
      enemyController.draw(ctx, player)
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
const playerBulletController = new BulletController(
      playerBulletCreationStrategy,
      playerBulletDelay
)
const playerController = new PlayerController()

const spawnPointOffset = 1000
const enemySpawnPointStrategy = new SurroundingSpaceSpawnPointStrategy(
      clipSpace,
      spawnPointOffset
)
const initalAmountOfEnemies = 1
const enemySpawnStrategy = new IncrementingSpawnStrategy(
      enemySpawnPointStrategy,
      initalAmountOfEnemies
)
const enemySpawnIntervalDelay = 2000
const enemyController = new EnemyController(
      enemySpawnStrategy,
      enemySpawnIntervalDelay
)

const clipSpaceOrigo = new Point(
      clipSpace.getWidth() / 2,
      clipSpace.getHeight() / 2
)
const player = new Player(
      new Hitbox(clipSpaceOrigo, 16, 16),
      new Sprite(new URL('../public/ship.png', import.meta.url)),
      new Hitpoint(100, 10, 10),
      new Speed(5),
      playerBulletController,
      playerController
)

setInterval(run, 1000 / 60)

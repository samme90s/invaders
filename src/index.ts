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
import { Speed } from './data/Speed'
import { Sprite } from './data/Sprite'
import { EnemyController } from './entities/enemy/EnemyController'
import { IncrementingSpawnStrategy } from './entities/enemy/strategy/spawn/IncrementingSpawnStrategy'
import { ScrollerSpawnPointStrategy } from './entities/enemy/strategy/spawnpoint/ScrollerSpawnPointStrategy'
import { Player } from './entities/player/Player'
import { Vector2 } from './data/Vector2'
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

const spawnPointOffset = 0
const enemySpawnPointStrategy = new ScrollerSpawnPointStrategy(
      clipSpace,
      spawnPointOffset
)
const initialAmountOfEnemies = 1
const enemySpawnStrategy = new IncrementingSpawnStrategy(
      enemySpawnPointStrategy,
      initialAmountOfEnemies
)
const enemySpawnIntervalDelay = 2000
const enemyController = new EnemyController(
      enemySpawnStrategy,
      enemySpawnIntervalDelay
)

const player = new Player(
      new Hitbox(clipSpace.getOrigo(), new Vector2(0, 0), 1, 1),
      new Hitpoint(100),
      new Speed(5),
      playerBulletController
)

setInterval(run, 1000 / 60)

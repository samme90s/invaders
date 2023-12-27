/**
 * @fileoverview Generates a random spawn point outside the clip space.
 * @author Samuel Svensson
 */

import { ClipSpace } from '../../../../data/dimensions/ClipSpace'
import { Vector2 } from '../../../../data/Vector2'
import { EnemySpawnPointStrategy } from './EnemySpawnPointStrategy'

export class SurroundingSpaceSpawnPointStrategy
implements EnemySpawnPointStrategy
{
      private clipSpace: ClipSpace
      private maxOffset: number

      constructor(clipSpace: ClipSpace, maxOffset: number) {
            this.clipSpace = clipSpace
            this.maxOffset = maxOffset
      }

      get(): Vector2 {
            const random = Math.floor(Math.random() * 4)
            if (random === 0) {
                  return this.generateRandomPointOnTopEdge()
            } else if (random === 1) {
                  return this.generateRandomPointOnRightEdge()
            } else if (random === 2) {
                  return this.generateRandomPointOnBottomEdge()
            } else if (random === 3) {
                  return this.generateRandomPointOnLeftEdge()
            }
      }

      private generateRandomPointOnTopEdge(): Vector2 {
            const randomOffset = Math.floor(Math.random() * this.maxOffset)
            const randomWidth = Math.floor(
                  Math.random() * this.clipSpace.getWidth()
            )
            return new Vector2(randomWidth, -randomOffset)
      }

      private generateRandomPointOnRightEdge(): Vector2 {
            const randomOffset = Math.floor(Math.random() * this.maxOffset)
            const randomHeight = Math.floor(
                  Math.random() * this.clipSpace.getHeight()
            )
            return new Vector2(
                  this.clipSpace.getWidth() + randomOffset,
                  randomHeight
            )
      }

      private generateRandomPointOnBottomEdge(): Vector2 {
            const randomOffset = Math.floor(Math.random() * this.maxOffset)
            const randomWidth = Math.floor(
                  Math.random() * this.clipSpace.getWidth()
            )
            return new Vector2(
                  randomWidth,
                  this.clipSpace.getHeight() + randomOffset
            )
      }

      private generateRandomPointOnLeftEdge(): Vector2 {
            const randomOffset = Math.floor(Math.random() * this.maxOffset)
            const randomHeight = Math.floor(
                  Math.random() * this.clipSpace.getHeight()
            )
            return new Vector2(-randomOffset, randomHeight)
      }
}

/**
 * @author Samuel Svensson
 */

import { ClipSpace } from '../../../../data/dimensions/ClipSpace'
import { Vector2 } from '../../../../data/Vector2'
import { EnemySpawnPointStrategy } from './EnemySpawnPointStrategy'

export class ScrollerSpawnPointStrategy implements EnemySpawnPointStrategy {
      private clipSpace: ClipSpace
      private maxOffset: number

      constructor(clipSpace: ClipSpace, maxOffset: number) {
            this.clipSpace = clipSpace
            this.maxOffset = maxOffset
      }

      get(): Vector2 {
            return this.generateRandomPointOnTopEdge()
      }

      private generateRandomPointOnTopEdge(): Vector2 {
            const randomOffset = Math.floor(Math.random() * this.maxOffset)
            const randomWidth = Math.floor(
                  Math.random() * this.clipSpace.getWidth()
            )
            return new Vector2(randomWidth, -randomOffset)
      }
}

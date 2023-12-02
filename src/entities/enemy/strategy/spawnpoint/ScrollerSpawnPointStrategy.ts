/**
 * @author Samuel Svensson
 */

import { ClipSpace } from '../../../../data/dimensions/ClipSpace'
import { Point } from '../../../../data/Point'
import { EnemySpawnPointStrategy } from './EnemySpawnPointStrategy'

export class ScrollerSpawnPointStrategy implements EnemySpawnPointStrategy {
      private clipSpace: ClipSpace
      private maxOffset: number

      constructor(clipSpace: ClipSpace, maxOffset: number) {
            this.clipSpace = clipSpace
            this.maxOffset = maxOffset
      }

      getSpawnPoint(): Point {
            return this.generateRandomPointOnTopEdge()
      }

      private generateRandomPointOnTopEdge(): Point {
            const randomOffset = Math.floor(Math.random() * this.maxOffset)
            const randomWidth = Math.floor(
                  Math.random() * this.clipSpace.getWidth()
            )
            return new Point(randomWidth, -randomOffset)
      }
}

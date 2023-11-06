/**
 * @fileoverview Defines the size of a 2D space.
 * @author Samuel Svensson
 */

export class Dimension {
      protected width: number
      protected height: number

      constructor(width: number, height: number) {
            this.width = width
            this.height = height
      }

      getWidth(): number {
            return this.width
      }

      getHeight(): number {
            return this.height
      }
}

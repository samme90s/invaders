/**
 * @fileoverview Defines the size of a 2D space.
 * @author Samuel Svensson
 */

export class Dimension {
      protected width: number
      protected height: number

      /**
       * Converts any negative value to positive.
       */
      constructor(width: number, height: number) {
            this.width = Math.abs(width)
            this.height = Math.abs(height)
      }

      getWidth(): number {
            return this.width
      }

      getHeight(): number {
            return this.height
      }
}

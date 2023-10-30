/**
 * @fileoverview Defines a dimension with a width and height in a 2D space.
 * @author Samuel Svensson
 */

export class Dimension {
      private width: number
      private height: number

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

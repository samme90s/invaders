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

      from(): Dimension {
            return new Dimension(this.width, this.height)
      }

      getWidth(): number {
            return this.width
      }

      getHeight(): number {
            return this.height
      }
}

/**
 * @fileoverview Defines a point in a 2D space with an x and y coordinate.
 * @author Samuel Svensson
 */

export class Point {
      x: number
      y: number

      constructor(x: number, y: number) {
            this.x = x
            this.y = y
      }

      from(): Point {
            return new Point(this.x, this.y)
      }
}

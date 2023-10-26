/**
 * @fileoverview Defines a dimension with a width and height in a 2D space.
 * @author Samuel Svensson
 */

export class Dimension {
      #width: number
      #height: number

      constructor(width: number, height: number) {
            this.#width = width
            this.#height = height
      }

      get width(): number {
            return this.#width
      }

      get height(): number {
            return this.#height
      }
}

/**
 * @fileoverview Defines the size of a 2D space.
 * @author Samuel Svensson
 */

export class Dimension {
      protected readonly _width: number
      protected readonly _height: number

      /**
       * Converts any negative value to positive.
       */
      constructor(width: number, height: number) {
            this._width = Math.abs(width)
            this._height = Math.abs(height)
      }

      get width(): number {
            return this._width
      }

      get height(): number {
            return this._height
      }
}

/**
 * @fileoverview Defines a vector.
 * @author Samuel Svensson
 */

export class Vector {
      private _size: number = 1
      private _x: number = 0
      private _y: number = 0

      constructor(size: number, x: number, y: number) {
            if (size <= 0) {
                  throw new RangeError('size must be positive')
            }

            if (x < -1 || y < -1 || x > 1 || y > 1) {
                  throw new RangeError('x and y must be between -1 and 1')
            }

            this._size = size
            this._x = x
            this._y = y
      }

      get xMagnitude(): number {
            return this._x * this._size
      }

      get yMagnitude(): number {
            return this._y * this._size
      }

      set x(x: number) {
            if (x < -1 || x > 1) {
                  throw new RangeError('x must be between -1 and 1')
            }

            this._x = x
      }
}

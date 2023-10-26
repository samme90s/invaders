/**
 * @fileoverview Defines a vector for movement in a 2D space.
 * @author Samuel Svensson
 */

export class Vector {
      #size: number = 1
      public up: boolean = false
      public down: boolean = false
      public left: boolean = false
      public right: boolean = false

      constructor(size: number) {
            if (size < 1) {
                  throw new RangeError('size must be positive')
            }

            this.#size = size
      }

      get size(): number {
            return this.#size
      }
}

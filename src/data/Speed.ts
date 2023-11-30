/**
 * @fileoverview Represents the speed of an entity.
 * @author Samuel Svensson
 */

export class Speed {
      private speed: number
      constructor(speed: number) {
            if (speed <= 0) {
                  throw new RangeError('speed must be positive')
            }

            this.speed = speed
      }

      public getValue() {
            return this.speed
      }
}

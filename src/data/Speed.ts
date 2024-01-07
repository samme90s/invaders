/**
 * @fileoverview Represents the speed of an entity.
 * @author Samuel Svensson
 */

export class Speed {
      private readonly speed: number
      constructor(speed: number) {
            if (speed <= 0) {
                  throw new RangeError('speed must be positive')
            }

            this.speed = speed
      }

      public get() {
            return this.speed
      }
}

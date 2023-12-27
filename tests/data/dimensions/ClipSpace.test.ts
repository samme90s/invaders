/**
 * @author Samuel Svensson
 */

import { ClipSpace } from '../../../src/data/dimensions/ClipSpace'
import { Hitbox } from '../../../src/data/dimensions/Hitbox'
import { Point } from '../../../src/data/Point'

describe('ClipSpace', () => {
      const hitboxSize = 1
      const clipSpaceSize = 1
      const clipSpace = new ClipSpace(clipSpaceSize, clipSpaceSize)

      function expectHitboxToBeOutsideOn(point: Point) {
            const hitbox = new Hitbox(point, hitboxSize, hitboxSize)
            expect(clipSpace.isOutside(hitbox)).toBeTruthy
      }

      function expectHitboxToBeInsideOn(point: Point) {
            const hitbox = new Hitbox(point, hitboxSize, hitboxSize)
            expect(clipSpace.isOutside(hitbox)).toBeFalsy
      }

      test.each([
            new Point(clipSpaceSize + 1, clipSpaceSize + 1),
            new Point(-1, -1),
      ])('should be outside when setting %d', (point: Point) => {
            expectHitboxToBeOutsideOn(point)
      })

      test.each([new Point(clipSpaceSize, clipSpaceSize), new Point(0, 0)])(
            'should be inside when setting %d',
            (point: Point) => {
                  expectHitboxToBeInsideOn(point)
            }
      )
})

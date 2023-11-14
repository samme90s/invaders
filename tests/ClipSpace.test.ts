/**
 * @fileoverview Tests the ClipSpace class.
 * @author Samuel Svensson
 */

import { ClipSpace } from '../src/data/dimensions/ClipSpace'
import { Hitbox } from '../src/data/dimensions/Hitbox'
import { Point } from '../src/data/Point'

describe('ClipSpace', () => {
      const clipSpaceSize = 1
      const hitboxSize = 1

      function expectToBeOutside(point: Point) {
            const clipSpace = new ClipSpace(clipSpaceSize, clipSpaceSize)
            const hitbox = new Hitbox(point, hitboxSize, hitboxSize)
            expect(clipSpace.isOutside(hitbox)).toBeTruthy()
      }

      function expectToBeInside(point: Point) {
            const clipSpace = new ClipSpace(clipSpaceSize, clipSpaceSize)
            const hitbox = new Hitbox(point, hitboxSize, hitboxSize)
            expect(clipSpace.isOutside(hitbox)).toBeFalsy()
      }

      test('Point is less than clipSpace', () => {
            expectToBeOutside(new Point(-1, -1))
      })

      test('Point is greater than clipSpace', () => {
            expectToBeOutside(new Point(clipSpaceSize + 1, clipSpaceSize + 1))
      })

      test('Point is the size of clipSpace', () => {
            expectToBeInside(new Point(clipSpaceSize, clipSpaceSize))
      })

      test('Point is zero', () => {
            expectToBeInside(new Point(0, 0))
      })
})

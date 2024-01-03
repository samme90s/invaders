/**
 * @author Samuel Svensson
 */

import { ClipSpace } from '../../../src/data/dimensions/ClipSpace'
import { Hitbox } from '../../../src/data/dimensions/Hitbox'
import { Vector2 } from '../../../src/data/Vector2'

describe('ClipSpace', () => {
      const direction = new Vector2(0, 0)
      const width = 1
      const height = 1
      const clipSpace = new ClipSpace(width, height)

      it('should return origo', () => {
            const expected = new Vector2(width / 2, height / 2)
            expect(clipSpace.getOrigo()).toEqual(expected)
      })

      test.each([new Vector2(width + 1, height + 1), new Vector2(-1, -1)])(
            'should be outside on point',
            (point: Vector2) => {
                  expectHitboxToBeOutsideOn(
                        new Hitbox(point, direction, width, height)
                  )
            }
      )

      function expectHitboxToBeOutsideOn(hitbox: Hitbox) {
            expect(clipSpace.isOutside(hitbox)).toBeTruthy
      }

      test.each([new Vector2(width, height), new Vector2(0, 0)])(
            'should be inside on point',
            (point: Vector2) => {
                  expectHitboxToBeInsideOn(
                        new Hitbox(point, direction, width, height)
                  )
            }
      )

      function expectHitboxToBeInsideOn(hitbox: Hitbox) {
            expect(clipSpace.isOutside(hitbox)).toBeFalsy
      }
})

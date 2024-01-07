/**
 * @author Samuel Svensson
 */

import { ClipSpace } from '../../../src/data/dimensions/ClipSpace'
import { Dimension } from '../../../src/data/dimensions/Dimension'
import { Hitpoint } from '../../../src/data/Hitpoint'
import { Speed } from '../../../src/data/Speed'
import { Vector2 } from '../../../src/data/Vector2'
import { Entity } from '../../../src/entities/Entity'

class TestEntity extends Entity {
      constructor(
            point: Vector2,
            direction: Vector2,
            dimension: Dimension,
            hitpoint: Hitpoint,
            speed: Speed
      ) {
            super(point, direction, dimension, hitpoint, speed)
      }
}

describe('ClipSpace', () => {
      const clipSpace = new ClipSpace(1, 1)
      const dimension = new Dimension(1, 1)
      const direction = new Vector2(0, 0)
      const hitpoint = new Hitpoint(1)
      const speed = new Speed(1)

      describe('Points', () => {
            it('should return origo', () => {
                  const expected = new Vector2(
                        clipSpace.width / 2,
                        clipSpace.height / 2
                  )
                  expect(clipSpace.getOrigo()).toEqual(expected)
            })
      })

      describe('Entities', () => {
            it('should be outside', () => {
                  const point = new Vector2(
                        clipSpace.width + 1,
                        clipSpace.height + 1
                  )
                  expectEntityToBeOutside(
                        new TestEntity(
                              point,
                              direction,
                              dimension,
                              hitpoint,
                              speed
                        )
                  )
            })

            function expectEntityToBeOutside(entity: Entity) {
                  expect(clipSpace.isOutside(entity)).toBeTruthy()
            }

            it('should be inside', () => {
                  const point = new Vector2(0, 0)
                  expectHitboxToBeInsideOn(
                        new TestEntity(
                              point,
                              direction,
                              dimension,
                              hitpoint,
                              speed
                        )
                  )
            })

            function expectHitboxToBeInsideOn(entity: Entity) {
                  expect(clipSpace.isOutside(entity)).toBeFalsy()
            }
      })
})

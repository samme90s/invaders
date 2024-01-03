/**
 * @author Samuel Svensson
 */

import { Dimension } from '../../src/data/dimensions/Dimension'
import { Hitpoint } from '../../src/data/Hitpoint'
import { Speed } from '../../src/data/Speed'
import { Vector2 } from '../../src/data/Vector2'
import { Entity } from '../../src/entities/Entity'

class TestEntity extends Entity {
      constructor(point: Vector2) {
            super(
                  point,
                  new Vector2(0, 0),
                  new Dimension(1, 1),
                  new Hitpoint(1),
                  new Speed(1)
            )
      }
}

describe('Entity', () => {
      let point: Vector2
      let entity: Entity

      beforeEach(() => {
            point = new Vector2(0, 0)
            entity = new TestEntity(point)
      })

      it('should create an instance', () => {
            expect(entity).toBeInstanceOf(Entity)
      })

      it('should detect collision with another entity', () => {
            const otherEntity = new TestEntity(new Vector2(1, 1))
            expect(entity.isCollidingWith(otherEntity)).toBe(true)
      })

      it('should not detect collision with distant entity', () => {
            const distantEntity = new TestEntity(new Vector2(2, 2))
            expect(entity.isCollidingWith(distantEntity)).toBe(false)
      })
})

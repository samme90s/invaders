/**
 * @author Samuel Svensson
 */

import { Hitbox } from '../../src/data/dimensions/Hitbox'
import { Hitpoint } from '../../src/data/Hitpoint'
import { Interval } from '../../src/data/Interval'
import { Speed } from '../../src/data/Speed'
import { Vector2 } from '../../src/data/Vector2'
import { Entity } from '../../src/entities/Entity'

class TestEntity extends Entity {
      constructor(hitbox: Hitbox, hitpoint: Hitpoint, speed: Speed) {
            super(hitbox, hitpoint, speed)
      }
}

describe('Entity', () => {
      let entity: Entity
      let hitbox: Hitbox
      let hitpoint: Hitpoint
      let speed: Speed

      beforeEach(() => {
            hitbox = new Hitbox(new Vector2(0, 0), new Vector2(0, 0), 1, 1)
            hitpoint = new Hitpoint(10, 1, new Interval(1))
            speed = new Speed(1)
            entity = new TestEntity(hitbox, hitpoint, speed)
      })

      it('should create an instance', () => {
            expect(entity).toBeInstanceOf(Entity)
      })

      it('should get the hitbox', () => {
            expect(entity.getHitbox()).toBe(hitbox)
      })

      it('should get the hitpoint', () => {
            expect(entity.getHitpoint()).toBe(hitpoint)
      })
})
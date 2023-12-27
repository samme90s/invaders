/**
 * @fileoverview Tests for Hitbox class.
 * @author Samuel Svensson
 */

import { Hitbox } from '../../../src/data/dimensions/Hitbox'
import { Vector2 } from '../../../src/data/Vector2'

describe('Hitbox', () => {
      const point = new Vector2(0, 0)
      const direction = new Vector2(0, 0)
      const width = 1
      const height = 1
      const hitbox = new Hitbox(point, direction, width, height)

      it('should return an new object with equal values', () => {
            const copy = hitbox.from()
            expect(hitbox).toEqual(copy)
            expect(hitbox).not.toBe(copy)
      })

      it('should not return references', () => {
            expect(hitbox.getPoint()).not.toBe(point)
            expect(hitbox.getDirection()).not.toBe(direction)
      })

      it('should return equal information', () => {
            expect(hitbox.getPoint()).toEqual(point)
            expect(hitbox.getDirection()).toEqual(direction)
      })

      it('should return immutable point', () => {
            const point = hitbox.getPoint()
            point.x = 1
            point.y = 1
            expect(hitbox.getPoint()).not.toEqual(point)
      })

      it('should return immutable direction', () => {
            const direction = hitbox.getDirection()
            direction.x = 1
            direction.y = 1
            expect(hitbox.getDirection()).not.toEqual(direction)
      })

      it('should return top left point', () => {
            const topLeftPoint = new Vector2(-width / 2, -height / 2)
            expect(hitbox.getTopLeftPoint()).toEqual(topLeftPoint)
      })

      it('should collide with other', () => {
            const other = new Hitbox(
                  new Vector2(1, 1),
                  direction,
                  width,
                  height
            )
            expect(hitbox.isCollidingWith(other)).toBeTruthy
      })
})

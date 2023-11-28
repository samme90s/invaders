/**
 * @fileoverview Tests for Hitbox class.
 * @author Samuel Svensson
 */

import { Hitbox } from '../../../src/data/dimensions/Hitbox'
import { Point } from '../../../src/data/Point'

describe('Hitbox', () => {
      const point = new Point(0, 0)
      const width = 1
      const height = 1
      const hitbox = new Hitbox(point, width, height)

      test('should return an new object with equal values', () => {
            const hitboxCopy = hitbox.from()
            expect(hitbox).toEqual(hitboxCopy)
            expect(hitbox).not.toBe(hitboxCopy)
      })

      test('should not return reference as point', () => {
            expect(hitbox.getPosition()).not.toBe(point)
            expect(hitbox.getMutablePosition()).not.toBe(point)
      })

      test('should return point', () => {
            expect(hitbox.getPosition()).toEqual(point)
            expect(hitbox.getMutablePosition()).toEqual(point)
      })

      test('should return immutable point', () => {
            const point = hitbox.getPosition()
            point.x = 1
            point.y = 1
            expect(hitbox.getPosition()).not.toEqual(point)
      })

      test('should return top left point', () => {
            const topLeftPoint = new Point(-width / 2, -height / 2)
            expect(hitbox.getTopLeftPosition()).toEqual(topLeftPoint)
      })

      test('should collide with other', () => {
            const other = new Hitbox(new Point(1, 1), 1, 1)
            expect(hitbox.isCollidingWith(other)).toBeTruthy
      })
})

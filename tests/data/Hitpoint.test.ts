/**
 * @author Samuel Svensson
 */

import { Hitpoint } from '../../src/data/Hitpoint'

describe('Hitpoint', () => {
      const total = 1
      const regenRate = 1
      const regenDelay = 1

      test.each([-1, 0])('should be throw on %i as total', (total: number) => {
            expect(() => new Hitpoint(total, regenRate, regenDelay)).toThrow(
                  RangeError
            )
      })

      test('should be throw on negative regen rate', () => {
            expect(() => new Hitpoint(total, -1, regenDelay)).toThrow(
                  RangeError
            )
      })

      test('should throw on regen delay less than one', () => {
            expect(() => new Hitpoint(total, regenRate, 0)).toThrow(RangeError)
      })

      test('should return an new object with equal values', () => {
            const hitpoint = new Hitpoint(total, regenRate, regenDelay)
            const hitpointCopy = hitpoint.from()
            expect(hitpoint).toEqual(hitpointCopy)
            expect(hitpoint).not.toBe(hitpointCopy)
      })

      test('should return actual', () => {
            const hitpoint = new Hitpoint(total, regenRate, regenDelay)
            expect(hitpoint.getActual()).toBe(total)
      })

      test('should reduce actual', () => {
            const hitpoint = new Hitpoint(total, regenRate, regenDelay)
            hitpoint.reduce(1)
            expect(hitpoint.getActual()).toBe(0)
      })

      test('should reduce actual to zero', () => {
            const hitpoint = new Hitpoint(total, regenRate, regenDelay)
            hitpoint.reduce(2)
            expect(hitpoint.getActual()).toBe(0)
      })
})

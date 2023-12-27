/**
 * @author Samuel Svensson
 */

import { Hitpoint } from '../../src/data/Hitpoint'

const total = 10
const regenRate = 1
const regenDelay = 1

describe('Constructor', () => {
      test('should throw on regen delay less than one', () => {
            expect(() => new Hitpoint(total, regenRate, 0)).toThrow(RangeError)
      })

      test('should throw on negative regen rate', () => {
            expect(() => new Hitpoint(total, -1, regenDelay)).toThrow(
                  RangeError
            )
      })

      test.each([-1, 0])('should throw on %d as total', (total: number) => {
            expect(() => new Hitpoint(total, regenRate, regenDelay)).toThrow(
                  RangeError
            )
      })
})

describe('Methods', () => {
      let hitpoint: Hitpoint

      beforeEach(() => {
            hitpoint = new Hitpoint(total, regenRate, regenDelay)
      })

      test('should return an new object with equal values', () => {
            const hitpointCopy = hitpoint.from()
            expect(hitpoint).toEqual(hitpointCopy)
            expect(hitpoint).not.toBe(hitpointCopy)
      })

      test('should return actual', () => {
            expect(hitpoint.getActual()).toBe(total)
      })

      test('should reduce actual', () => {
            hitpoint.reduce(1)
            expect(hitpoint.getActual()).toBe(9)
      })

      test('should reduce actual to zero', () => {
            hitpoint.reduce(11)
            expect(hitpoint.getActual()).toBe(0)
      })

      test('should get ratio', () => {
            hitpoint.reduce(1)
            expect(hitpoint.getRatio()).toBe(0.9)
      })

      test('should be able to regenerate', () => {
            hitpoint.reduce(regenRate)
            for (let i = 0; i < regenDelay; i++) {
                  hitpoint.regenerate()
            }
            expect(hitpoint.getActual()).toBe(total)
      })

      test('should not regenerate if timeout is set', () => {
            hitpoint.reduce(regenRate)
            hitpoint.setTimeout(regenDelay + 1)
            for (let i = 0; i < regenDelay; i++) {
                  hitpoint.regenerate()
            }
            expect(hitpoint.getActual()).toBe(total - regenRate)
      })
})

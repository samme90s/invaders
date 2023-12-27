/**
 * @author Samuel Svensson
 */

import { Hitpoint } from '../../src/data/Hitpoint'

const total = 10
const regenRate = 1
const regenDelay = 1

describe('Constructor', () => {
      it('should throw on regen delay less than one', () => {
            expect(() => new Hitpoint(total, regenRate, 0)).toThrow(RangeError)
      })

      it('should throw on negative regen rate', () => {
            expect(() => new Hitpoint(total, -1, regenDelay)).toThrow(
                  RangeError
            )
      })

      it('should throw on zero as total', () => {
            expect(() => new Hitpoint(0, regenRate, regenDelay)).toThrow(
                  RangeError
            )
      })
})

describe('Methods', () => {
      let hitpoint: Hitpoint

      beforeEach(() => {
            hitpoint = new Hitpoint(total, regenRate, regenDelay)
      })

      it('should return an new object with equal values', () => {
            const copy = hitpoint.from()
            expect(hitpoint).toEqual(copy)
            expect(hitpoint).not.toBe(copy)
      })

      it('should return actual', () => {
            expect(hitpoint.getActual()).toBe(total)
      })

      it('should reduce actual', () => {
            hitpoint.reduce(regenRate)
            expect(hitpoint.getActual()).toBe(total - regenRate)
      })

      it('should reduce actual to zero', () => {
            hitpoint.reduce(11)
            expect(hitpoint.getActual()).toBe(0)
      })

      it('should get ratio', () => {
            hitpoint.reduce(regenRate)
            expect(hitpoint.getRatio()).toBe((total - regenRate) / total)
      })

      it('should be able to regenerate', () => {
            hitpoint.reduce(regenRate)
            for (let i = 0; i < regenDelay; i++) {
                  hitpoint.regenerate()
            }
            expect(hitpoint.getActual()).toBe(total)
      })

      it('should not regenerate if timeout is set', () => {
            hitpoint.reduce(regenRate)
            hitpoint.setTimeout(regenDelay + 1)
            for (let i = 0; i < regenDelay; i++) {
                  hitpoint.regenerate()
            }
            expect(hitpoint.getActual()).toBe(total - regenRate)
      })
})

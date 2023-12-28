/**
 * @author Samuel Svensson
 */

import { Damage } from '../../src/data/Damage'
import { Hitpoint } from '../../src/data/Hitpoint'
import { Interval } from '../../src/data/Interval'

const total = 10
const regenRate = 1
const regenDelay = new Interval(1)

let damage: Damage
let hitpoint: Hitpoint

beforeEach(() => {
      damage = new Damage(1)
      hitpoint = new Hitpoint(total, regenRate, regenDelay)
})

describe('Hitpoint', () => {
      describe('Constructor', () => {
            it('should throw on invalid parameters', () => {
                  expect(() => new Hitpoint(total, -1, regenDelay)).toThrow(
                        RangeError
                  )
                  expect(() => new Hitpoint(0, regenRate, regenDelay)).toThrow(
                        RangeError
                  )
            })
      })

      describe('Damage', () => {
            it('should reduce actual and get ratio', () => {
                  hitpoint.reduce(damage)
                  expect(hitpoint.get()).toBe(total - regenRate)
                  expect(hitpoint.getRatio()).toBe((total - regenRate) / total)
            })

            it('should handle regeneration', () => {
                  hitpoint.reduce(damage)
                  for (let i = 0; i < regenDelay.get(); i++) {
                        hitpoint.regenerate()
                  }
                  expect(hitpoint.get()).toBe(total)
            })

            it('should not regenerate if timeout is set', () => {
                  hitpoint.reduce(damage)
                  hitpoint.setTimeout(new Interval(regenDelay.get() + 1))
                  for (let i = 0; i < regenDelay.get(); i++) {
                        hitpoint.regenerate()
                  }
                  expect(hitpoint.get()).toBe(total - regenRate)
            })
      })

      describe('Methods', () => {
            it('should return an new object with equal values', () => {
                  const copy = hitpoint.from()
                  expect(hitpoint).toEqual(copy)
                  expect(hitpoint).not.toBe(copy)
            })

            it('should return actual', () => {
                  expect(hitpoint.get()).toBe(total)
            })

            it('should reduce actual to zero', () => {
                  hitpoint.reduce(new Damage(total + 1))
                  expect(hitpoint.get()).toBe(0)
            })
      })
})

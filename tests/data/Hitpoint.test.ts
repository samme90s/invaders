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

      describe('Reduction', () => {
            beforeEach(() => {
                  hitpoint.reduce(damage)
            })

            it('should return correct values', () => {
                  expect(hitpoint.get()).toBe(total - regenRate)
                  expect(hitpoint.getRatio()).toBe((total - regenRate) / total)
            })

            it('should handle regeneration', () => {
                  for (let i = 0; i < regenDelay.get(); i++) {
                        hitpoint.regenerate()
                  }
                  expect(hitpoint.get()).toBe(total)
            })

            it('should not regenerate if timeout is active', () => {
                  hitpoint.setTimeout(new Interval(regenDelay.get() + 1))
                  for (let i = 0; i < regenDelay.get(); i++) {
                        hitpoint.regenerate()
                  }
                  expect(hitpoint.get()).toBe(total - regenRate)
            })

            it('should not reduce below zero', () => {
                  // Adding the total damage results in
                  // an exceeding damage (11).
                  hitpoint.reduce(new Damage(total))
                  expect(hitpoint.get()).toBe(0)
            })

            it('should return truthy on death', () => {
                  expect(hitpoint.isDead()).toBeFalsy()
                  hitpoint.reduce(new Damage(total))
                  expect(hitpoint.isDead()).toBeTruthy()
            })
      })

      describe('Other', () => {
            it('should return an new object with equal values', () => {
                  const copy = hitpoint.from()
                  expect(hitpoint).toEqual(copy)
                  expect(hitpoint).not.toBe(copy)
            })
      })
})

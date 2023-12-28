/**
 * @author Samuel Svensson
 */

import { Damage } from '../../src/data/Damage'

describe('Damage', () => {
      let damage: Damage

      beforeEach(() => {
            damage = new Damage(5)
      })

      it('should create an instance', () => {
            expect(damage).toBeInstanceOf(Damage)
      })

      it('should get the damage', () => {
            expect(damage.get()).toBe(5)
      })

      it('should set the damage', () => {
            damage.set(3)
            expect(damage.get()).toBe(3)
      })

      it('should throw an error if damage is not an integer', () => {
            expect(() => damage.set(3.5)).toThrow('damage must be an integer')
      })

      it('should throw an error if damage is negative', () => {
            expect(() => damage.set(-1)).toThrow(
                  'damage must be positive or zero'
            )
      })

      it('should return an new object with equal values', () => {
            const copy = damage.from()
            expect(damage).toEqual(copy)
            expect(damage).not.toBe(copy)
      })
})

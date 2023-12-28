/**
 * @author Samuel Svensson
 */

import { Interval } from '../../src/data/Interval'

describe('Interval', () => {
      let interval: Interval

      beforeEach(() => {
            interval = new Interval(5)
      })

      it('should create an instance', () => {
            expect(interval).toBeInstanceOf(Interval)
      })

      it('should get the interval', () => {
            expect(interval.get()).toBe(5)
      })

      it('should set the interval', () => {
            interval.set(3)
            expect(interval.get()).toBe(3)
      })

      it('should throw an error if interval is not an integer', () => {
            expect(() => interval.set(3.5)).toThrow(
                  'interval must be an integer'
            )
      })

      it('should throw an error if interval is negative', () => {
            expect(() => interval.set(-1)).toThrow(
                  'interval must be positive or zero'
            )
      })

      it('should check if interval has passed', () => {
            expect(interval.hasPassed()).toBe(false)
            interval.set(0)
            expect(interval.hasPassed()).toBe(true)
      })

      it('should reduce the interval', () => {
            interval.reduce()
            expect(interval.get()).toBe(4)
      })

      it('should reset the interval', () => {
            interval.reset()
            expect(interval.get()).toBe(0)
      })

      it('should return an new object with equal values', () => {
            const copy = interval.from()
            expect(interval).toEqual(copy)
            expect(interval).not.toBe(copy)
      })
})

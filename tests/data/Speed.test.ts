/**
 * @author Samuel Svensson
 */

import { Speed } from '../../src/data/Speed'

describe('Speed', () => {
      test('should throw on zero', () => {
            expect(() => new Speed(0)).toThrow(RangeError)
      })

      test('should return value', () => {
            const speed = new Speed(1)
            expect(speed.get()).toBe(1)
      })
})

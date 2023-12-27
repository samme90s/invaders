/**
 * @author Samuel Svensson
 */

import { Speed } from '../../src/data/Speed'

describe('Speed', () => {
      it('should throw on zero', () => {
            expect(() => new Speed(0)).toThrow(RangeError)
      })

      it('should return value', () => {
            const speed = new Speed(1)
            expect(speed.get()).toBe(1)
      })
})

/**
 * @author Samuel Svensson
 */

import { Angle } from '../../../src/data/angles/Angle'
import { PolarVector } from '../../../src/data/vectors/PolarVector'

describe('PolarVector', () => {
      test('should throw on negative magnitude', () => {
            expect(() => new PolarVector(-1, new Angle(0))).toThrow(RangeError)
      })
})

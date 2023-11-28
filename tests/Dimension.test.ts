/**
 * @fileoverview Tests for Dimension class.
 * @author Samuel Svensson
 */

import { Dimension } from '../src/data/dimensions/Dimension'

describe('Dimension', () => {
      test('should always be positive', () => {
            const dimension = new Dimension(-1, -1)
            expect(dimension.getWidth()).toBe(1)
            expect(dimension.getHeight()).toBe(1)
      })
})

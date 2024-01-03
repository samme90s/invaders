/**
 * @fileoverview Tests for Dimension class.
 * @author Samuel Svensson
 */

import { Dimension } from '../../../src/data/dimensions/Dimension'

describe('Dimension', () => {
      it('should always be positive', () => {
            const dimension = new Dimension(-1, -1)
            expect(dimension.width).toBe(1)
            expect(dimension.height).toBe(1)
      })
})

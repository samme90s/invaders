/**
 * @fileoverview Tests for Angle class.
 * @author Samuel Svensson
 */

import { Angle } from '../src/data/angles/Angle'

describe('Angle', () => {
      test('should always be positive', () => {
            const angle = new Angle(-1)
            expect(angle.getValue()).toBe(359)
      })

      test.each([
            [0, 0],
            [360, 0],
            [-360, 0],
            [90, 90],
            [450, 90],
      ])('should be %i when setting %i', (actual, expected) => {
            const angle = new Angle(actual)
            expect(angle.getValue()).toBe(expected)
      })

      test.each([
            [0, 0],
            [180, Math.PI],
      ])('should convert %i to %i radians', (actual, expected) => {
            const angle = new Angle(actual)
            expect(angle.toRadians().getValue()).toBe(expected)
      })
})

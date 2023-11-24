/**
 * @fileoverview Tests for RadianAngle class.
 * @author Samuel Svensson
 */

import { RadianAngle } from '../src/data/angles/RadianAngle'

describe('RadianAngle', () => {
      test('RadianAngle should be defined', () => {
            const angle = new RadianAngle(0)
            expect(angle).toBeDefined()
      })

      test.each([
            [0, 0],
            [2 * Math.PI, 0],
            [-2 * Math.PI, 0],
            [Math.PI / 2, Math.PI / 2],
            [(5 * Math.PI) / 2, Math.PI / 2],
      ])('RadianAngle should be %i when setting %i', (actual, expected) => {
            const angle = new RadianAngle(actual)
            expect(angle.getValue()).toBe(expected)
      })

      test.each([
            [0, 0],
            [Math.PI, 180],
      ])('RadianAngle %i converted to degrees should be %i', (actual, expected) => {
            const angle = new RadianAngle(actual)
            expect(angle.toDegrees().getValue()).toBe(expected)
      })
})

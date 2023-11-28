/**
 * @fileoverview Tests for RadianAngle class.
 * @author Samuel Svensson
 */

import { RadianAngle } from '../../../src/data/angles/RadianAngle'

describe('RadianAngle', () => {
      test.each([
            [0, 0],
            [2 * Math.PI, 0],
            [-2 * Math.PI, 0],
            [Math.PI / 2, Math.PI / 2],
            [(5 * Math.PI) / 2, Math.PI / 2],
      ])('should be %i when setting %i', (actual: number, expected: number) => {
            const angle = new RadianAngle(actual)
            expect(angle.getValue()).toBe(expected)
      })

      test.each([
            [0, 0],
            [Math.PI, 180],
      ])(
            'should convert %i to %i degrees',
            (actual: number, expected: number) => {
                  const angle = new RadianAngle(actual)
                  expect(angle.toDegrees().getValue()).toBe(expected)
            }
      )
})

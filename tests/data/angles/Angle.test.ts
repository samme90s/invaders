/**
 * @author Samuel Svensson
 */

import { Angle } from '../../../src/data/angles/Angle'

describe('Angle', () => {
      it('should always be positive', () => {
            const angle = new Angle(-1)
            expect(angle.get()).toBe(359)
      })

      test.each([
            [0, 0],
            [360, 0],
            [-360, 0],
            [90, 90],
            [450, 90],
      ])('should be %d when setting %d', (actual: number, expected: number) => {
            const angle = new Angle(actual)
            expect(angle.get()).toBe(expected)
      })

      test.each([
            [0, 0],
            [180, Math.PI],
      ])(
            'should convert %d to %d radians',
            (actual: number, expected: number) => {
                  const angle = new Angle(actual)
                  expect(angle.toRadians().get()).toBe(expected)
            }
      )
})

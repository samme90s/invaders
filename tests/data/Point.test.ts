/**
 * @author Samuel Svensson
 */

import { Point } from '../../src/data/Point'

describe('Point', () => {
      test('should return an new object with equal values', () => {
            const point = new Point(1, 1)
            const pointCopy = point.from()
            expect(point).toEqual(pointCopy)
            expect(point).not.toBe(pointCopy)
      })

      test('should be able to set x and y values', () => {
            const point = new Point(1, 1)
            point.x = 2
            point.y = 3
            expect(point.x).toBe(2)
            expect(point.y).toBe(3)
      })
})

/**
 * @author Samuel Svensson
 */

import { CartesianVector } from '../../../src/data/vectors/CartesianVector'

describe('CartesianVector', () => {
      test('should return cartesian coordinates', () => {
            const vector = new CartesianVector(1, 2)
            expect(vector.getX()).toBe(1)
            expect(vector.getY()).toBe(2)
      })

      test('should normalize vector', () => {
            const vector = new CartesianVector(1, 1)
            const normalized = vector.normalize()
            expect(normalized.getX()).toBeCloseTo(0.707)
            expect(normalized.getY()).toBeCloseTo(0.707)
      })

      test('should multiply vector', () => {
            const vector = new CartesianVector(1, 1)
            const multiplied = vector.multiply(2)
            expect(multiplied.getX()).toBe(2)
            expect(multiplied.getY()).toBe(2)
      })

      test('should convert properly', () => {
            const vector = new CartesianVector(1, 1)
            const convertedVector = vector.toPolar().toCartesian()
            expect(convertedVector.getX()).toBeCloseTo(1)
            expect(convertedVector.getY()).toBeCloseTo(1)
      })
})

/**
 * @author Samuel Svensson
 */

import { RadianAngle } from '../../src/data/angles/RadianAngle'
import { Vector2 } from '../../src/data/Vector2'

describe('Vector2', () => {
      it('should add two vectors', () => {
            const vector1 = new Vector2(1, 2)
            const vector2 = new Vector2(3, 4)
            const actual = vector1.add(vector2)
            expect(actual.x).toBe(4)
            expect(actual.y).toBe(6)
      })

      it('should subtract two vectors', () => {
            const vector1 = new Vector2(1, 2)
            const vector2 = new Vector2(3, 4)
            const actual = vector1.subtract(vector2)
            expect(actual.x).toBe(-2)
            expect(actual.y).toBe(-2)
      })

      it('should calculate the dot product', () => {
            const vector1 = new Vector2(1, 2)
            const vector2 = new Vector2(3, 4)
            expect(vector1.dotProduct(vector2)).toBe(11)
      })

      it('should multiply by a scalar', () => {
            const vector = new Vector2(1, 2)
            const actual = vector.multiply(2)
            expect(actual.x).toBe(2)
            expect(actual.y).toBe(4)
      })

      it('should calculate the magnitude', () => {
            const vector = new Vector2(3, 4)
            expect(vector.magnitude()).toBe(5)
      })

      it('should normalize the vector', () => {
            const vector = new Vector2(3, 4)
            const actual = vector.normalize()
            expect(actual.x).toBeCloseTo(0.6)
            expect(actual.y).toBeCloseTo(0.8)
      })

      it('should calculate the angle to another vector', () => {
            const vector1 = new Vector2(1, 0)
            const vector2 = new Vector2(0, 1)
            const actual = vector1.angleTo(vector2)
            expect(actual).toBeInstanceOf(RadianAngle)
            expect(actual.get()).toBeCloseTo(Math.PI / 2)
      })
})

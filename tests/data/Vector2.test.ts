/**
 * @author Samuel Svensson
 */

import { RadianAngle } from '../../src/data/angles/RadianAngle'
import { Vector2 } from '../../src/data/Vector2'

describe('Vector2', () => {
      let vector1: Vector2
      let vector2: Vector2

      beforeEach(() => {
            vector1 = new Vector2(1, 2)
            vector2 = new Vector2(3, 4)
      })

      it('should add two vectors', () => {
            const actual = vector1.add(vector2)
            expect(actual.x).toBe(4)
            expect(actual.y).toBe(6)
      })

      it('should subtract two vectors', () => {
            const actual = vector1.subtract(vector2)
            expect(actual.x).toBe(-2)
            expect(actual.y).toBe(-2)
      })

      it('should calculate the dot product', () => {
            expect(vector1.dotProduct(vector2)).toBe(11)
      })

      it('should multiply by a scalar', () => {
            const actual = vector1.multiply(2)
            expect(actual.x).toBe(2)
            expect(actual.y).toBe(4)
      })

      it('should calculate the magnitude', () => {
            expect(vector2.magnitude()).toBe(5)
      })

      it('should normalize the vector', () => {
            const actual = vector2.normalize()
            expect(actual.x).toBe(0.6)
            expect(actual.y).toBe(0.8)
      })

      it('should calculate the direction to another vector', () => {
            const actual = vector1.directionTo(vector2)
            const expected = new Vector2(0.7071, 0.7071)
            expect(actual.x).toBeCloseTo(expected.x)
            expect(actual.y).toBeCloseTo(expected.y)
      })

      it('should calculate the angle to another vector', () => {
            const vector1 = new Vector2(1, 0)
            const vector2 = new Vector2(0, 1)
            const actual = vector1.angleTo(vector2)
            expect(actual).toBeInstanceOf(RadianAngle)
            expect(actual.get()).toBe(Math.PI / 2)
      })

      it('should move the vector', () => {
            const direction = new Vector2(1, 1)
            const scalar = 2
            const actual = vector1.move(direction, scalar)
            const expected = vector1.add(direction.multiply(scalar))
            expect(actual.x).toBe(expected.x)
            expect(actual.y).toBe(expected.y)
      })

      it('should set direction of the vector', () => {
            const direction = new Vector2(1, 1)
            const expected = new Vector2(0.7071, 0.7071)
            vector1.direction(direction)
            expect(vector1.x).toBeCloseTo(expected.x)
            expect(vector1.y).toBeCloseTo(expected.y)
      })
})

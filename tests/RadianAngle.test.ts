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

      test('RadianAngle should be 0', () => {
            const angle = new RadianAngle(0)
            expect(angle.getValue()).toBe(0)
      })

      test('RadianAngle should be 0 (setting 2PI)', () => {
            const angle = new RadianAngle(2 * Math.PI)
            expect(angle.getValue()).toBe(0)
      })

      test('RadianAngle should be 0 (setting -2PI)', () => {
            const angle = new RadianAngle(-2 * Math.PI)
            expect(angle.getValue()).toBe(0)
      })

      test('RadianAngle should be PI/2', () => {
            const angle = new RadianAngle(Math.PI / 2)
            expect(angle.getValue()).toBe(Math.PI / 2)
      })

      test('RadianAngle should be PI/2 (setting 5PI/2)', () => {
            const angle = new RadianAngle((5 * Math.PI) / 2)
            expect(angle.getValue()).toBe(Math.PI / 2)
      })

      test('RadianAngle (setting 0) converted to degrees should be 0', () => {
            const angle = new RadianAngle(0)
            expect(angle.toDegrees().getValue()).toBe(0)
      })

      test('RadianAngle (setting PI) converted to degrees should be 180', () => {
            const angle = new RadianAngle(Math.PI)
            expect(angle.toDegrees().getValue()).toBe(180)
      })
})

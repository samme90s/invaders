/**
 * @fileoverview Tests for Angle class.
 * @author Samuel Svensson
 */

import { Angle } from '../src/data/angles/Angle'

describe('Angle', () => {
      test('Angle should be defined', () => {
            const angle = new Angle(0)
            expect(angle).toBeDefined()
      })

      test('Angle should be 0', () => {
            const angle = new Angle(0)
            expect(angle.getValue()).toBe(0)
      })

      test('Angle should be 0 (setting 360)', () => {
            const angle = new Angle(360)
            expect(angle.getValue()).toBe(0)
      })

      test('Angle should be 0 (setting -360)', () => {
            const angle = new Angle(-360)
            expect(angle.getValue()).toBe(0)
      })

      test('Angle should be 90', () => {
            const angle = new Angle(90)
            expect(angle.getValue()).toBe(90)
      })

      test('Angle should be 90 (setting 450)', () => {
            const angle = new Angle(450)
            expect(angle.getValue()).toBe(90)
      })

      test('Angle (setting 0) converted to radians should be 0', () => {
            const angle = new Angle(0)
            expect(angle.toRadians().getValue()).toBe(0)
      })

      test('Angle (setting 180) converted to radians should be PI', () => {
            const angle = new Angle(180)
            expect(angle.toRadians().getValue()).toBe(Math.PI)
      })
})

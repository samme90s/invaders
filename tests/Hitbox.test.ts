/**
 * @fileoverview Tests for Hitbox class.
 * @author Samuel Svensson
 */

import { Hitbox } from '../src/data/dimensions/Hitbox'
import { Point } from '../src/data/Point'

describe('Hitbox', () => {
      test('Hitbox should be defined', () => {
            const hitbox = new Hitbox(new Point(0, 0), 1, 1)
            expect(hitbox).toBeDefined()
      })

      test('Should return a copy with equal values', () => {
            const hitbox = new Hitbox(new Point(0, 0), 1, 1)
            const hitboxCopy = hitbox.from()
            expect(hitbox).toEqual(hitboxCopy)
      })

      test('Should return a new object when copied', () => {
            const hitbox = new Hitbox(new Point(0, 0), 1, 1)
            const hitboxCopy = hitbox.from()
            expect(hitbox).not.toBe(hitboxCopy)
      })
})

/**
 * @author Samuel Svensson
 */

import { Damage } from '../../../src/data/Damage'
import { Dimension } from '../../../src/data/dimensions/Dimension'
import { Hitpoint } from '../../../src/data/Hitpoint'
import { Interval } from '../../../src/data/Interval'
import { Speed } from '../../../src/data/Speed'
import { Vector2 } from '../../../src/data/Vector2'
import { Bullet } from '../../../src/entities/bullet/Bullet'

describe('Bullet', () => {
      let point: Vector2
      let damage: Damage
      let timeToLive: Interval
      let bullet: Bullet

      beforeEach(() => {
            point = new Vector2(0, 0)
            damage = new Damage(1)
            timeToLive = new Interval(2)
            bullet = new Bullet(
                  point,
                  new Vector2(0, 0),
                  new Dimension(1, 1),
                  new Hitpoint(1),
                  new Speed(1),
                  damage,
                  timeToLive
            )
      })

      it('should be alive', () => {
            bullet.update()
            expect(bullet.isDead()).toBeFalsy()
      })

      it('should be killed', () => {
            bullet.kill()
            expect(bullet.isDead()).toBeTruthy()
      })

      it('should be dead', () => {
            for (let i = 0; i < timeToLive.getStatic(); i++) {
                  bullet.update()
            }
            expect(bullet.isDead()).toBeTruthy()
      })

      it('should return damage object', () => {
            expect(bullet.damage.get()).toEqual(damage.get())
      })
})

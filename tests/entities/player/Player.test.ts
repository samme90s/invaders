/**
 * @author Samuel Svensson
 */

import { Dimension } from '../../../src/data/dimensions/Dimension'
import { Hitpoint } from '../../../src/data/Hitpoint'
import { Speed } from '../../../src/data/Speed'
import { Vector2 } from '../../../src/data/Vector2'
import { BulletController } from '../../../src/entities/bullet/BulletController'
import { Player } from '../../../src/entities/player/Player'

describe('Player', () => {
      let bulletController: BulletController
      let point: Vector2
      let player: Player

      beforeEach(() => {
            bulletController = new BulletController()
            point = new Vector2(0, 0)
            player = new Player(
                  point,
                  new Vector2(0, 0),
                  new Dimension(1, 1),
                  new Hitpoint(1),
                  new Speed(1),
                  bulletController
            )
      })

      it('should call bulletController.shoot', () => {
            const spy = jest.spyOn(bulletController, 'shoot')
            player.shoot()
            expect(spy).toHaveBeenCalledWith(point)
      })

      it('should change direction and move up', () => {
            player.moveUp()
            const expected = new Vector2(0, -1)
            expect(player.direction).toEqual(expected)
            expect(player.point).toEqual(expected)
      })

      it('should change direction and move left', () => {
            player.moveLeft()
            const expected = new Vector2(-1, 0)
            expect(player.direction).toEqual(expected)
            expect(player.point).toEqual(expected)
      })

      it('should change direction and move down', () => {
            player.moveDown()
            const expected = new Vector2(0, 1)
            expect(player.direction).toEqual(expected)
            expect(player.point).toEqual(expected)
      })

      it('should change direction and move right', () => {
            player.moveRight()
            const expected = new Vector2(1, 0)
            expect(player.direction).toEqual(expected)
            expect(player.point).toEqual(expected)
      })
})

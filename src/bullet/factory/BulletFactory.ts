import { Dimension } from '../../data-types/Dimension'
import { Point } from '../../data-types/Point'
import { Vector } from '../../data-types/Vector'
import { Bullet } from '../Bullet'

export class BulletFactory {
      static createThinFastBullet(origin: Point, angle: number) {
            return new Bullet(
                  new Point(origin.x, origin.y),
                  new Dimension(2, 10),
                  new Vector(5, Vector.angleToRadians(angle))
            )
      }

      // Add more bullet variations here...
}

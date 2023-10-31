import { Dimension } from '../../data-types/Dimension'
import { Point } from '../../data-types/Point'
import { PolarVector } from '../../data-types/PolarVector'
import { Bullet } from '../Bullet'

export class BulletFactory {
      static createThinFastBullet(origin: Point, angle: number): Bullet {
            return new Bullet(
                  new Point(origin.x, origin.y),
                  new Dimension(2, 10),
                  new PolarVector(5, angle)
            )
      }

      // Add more bullet variations here...
}

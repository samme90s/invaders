import { Point } from '../../../data-types/Point'
import { Bullet } from '../../Bullet'
import { BulletFactory } from '../../factory/BulletFactory'
import { BulletCreationStrategy } from '../BulletCreationStrategy'

export class FiveBulletSpreadStrategy implements BulletCreationStrategy {
      getBullets(origin: Point): Bullet[] {
            const bullets: Bullet[] = []
            const angles = [110, 100, 90, 80, 70]
            for (let aIx = 0; aIx < angles.length; aIx++) {
                  bullets.push(BulletFactory.createThinFastBullet(origin, angles[aIx]))        
            }

            return bullets
      }
}

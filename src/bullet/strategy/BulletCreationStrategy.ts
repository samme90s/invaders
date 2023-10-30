import { Point } from '../../data-types/Point'
import { Bullet } from '../Bullet'

export interface BulletCreationStrategy {
      getBullets(origin: Point): Bullet[]
}

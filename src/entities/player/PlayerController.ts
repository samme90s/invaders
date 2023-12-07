/**
 * @fileoverview Defines a controller that handles the player's input and
 * actions.
 * @author Samuel Svensson
 */

import { ClipSpace } from '../../data/dimensions/ClipSpace'
import { Alpha } from '../../data/keys/Alpha'
import { Key } from '../../data/keys/Key'
import { Player } from './Player'

export class PlayerController {
      private moveUpKey: Key
      private moveLeftKey: Key
      private moveDownKey: Key
      private moveRightKey: Key
      private shootUpKey: Key
      private shootLeftKey: Key
      private shootDownKey: Key
      private shootRightKey: Key

      constructor(player: Player, clipSpace: ClipSpace) {
            this.moveUpKey = new Key(Alpha.W, () => player.moveUp(clipSpace))
            this.moveLeftKey = new Key(Alpha.A, () =>
                  player.moveLeft(clipSpace)
            )
            this.moveDownKey = new Key(Alpha.S, () =>
                  player.moveDown(clipSpace)
            )
            this.moveRightKey = new Key(Alpha.D, () =>
                  player.moveRight(clipSpace)
            )
            this.shootUpKey = new Key(Alpha.I, () => player.shootUp())
            this.shootLeftKey = new Key(Alpha.J, () => player.shootLeft())
            this.shootDownKey = new Key(Alpha.K, () => player.shootDown())
            this.shootRightKey = new Key(Alpha.L, () => player.shootRight())
      }

      setMoveUpKey(key: Alpha): void {
            this.moveUpKey.setKey(key)
      }

      setMoveLeftKey(key: Alpha): void {
            this.moveLeftKey.setKey(key)
      }

      setMoveDownKey(key: Alpha): void {
            this.moveDownKey.setKey(key)
      }

      setMoveRightKey(key: Alpha): void {
            this.moveRightKey.setKey(key)
      }

      setShootUpKey(key: Alpha): void {
            this.shootUpKey.setKey(key)
      }

      setShootLeftKey(key: Alpha): void {
            this.shootLeftKey.setKey(key)
      }

      setShootDownKey(key: Alpha): void {
            this.shootDownKey.setKey(key)
      }

      setShootRightKey(key: Alpha): void {
            this.shootRightKey.setKey(key)
      }
}

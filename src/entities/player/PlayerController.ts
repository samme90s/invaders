/**
 * @fileoverview Defines a controller that
 * handles the player's input and actions.
 * @author Samuel Svensson
 */

import { Alpha } from '../../data/keys/Alpha'
import { Key } from '../../data/keys/Key'
import { Player } from './Player'

export class PlayerController {
      private moveUpKey: Key
      private moveLeftKey: Key
      private moveDownKey: Key
      private moveRightKey: Key
      private shootKey: Key

      constructor(player: Player) {
            this.moveUpKey = new Key(Alpha.W, () => player.moveUp())
            this.moveLeftKey = new Key(Alpha.A, () => player.moveLeft())
            this.moveDownKey = new Key(Alpha.S, () => player.moveDown())
            this.moveRightKey = new Key(Alpha.D, () => player.moveRight())
            this.shootKey = new Key(Alpha.SPACE, () => player.shoot())
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

      setShootKey(key: Alpha): void {
            this.shootKey.setKey(key)
      }
}

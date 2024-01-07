/**
 * @fileoverview Holds the keybinds for
 * a player and their respective actions.
 * @author Samuel Svensson
 */

import { Alpha } from '../../data/keys/Alpha'
import { Key } from '../../data/keys/Key'
import { Player } from './Player'

export class Keybinds {
      private _moveUp: Key
      private _moveLeft: Key
      private _moveDown: Key
      private _moveRight: Key
      private _shoot: Key

      constructor(player: Player) {
            this._moveUp = new Key(Alpha.W, () => player.moveUp())
            this._moveLeft = new Key(Alpha.A, () => player.moveLeft())
            this._moveDown = new Key(Alpha.S, () => player.moveDown())
            this._moveRight = new Key(Alpha.D, () => player.moveRight())
            this._shoot = new Key(Alpha.SPACE, () => player.shoot())
      }

      get moveUp(): Key {
            return this._moveUp
      }

      get moveLeft(): Key {
            return this._moveLeft
      }

      get moveDown(): Key {
            return this._moveDown
      }

      get moveRight(): Key {
            return this._moveRight
      }

      get shoot(): Key {
            return this._shoot
      }
}

/**
 * @author Samuel Svensson
 */

import { Alpha } from './Alpha'

export class Key {
      private key: string
      private action: () => void

      constructor(key: Alpha, action: () => void) {
            this.setKey(key)
            this.action = action
            document.addEventListener('keydown', this.keyDown.bind(this))
      }

      private keyDown(event: KeyboardEvent): void {
            if (event.key === this.key) {
                  window.requestAnimationFrame(this.action.bind(this))
            }
      }

      setKey(key: Alpha): void {
            this.key = key
      }
}

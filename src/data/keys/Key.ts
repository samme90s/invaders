/**
 * @author Samuel Svensson
 */

import { Alpha } from './Alpha'

export class Key {
      private key: string
      private readonly action: () => void

      constructor(key: Alpha, action: () => void) {
            this.set(key)
            this.action = action
            document.addEventListener('keydown', this.keyDown.bind(this))
      }

      private keyDown(event: KeyboardEvent): void {
            if (event.key === this.key) {
                  window.requestAnimationFrame(this.action.bind(this))
            }
      }

      set(key: Alpha): void {
            this.key = key
      }
}

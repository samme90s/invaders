/**
 * @author Samuel Svensson
 */

import { Alpha } from './Alpha'

export class Key {
      private key: string
      private active: boolean = false
      private action: () => void

      constructor(key: Alpha, action: () => void) {
            this.setKey(key)
            this.action = action
            document.addEventListener('keydown', this.keyDown.bind(this))
            document.addEventListener('keyup', this.keyUp.bind(this))
            this.loop()
      }

      private loop(): void {
            if (this.active) {
                  this.action()
            }
            window.requestAnimationFrame(this.loop.bind(this))
      }

      private keyDown(event: KeyboardEvent): void {
            if (event.key === this.key) {
                  this.active = true
            }
      }

      private keyUp(event: KeyboardEvent): void {
            if (event.key === this.key) {
                  this.active = false
            }
      }

      setKey(key: Alpha): void {
            this.key = key
      }
}

/**
 * @fileoverview Defines a controller that handles the set keybindings for actions and their
 * respective states.
 * @author Samuel Svensson
 */

export class PlayerController {
      private actions: { [key: string]: boolean } = {
            w: false,
            a: false,
            s: false,
            d: false,
            p: false,
            l: false,
            ö: false,
            ä: false
      }

      constructor() {
            document.addEventListener('keydown', event => this.keyDown(event))
            document.addEventListener('keyup', event => this.keyUp(event))
      }

      get up(): boolean {
            return this.actions['w']
      }

      get left(): boolean {
            return this.actions['a']
      }

      get down(): boolean {
            return this.actions['s']
      }

      get right(): boolean {
            return this.actions['d']
      }

      get shootUp(): boolean {
            return this.actions['p']
      }

      get shootLeft(): boolean {
            return this.actions['l']
      }

      get shootDown(): boolean {
            return this.actions['ö']
      }

      get shootRight(): boolean {
            return this.actions['ä']
      }

      private keyDown(event: KeyboardEvent): void {
            if (Object.hasOwn(this.actions, event.key)) {
                  this.actions[event.key] = true
            }
      }

      private keyUp(event: KeyboardEvent): void {
            if (Object.hasOwn(this.actions, event.key)) {
                  this.actions[event.key] = false
            }
      }
}

/**
 * @fileoverview Defines a controller that handles the set keybindings for actions and their
 * respective states.
 * @author Samuel Svensson
 */

export class ActionController {
      private actions: { [key: string]: boolean } = {
            w: false,
            a: false,
            s: false,
            d: false,
            ' ': false,
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

      get shoot(): boolean {
            return this.actions[' ']
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
